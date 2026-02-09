import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../../../interface/generated/liana/schemas/graphviz_low_level/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

type Parameters = {
    'graph type': d_in.Graph.type_
}

namespace signatures {
    export type Graph = _pi.Transformer<d_in.Graph, d_out.Paragraph>
    export type Statement_List = _pi.Transformer_With_Parameter<d_in.Statement_List, d_out.Phrase, Parameters>
    export type ID = _pi.Transformer<d_in.ID, d_out.Phrase>
    export type Attribute_List = _pi.Transformer<d_in.Attribute_List, d_out.Phrase>
    export type Node_ID = _pi.Transformer<d_in.Node_ID, d_out.Phrase>
    export type Subgraph = _pi.Transformer_With_Parameter<d_in.Subgraph, d_out.Phrase, Parameters>
}

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


//dependencies
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"


export const Graph: signatures.Graph = ($) => sh.group([
    sh.g.nested_block([
        $.strict
            ? sh.ph.literal("strict ")
            : sh.ph.nothing(),
        _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'digraph': return _p.ss($, () => sh.ph.literal("digraph "))
                case 'graph': return _p.ss($, () => sh.ph.literal("graph "))
                default: return _p.au($[0])
            }
        }),
        $.name.__decide(
            ($) => sh.ph.composed([
                ID($),
                sh.ph.literal(" "),
            ]),
            () => sh.ph.nothing()
        ),
        Statement_List($.statements, {
            'graph type': $.type
        }),
    ]),
])

export const Statement_List: signatures.Statement_List = ($, $p) => sh.ph.composed([
    sh.ph.literal("{"),
    sh.ph.indent([
        sh.g.sub($.__l_map(($) => sh.g.nested_block([
            _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'attribute assignment': return _p.ss($, ($) => sh.ph.composed([
                        ID($.name),
                        sh.ph.literal(" = "),
                        ID($.value),
                        sh.ph.literal(";"),
                    ]))
                    case 'attribute list': return _p.ss($, ($) => sh.ph.composed([
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'edge': return _p.ss($, () => sh.ph.literal("edge "))
                                case 'node': return _p.ss($, () => sh.ph.literal("node "))
                                case 'graph': return _p.ss($, () => sh.ph.literal("graph "))
                                default: return _p.au($[0])
                            }
                        }),
                        Attribute_List($.attributes),
                        sh.ph.literal(";"),
                    ]))
                    case 'edge': return _p.ss($, ($) => sh.ph.composed([
                        _p.decide.state($.left, ($) => {
                            switch ($[0]) {
                                case 'node': return _p.ss($, ($) => Node_ID($))
                                case 'subgraph': return _p.ss($, ($) => Subgraph($, $p))
                                default: return _p.au($[0])
                            }
                        }),
                        _p.decide.state($p['graph type'], ($) => {
                            switch ($[0]) {
                                case 'digraph': return _p.ss($, () => sh.ph.literal(" -> "))
                                case 'graph': return _p.ss($, () => sh.ph.literal(" -- "))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.ph.composed(op_enrich_list_elements_with_position_information($.right).__l_map(($) => sh.ph.composed([
                            _p.decide.state($.value, ($) => {
                                switch ($[0]) {
                                    case 'node': return _p.ss($, ($) => Node_ID($))
                                    case 'subgraph': return _p.ss($, ($) => Subgraph($, $p))
                                    default: return _p.au($[0])
                                }
                            }),
                            $['is last']
                                ? sh.ph.nothing()
                                : sh.ph.literal(", "),
                        ]))),
                        Attribute_List($.attributes),
                    ]))
                    case 'node': return _p.ss($, ($) => sh.ph.composed([
                        Node_ID($.node),
                        _p.boolean.list_is_empty($['attribute list'])
                            ? sh.ph.nothing()
                            : Attribute_List($['attribute list']),
                        sh.ph.literal(";"),
                    ]))
                    case 'subgraph': return _p.ss($, ($) => Subgraph($, $p))
                    default: return _p.au($[0])
                }
            })
        ]))),
    ]),
    sh.ph.literal("}"),
])

export const ID: signatures.ID = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'id': return _p.ss($, ($) => sh.b.snippet($)) //FIX escaping
        case 'string': return _p.ss($, ($) => sh.b.snippet(s_quoted($)))
        case 'html': return _p.ss($, ($) => sh.b.snippet($))
        case 'number': return _p.ss($, ($) => sh.ph.literal("FIXME NUMBER"))
        default: return _p.au($[0])
    }
})

export const Attribute_List: signatures.Attribute_List = ($) => sh.ph.composed([
    sh.ph.literal(" [ "),
    sh.ph.composed($.__l_map(($) => sh.ph.composed([
        ID($.name),
        sh.ph.literal("="),
        ID($.value),
        sh.ph.literal(" "),
    ]))),
    sh.ph.literal("]"),
])

export const Node_ID: signatures.Node_ID = ($) => sh.ph.composed([
    ID($.id),
    $.port.__decide(
        ($) => sh.ph.composed([
            sh.ph.literal(":"),
            ID($.port),
            $['compass point'].__decide(
                ($) => sh.ph.composed([
                    sh.ph.literal(":"),
                    ID($),
                ]),
                () => sh.ph.nothing()
            ),
        ]),
        () => sh.ph.nothing()
    ),
])

export const Subgraph: signatures.Subgraph = ($, $p) => sh.ph.composed([
    $.subgraph.__decide(
        ($) => sh.ph.composed([
            sh.ph.literal("subgraph "),
            $.__decide(
                ($) => sh.ph.composed([
                    ID($),
                    sh.ph.literal(" "),
                ]),
                () => sh.ph.nothing()
            ),
        ]),
        () => sh.ph.nothing()
    ),
    Statement_List($.statements, {
        'graph type': $p['graph type']
    }),
])