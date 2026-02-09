import * as _p from 'pareto-core/dist/assign'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/graphviz_high_level/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/graphviz_low_level/data"

import { $$ as s_list_of_separated_texts } from "pareto-standard-operations/dist/implementation/temp_serializers/schemas/list_of_separated_texts"



export const Graph = ($: d_in.Graph): d_out.Graph => ({
    'strict': true,
    'type': _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'directed': return _p.ss($, () => ['digraph', null])
            case 'undirected': return _p.ss($, () => ['graph', null])
            default: return _p.au($[0])
        }
    }),
    'name': _p.optional.map(
        $.name,
        ($) => ['string', $]
    ),
    'statements': _p.list.nested_literal_old([
        Tree($.tree, { 'path': _p.list.literal([]) }),
        _p.decide.state($.type, ($): d_out.Graph.statements => {
            switch ($[0]) {
                case 'directed': return _p.ss($, ($) => $.edges.__l_map(($): d_out.Statement_List.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.from.start],
                        'port': _p.optional.literal.not_set()
                    }],
                    "right": _p.list.literal<d_out.Statement_List.L.SG.edge.right.L>([
                        ['node', {
                            'id': ['string', $.to.start],
                            'port': _p.optional.literal.not_set()
                        }]
                    ]),
                    "attributes": $.attributes.__l_map(($) => _p.decide.state($, ($): d_out.Attribute_List.L => {
                        switch ($[0]) {
                            case 'arrowhead': return _p.ss($, ($) => ({ "name": ['id', "arrowhead"], "value": ['string', $] }))
                            case 'arrowsize': return _p.ss($, ($) => ({ "name": ['id', "arrowsize"], "value": ['number', $] }))
                            case 'arrowtail': return _p.ss($, ($) => ({ "name": ['id', "arrowtail"], "value": ['string', $] }))
                            case 'bgcolor': return _p.ss($, ($) => ({ "name": ['id', "bgcolor"], "value": ['string', $] }))
                            case 'color': return _p.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                            case 'colorscheme': return _p.ss($, ($) => ({ "name": ['id', "colorscheme"], "value": ['string', $] }))
                            case 'comment': return _p.ss($, ($) => ({ "name": ['id', "comment"], "value": ['string', $] }))
                            case 'constraint': return _p.ss($, ($) => ({ "name": ['id', "constraint"], "value": ['string', "true"] }))
                            case 'decorate': return _p.ss($, ($) => ({ "name": ['id', "decorate"], "value": ['string', $ ? "true" : "false"] }))
                            case 'edge lp': return _p.ss($, ($) => ({ "name": ['id', "edge lp"], "value": ['string', $] }))
                            case 'edge target': return _p.ss($, ($) => ({ "name": ['id', "edge target"], "value": ['string', $] }))
                            case 'edge tooltip': return _p.ss($, ($) => ({ "name": ['id', "edge tooltip"], "value": ['string', $] }))
                            case 'edge url': return _p.ss($, ($) => ({ "name": ['id', "edge url"], "value": ['string', $] }))
                            case 'head lp': return _p.ss($, ($) => ({ "name": ['id', "head lp"], "value": ['string', $] }))
                            case 'headclip': return _p.ss($, ($) => ({ "name": ['id', "headclip"], "value": ['string', $ ? "true" : "false"] }))
                            case 'headlabel': return _p.ss($, ($) => ({ "name": ['id', "headlabel"], "value": ['string', $] }))
                            case 'headport': return _p.ss($, ($) => ({ "name": ['id', "headport"], "value": ['string', $] }))
                            case 'height': return _p.ss($, ($) => ({ "name": ['id', "height"], "value": ['number', $] }))
                            case 'id': return _p.ss($, ($) => ({ "name": ['id', "id"], "value": ['string', $] }))
                            case 'label': return _p.ss($, ($) => ({ "name": ['id', "label"], "value": ['string', $] }))
                            case 'label angle': return _p.ss($, ($) => ({ "name": ['id', "label angle"], "value": ['number', $] }))
                            case 'label distance': return _p.ss($, ($) => ({ "name": ['id', "label distance"], "value": ['number', $] }))
                            case 'label float': return _p.ss($, ($) => ({ "name": ['id', "label float"], "value": ['string', $ ? "true" : "false"] }))
                            case 'label lp': return _p.ss($, ($) => ({ "name": ['id', "label lp"], "value": ['string', $] }))
                            case 'labelfloat': return _p.ss($, ($) => ({ "name": ['id', "labelfloat"], "value": ['string', $ ? "true" : "false"] }))
                            case 'labelhref': return _p.ss($, ($) => ({ "name": ['id', "labelhref"], "value": ['string', $] }))
                            case 'layer': return _p.ss($, ($) => ({ "name": ['id', "layer"], "value": ['string', $] }))
                            case 'len': return _p.ss($, ($) => ({ "name": ['id', "len"], "value": ['number', $] }))
                            case 'lhead': return _p.ss($, ($) => ({ "name": ['id', "lhead"], "value": ['string', $] }))
                            case 'lp': return _p.ss($, ($) => ({ "name": ['id', "lp"], "value": ['string', $] }))
                            case 'ltail': return _p.ss($, ($) => ({ "name": ['id', "ltail"], "value": ['string', $] }))
                            case 'minlen': return _p.ss($, ($) => ({ "name": ['id', "minlen"], "value": ['number', $] }))
                            case 'pen width': return _p.ss($, ($) => ({ "name": ['id', "pen width"], "value": ['number', $] }))
                            case 'pos': return _p.ss($, ($) => ({ "name": ['id', "pos"], "value": ['string', $] }))
                            case 'same head': return _p.ss($, ($) => ({ "name": ['id', "same head"], "value": ['string', $ ? "true" : "false"] }))
                            case 'same tail': return _p.ss($, ($) => ({ "name": ['id', "same tail"], "value": ['string', $ ? "true" : "false"] }))
                            case 'showboxes': return _p.ss($, ($) => ({ "name": ['id', "showboxes"], "value": ['string', $ ? "true" : "false"] }))
                            case 'style': return _p.ss($, ($) => ({ "name": ['id', "style"], "value": ['string', $] }))
                            case 'tail lp': return _p.ss($, ($) => ({ "name": ['id', "tail lp"], "value": ['string', $] }))
                            case 'tailclip': return _p.ss($, ($) => ({ "name": ['id', "tailclip"], "value": ['string', $ ? "true" : "false"] }))
                            case 'taillabel': return _p.ss($, ($) => ({ "name": ['id', "taillabel"], "value": ['string', $] }))
                            case 'tailport': return _p.ss($, ($) => ({ "name": ['id', "tailport"], "value": ['string', $] }))
                            case 'tooltip': return _p.ss($, ($) => ({ "name": ['id', "tooltip"], "value": ['string', $] }))
                            case 'weight': return _p.ss($, ($) => ({ "name": ['id', "weight"], "value": ['number', $] }))
                            case 'xlabel': return _p.ss($, ($) => ({ "name": ['id', "xlabel"], "value": ['string', $] }))
                            case 'xlp': return _p.ss($, ($) => ({ "name": ['id', "xlp"], "value": ['string', $] }))
                            case 'dir': return _p.ss($, ($) => ({ "name": ['id', "dir"], "value": ['string', "FIXME"] }))
                            default: return _p.au($[0])
                        }
                    }))
                }]))
                case 'undirected': return _p.ss($, ($) => $.edges.__l_map(($): d_out.Statement_List.L => ['edge', {
                    "left": ['node', {
                        'id': ['string', $.yin.start],
                        'port': _p.optional.literal.not_set()
                    }],
                    "right": _p.list.literal<d_out.Statement_List.L.SG.edge.right.L>([
                        ['node', {
                            'id': ['string', $.yang.start],
                            'port': _p.optional.literal.not_set()
                        }]
                    ]),
                    "attributes": _p.list.literal([]), //FIXME: attributes
                }]))
                default: return _p.au($[0])
            }
        })
    ])

})

export const Tree = (
    $: d_in.Tree,
    $p: {
        'path': _pi.List<string>
    }
): d_out.Statement_List => _p.list.flatten(
    _p.list.from_dictionary(
        $.elements,
        ($, id): d_out.Statement_List => {
            const path = _p.list.nested_literal_old([
                $p.path,
                [
                    key
                ]
            ])
            return _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'node': return _p.ss($, ($) => _p.list.literal([
                        ['node', {
                            'node': {
                                'id': ['string', s_list_of_separated_texts(path, { 'separator': '>' })],
                                'port': _p.optional.literal.not_set()
                            },
                            'attribute list': _p.list.nested_literal_old([
                                [
                                    {
                                        'name': ['id', "label"],
                                        'value': ['string', key],
                                    }
                                ],
                                $.attributes.__l_map(($): d_out.Attribute_List.L => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'color': return _p.ss($, ($) => ({ "name": ['id', "color"], "value": ['string', $] }))
                                        default: return _pdev.implement_me("xx")
                                    }
                                })),
                            ]),

                        }]
                    ]))
                    case 'sub': return _p.ss($, ($) => Tree($.tree, { 'path': path }))
                    default: return _p.au($[0])
                }
            })
        }
    ),
    ($) => $
)