import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-graphviz/interface/generated/liana/schemas/high_level/data"

export namespace d_function {
    export type Schema_Parameters = {
        'graph name': string
    }
    export type Value_Parameters = {
        'type name': string
    }
}

export namespace interface_ {
    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Graph,
        d_function.Schema_Parameters
    >
    export type Value = p_i.Transformer_With_Parameter<
        d_in.Value,
        d_out.Graph.type_.directed.edges,
        d_function.Value_Parameters
    >
}

export const Schema: interface_.Schema = ($, $p) => ({
    'name': p_.literal.set($p['graph name']),
    'tree': {
        'attributes': p_.literal.list([]),
        'elements': p_.from.dictionary($.modules).map(
            ($) => ['node', {
                'attributes': p_.literal.list([]),
            }]),
    },
    'type': ['directed', {
        'edges': p_.from.dictionary($.modules).flatten_to_list(
            ($, id) => Value($['root value'], { 'type name': id })
        ),
    }],
})

export const Value: interface_.Value = ($, $p) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'simple': return p_.option($, ($) => p_.literal.list([]))
            case 'list': return p_.option($, ($) => Value($.value, $p))
            case 'nothing': return p_.option($, ($) => p_.literal.list([]))
            case 'reference': return p_.option($, ($) => p_.literal.list([]))
            case 'component': return p_.option($, ($) => p_.literal.list([
                {
                    'from': {
                        'start': $p['type name'],
                        'tail': p_.literal.list([]),
                        'port data': p_.literal.not_set()
                    },
                    'to': {
                        'start': p_.from.state($.type).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'external': return p_.option($, ($) => "FIXME")
                                    case 'internal': return p_.option($, ($) => $['l id'])
                                    case 'internal acyclic': return p_.option($, ($) => $['l id'])
                                    default: return p_.exhaustive($[0])
                                }
                            }),
                        'tail': p_.literal.list([]),
                        'port data': p_.literal.not_set()
                    },
                    'attributes': p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'external': return p_.option($, ($) => p_.literal.list([]))
                                case 'internal': return p_.option($, ($) => p_.literal.list([]))
                                case 'internal acyclic': return p_.option($, ($) => p_.literal.list([
                                    ['color', "red"],
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }),
                }

            ]))
            case 'dictionary': return p_.option($, ($) => Value($.value, $p))
            case 'group': return p_.option($, ($) => p_.from.dictionary($).flatten_to_list(
                ($, id) => Value($.value, $p)
            ))
            case 'optional': return p_.option($, ($) => Value($, $p))
            case 'state': return p_.option($, ($) => p_.from.dictionary($.options).flatten_to_list(
                ($) => Value($.value, $p)
            ))
            case 'text': return p_.option($, ($) => p_.literal.list([]))
            default: return p_.exhaustive($[0])
        }
    })
