// import * as _p from 'pareto-core/dist/assign'

// import * as d_in from "../../../../../interface/generated/liana/schemas/alan_light/data"
// import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

// import * as sh from "pareto-fountain-pen/dist/shorthands/block"

// import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed"



// export const Root = (
//     $: d_in.Root
// ): d_out.Paragraph => sh.group([
//     sh.g.nested_block([
//         sh.ph.literal("users"),
//         sh.ph.indent([
//             sh.pg.single_line("anonymous")
//         ]),
//     ]),
//     sh.pg.single_line(""),
//     sh.pg.single_line("interfaces"),
//     sh.pg.single_line(""),
//     sh.g.nested_block([
//         sh.ph.literal("root "),
//         Node($.root)
//     ]),
//     sh.pg.single_line(""),
//     sh.g.nested_block([
//         sh.ph.literal("numerical-types "),
//         sh.ph.indent([
//         ]),
//     ]),
// ])

// export const Identifier = (
//     $: d_in.Identifier
// ): d_out.Phrase => sh.b.snippet(s_apostrophed($))

// export const Node = (
//     $: d_in.Node
// ): d_out.Phrase => sh.ph.composed([
//     sh.ph.literal("{"),
//     sh.ph.indent([
//         sh.g.sub(
//             _p.list.from_dictionary(
//                 $.properties,
//                 ($, id) => sh.g.nested_block([
//                     Identifier(id),
//                     sh.ph.literal(": "),
//                     _p.decide.state($.type, ($) => {
//                         switch ($[0]) {
//                             case 'collection': return _p.ss($, ($) => sh.ph.composed([
//                                 sh.ph.literal("collection ["),
//                                 Identifier($.id),
//                                 sh.ph.literal("] "),
//                                 Node($.node)
//                             ]))
//                             case 'group': return _p.ss($, ($) => sh.ph.composed([
//                                 sh.ph.literal("group "),
//                                 Node($.node)
//                             ]))
//                             case 'state group': return _p.ss($, ($) => _p.boolean.dictionary_is_empty($.states)
//                                 ? sh.ph.literal("group { }")
//                                 : sh.ph.composed([
//                                     sh.ph.literal("stategroup ("),
//                                     sh.ph.indent([
//                                         sh.g.sub(
//                                             _p.list.from_dictionary(
//                                                 $.states,
//                                                 ($, id) => sh.g.nested_block([
//                                                     Identifier(id),
//                                                     sh.ph.literal(" "),
//                                                     Node($.node)
//                                                 ])
//                                             )
//                                         )
//                                     ]),
//                                     sh.ph.literal(")")
//                                 ]))
//                             case 'text': return _p.ss($, ($) => sh.ph.literal("text"))
//                             default: return _p.au($[0])
//                         }
//                     })
//                 ])
//             )
//         ),

//     ]),
//     sh.ph.literal("}"),
// ])