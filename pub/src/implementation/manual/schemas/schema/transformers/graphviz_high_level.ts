// import * as _p from 'pareto-core/dist/assign'

// import * as d_in from "pareto/dist/interface/generated/liana/schemas/schema/data"
// import * as d_out from "../../../../../interface/generated/liana/schemas/graphviz_high_level/data"


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
