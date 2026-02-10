// import * as _p from 'pareto-core/dist/assign'

// import * as d_in from "pareto/dist/interface/generated/liana/schemas/schema/data"
// import * as d_out from "../../../../../interface/generated/liana/schemas/graphviz_high_level/data"



export const Schema_Tree = (
    $: d_in_s.Schema_Tree,
    $p: {
        'graph name': string
    }
): d_out.Directory => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => _p.dictionary.literal({
            "graphviz.dot": sh.n.file(
                t_graphviz_to_fountain_pen.Graph(
                    t_schema_to_graphviz.Schema($, {
                        'graph name': $p['graph name']
                    })
                ),
            )
        }))
        case 'set': return _p.ss($, ($) => Schemas($))
        default: return _p.au($[0])
    }
})

export const Schemas = ($: d_in_s.Schemas): d_out.Directory => $.dictionary.__d_map(($, id) => sh.n.directory(Schema_Tree($, { 'graph name': key })))

export const Module = (
    $: d_in.Module,
    $p: {
        'graph name': string
    }
): d_out.Directory => Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })

// export const Type_Node = (
//     $: d_in.Type_Node,
//     $p: {
//         'type name': string,
//     },
// ): d_out.Graph._type.SG.directed.edges => _p.decide.state($, ($) => {
//     switch ($[0]) {
//         case 'number': return _p.ss($, ($) => _p.list.literal([]))
//         case 'boolean': return _p.ss($, ($) => _p.list.literal([]))
//         case 'list': return _p.ss($, ($) => Type_Node($.node, $p))
//         case 'nothing': return _p.ss($, ($) => _p.list.literal([]))
//         case 'reference': return _p.ss($, ($) => _p.list.literal([]))
//         case 'component': return _p.ss($, ($) => _p.list.literal<d_out.Graph._type.SG.directed.edges.L>([
//             {
//                 'from': {
//                     'start': $p['type name'],
//                     'tail': _p.list.literal([]),
//                     'port data': _p.optional.literal.not_set()
//                 },
//                 'to': {
//                     'start': _p.decide.state($, ($) => {
//                         switch ($[0]) {
//                             case 'external': return _p.ss($, ($) => "FIXME")
//                             case 'internal': return _p.ss($, ($) => $.key)
//                             case 'internal cyclic': return _p.ss($, ($) => $.key)
//                             default: return _p.au($[0])
//                         }
//                     }),
//                     'tail': _p.list.literal([]),
//                     'port data': _p.optional.literal.not_set()
//                 },
//                 'attributes': _p.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'external': return _p.ss($, ($) => _p.list.literal([]))
//                         case 'internal': return _p.ss($, ($) => _p.list.literal([]))
//                         case 'internal cyclic': return _p.ss($, ($) => _p.list.literal([
//                             ['color', "red"],
//                         ]))
//                         default: return _p.au($[0])
//                     }
//                 }),
//             }

//         ]))
//         case 'dictionary': return _p.ss($, ($) => Type_Node($.node, $p))
//         case 'group': return _p.ss($, ($) => _p.list.flatten(
//             $['ordered list'],
//             ($) => Type_Node($.value.node, $p)
//         ))
//         case 'optional': return _p.ss($, ($) => Type_Node($, $p))
//         case 'state group': return _p.ss($, ($) => _p.list.flatten(
//             _p.list.from_dictionary(
//                 $,
//                 ($) => Type_Node($.node, $p)
//             ),
//             ($) => $
//         ))
//         case 'text': return _p.ss($, ($) => _p.list.literal([]))
//         // case 'type parameter': return pa.ss($, ($) => pa.list.literal([]))
//         default: return _p.au($[0])
//     }
// })

// export const Schema = (
//     $: d_in.Schema,
//     $p: {
//         'graph name': string,
//     }

// ): d_out.Graph => ({
//     'name': _p.optional.literal.set($p['graph name']),
//     'tree': {
//         'attributes': _p.list.literal([]),
//         'elements': $.types.dictionary.__d_map(($) => ['node', {
//             'attributes': _p.list.literal([]),
//         }]),
//     },
//     'type': ['directed', {
//         'edges': _p.list.flatten(
//             $.types['ordered list'],
//             ($) => Type_Node($.value.node, { 'type name': $.key })
//         ),
//     }],
// })
