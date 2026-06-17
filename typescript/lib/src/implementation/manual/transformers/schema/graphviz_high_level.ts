import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-graphviz/dist/interface/generated/liana/schemas/high_level/data"


export const Schema: p_i.Transformer_With_Parameter<
    d_in.Schema,
    d_out.Graph,
    { 'graph name': string }
> = ($, $p) => ({
    'name': p_.literal.set($p['graph name']),
    'tree': {
        'attributes': p_.literal.list([]),
        'elements': $.modules.__d_map(($) => ['node', {
            'attributes': p_.literal.list([]),
        }]),
    },
    'type': ['directed', {
        'edges': p_.list.from.dictionary($.modules).flatten(
            ($, id) => Value($['root value'], { 'type name': id })
        ),
    }],
})


export const Value: p_i.Transformer_With_Parameter<
    d_in.Value,
    d_out.Graph.type_.directed.edges,
    { 'type name': string }
> = ($, $p) => p_.decide.state($, ($) => {
    switch ($[0]) {
        case 'simple': return p_.ss($, ($) => p_.literal.list([]))
        case 'list': return p_.ss($, ($) => Value($.value, $p))
        case 'nothing': return p_.ss($, ($) => p_.literal.list([]))
        case 'reference': return p_.ss($, ($) => p_.literal.list([]))
        case 'component': return p_.ss($, ($) => p_.literal.list<d_out.Graph.type_.directed.edges.L>([
            {
                'from': {
                    'start': $p['type name'],
                    'tail': p_.literal.list([]),
                    'port data': p_.literal.not_set()
                },
                'to': {
                    'start': p_.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'external': return p_.ss($, ($) => "FIXME")
                            case 'internal': return p_.ss($, ($) => $['l id'])
                            case 'internal acyclic': return p_.ss($, ($) => $['l id'])
                            default: return p_.au($[0])
                        }
                    }),
                    'tail': p_.literal.list([]),
                    'port data': p_.literal.not_set()
                },
                'attributes': p_.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return p_.ss($, ($) => p_.literal.list([]))
                        case 'internal': return p_.ss($, ($) => p_.literal.list([]))
                        case 'internal acyclic': return p_.ss($, ($) => p_.literal.list([
                            ['color', "red"],
                        ]))
                        default: return p_.au($[0])
                    }
                }),
            }

        ]))
        case 'dictionary': return p_.ss($, ($) => Value($.value, $p))
        case 'group': return p_.ss($, ($) => p_.list.from.dictionary($).flatten(
            ($, id) => Value($.value, $p)
        ))
        case 'optional': return p_.ss($, ($) => Value($, $p))
        case 'state': return p_.ss($, ($) => p_.list.from.dictionary($.options).flatten(
            ($) => Value($.value, $p)
        ))
        case 'text': return p_.ss($, ($) => p_.literal.list([]))
        // case 'type parameter': return pa.ss($, ($) => pa.literal.list([]))
        default: return p_.au($[0])
    }
})
