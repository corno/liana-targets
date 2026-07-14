import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "./resolved.js"
namespace declarations {
    export type Schema = p_.Transformer_With_Parameter<
        s_in.Schema,
        s_out.Graph,
        s_parameters.Schema_Parameters
    >
    export type Value = p_.Transformer_With_Parameter<
        s_in.Value,
        s_out.Graph.type_.directed.edges,
        s_parameters.Value_Parameters
    >
}

export const Schema: declarations.Schema = ($, $p) => ({
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

export const Value: declarations.Value = ($, $p) => p_.from.state($).decide(
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
