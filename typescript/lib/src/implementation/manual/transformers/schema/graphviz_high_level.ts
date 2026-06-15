import * as pt from 'pareto-core/dist/transformer/implementation'

import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-graphviz/dist/interface/generated/liana/schemas/high_level/data"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'graph name': string,
    }

): d_out.Graph => ({
    'name': pt.literal.set($p['graph name']),
    'tree': {
        'attributes': pt.literal.list([]),
        'elements': $.modules.__d_map(($) => ['node', {
            'attributes': pt.literal.list([]),
        }]),
    },
    'type': ['directed', {
        'edges': pt.list.from.dictionary($.modules).flatten(
            ($, id) => Value($['root value'], { 'type name': id })
        ),
    }],
})


export const Value = (
    $: d_in.Value,
    $p: {
        'type name': string,
    },
): d_out.Graph.type_.directed.edges => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'simple': return pt.ss($, ($) => pt.literal.list([]))
        case 'list': return pt.ss($, ($) => Value($.value, $p))
        case 'nothing': return pt.ss($, ($) => pt.literal.list([]))
        case 'reference': return pt.ss($, ($) => pt.literal.list([]))
        case 'component': return pt.ss($, ($) => pt.literal.list<d_out.Graph.type_.directed.edges.L>([
            {
                'from': {
                    'start': $p['type name'],
                    'tail': pt.literal.list([]),
                    'port data': pt.literal.not_set()
                },
                'to': {
                    'start': pt.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'external': return pt.ss($, ($) => "FIXME")
                            case 'internal': return pt.ss($, ($) => $['l id'])
                            case 'internal acyclic': return pt.ss($, ($) => $['l id'])
                            default: return pt.au($[0])
                        }
                    }),
                    'tail': pt.literal.list([]),
                    'port data': pt.literal.not_set()
                },
                'attributes': pt.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return pt.ss($, ($) => pt.literal.list([]))
                        case 'internal': return pt.ss($, ($) => pt.literal.list([]))
                        case 'internal acyclic': return pt.ss($, ($) => pt.literal.list([
                            ['color', "red"],
                        ]))
                        default: return pt.au($[0])
                    }
                }),
            }

        ]))
        case 'dictionary': return pt.ss($, ($) => Value($.value, $p))
        case 'group': return pt.ss($, ($) => pt.list.from.dictionary($).flatten(
            ($, id) => Value($.value, $p)
        ))
        case 'optional': return pt.ss($, ($) => Value($, $p))
        case 'state': return pt.ss($, ($) => pt.list.from.dictionary($.options).flatten(
            ($) => Value($.value, $p)
        ))
        case 'text': return pt.ss($, ($) => pt.literal.list([]))
        // case 'type parameter': return pa.ss($, ($) => pa.literal.list([]))
        default: return pt.au($[0])
    }
})
