import * as _p from 'pareto-core/dist/assign'

import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-graphviz/dist/interface/generated/liana/schemas/high_level/data"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'graph name': string,
    }

): d_out.Graph => ({
    'name': _p.optional.literal.set($p['graph name']),
    'tree': {
        'attributes': _p.list.literal([]),
        'elements': $.modules.__d_map(($) => ['node', {
            'attributes': _p.list.literal([]),
        }]),
    },
    'type': ['directed', {
        'edges': _p.list.from.dictionary($.modules).flatten(
            ($, id) => Value($['root value'], { 'type name': id })
        ),
    }],
})


export const Value = (
    $: d_in.Value,
    $p: {
        'type name': string,
    },
): d_out.Graph.type_.directed.edges => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($) => _p.list.literal([]))
        case 'boolean': return _p.ss($, ($) => _p.list.literal([]))
        case 'list': return _p.ss($, ($) => Value($.value, $p))
        case 'nothing': return _p.ss($, ($) => _p.list.literal([]))
        case 'reference': return _p.ss($, ($) => _p.list.literal([]))
        case 'component': return _p.ss($, ($) => _p.list.literal<d_out.Graph.type_.directed.edges.L>([
            {
                'from': {
                    'start': $p['type name'],
                    'tail': _p.list.literal([]),
                    'port data': _p.optional.literal.not_set()
                },
                'to': {
                    'start': _p.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'external': return _p.ss($, ($) => "FIXME")
                            case 'internal': return _p.ss($, ($) => $['l id'])
                            case 'internal acyclic': return _p.ss($, ($) => $['l id'])
                            default: return _p.au($[0])
                        }
                    }),
                    'tail': _p.list.literal([]),
                    'port data': _p.optional.literal.not_set()
                },
                'attributes': _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => _p.list.literal([]))
                        case 'internal': return _p.ss($, ($) => _p.list.literal([]))
                        case 'internal acyclic': return _p.ss($, ($) => _p.list.literal([
                            ['color', "red"],
                        ]))
                        default: return _p.au($[0])
                    }
                }),
            }

        ]))
        case 'dictionary': return _p.ss($, ($) => Value($.value, $p))
        case 'group': return _p.ss($, ($) => _p.list.from.dictionary($).flatten(
            ($, id) => Value($.value, $p)
        ))
        case 'optional': return _p.ss($, ($) => Value($, $p))
        case 'state': return _p.ss($, ($) => _p.list.from.dictionary($.options).flatten(
            ($) => Value($.value, $p)
        ))
        case 'text': return _p.ss($, ($) => _p.list.literal([]))
        // case 'type parameter': return pa.ss($, ($) => pa.list.literal([]))
        default: return _p.au($[0])
    }
})
