import * as pt from 'pareto-core/dist/assign'
import * as p_di from 'pareto-core/dist/data/interface'
import p_unreachable_code_path from 'pareto-core/dist/specials/unreachable_code_path'
import p_implement_me from 'pareto-core-dev/dist/implement_me'
import * as p_ti from 'pareto-core/dist/transformer/interface'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-lionweb/dist/interface/generated/liana/schemas/serialization_chunk/data"

// //dependencies

export const Meta_Pointer: p_ti.Transformer<string, d_out.Meta_Pointer> = ($) => ({
    'language': "astn",
    'version': "0.1",
    'key': $,
})


export const Schema = (
    $: d_in.Schema,
): d_out.Serialization_Chunk => ({
    'range': p_unreachable_code_path("REMOVE range property"),
    'serializationFormatVersion': "2023.1",
    'languages': pt.list.literal([
        {
            'key': "LionCore-M3",
            'version': "2023.1",
        },
        {
            'key': "LionCore-builtins",
            'version': "2023.1",
        }
    ]),
    'nodes': pt.list.from.dictionary($.modules).flatten(
        ($, id) => p_implement_me("lionweb")
        // ($, id) => Type_Node_2_Document_nodes(
        //     $['root value'],
        //     {
        //         'path': id,
        //     }
        // ),
    )
})

// export const Type_Node_2_properties = (
//     $: d_in.Type_Node,
//     $p: {
//         'path': string,
//     }
// ): d_out.Serialization_Chunk.nodes.L.properties => pt.list.literal([])

// export const Type_Node_2_Document_nodes = (
//     $: d_in.Type_Node,
//     $p: {
//         'path': string,
//     }
// ): d_out.Serialization_Chunk.nodes => pt.decide.state($, ($) => {
//     switch ($[0]) {
//         case 'dictionary': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.list.nested_literal_old<d_out.Serialization_Chunk.nodes.L>([
//             pt.list.literal([
//                 {
//                     'id': $p.path,
//                     'parent': pt.optional.literal.not_set(),
//                     'annotations': pt.list.literal([]),
//                     'classifier': MetaPointer("dictionary"),
//                     'containments': pt.list.literal([
//                         {
//                             'containment': MetaPointer("entry"),
//                             'children': pt.list.literal([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': pt.list.literal([]),
//                     'references': pt.list.literal([])
//                 },
//                 {
//                     'id': $p.path plus ".D",
//                     'parent': pt.optional.literal.not_set(),
//                     'annotations': pt.list.literal([]),
//                     'classifier': MetaPointer("entry"),
//                     'containments': pt.list.literal([
//                         {
//                             'containment': MetaPointer("entries"),
//                             'children': pt.list.literal([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': pt.list.literal([]),
//                     'references': pt.list.literal([])
//                 }
//             ]),
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".D",
//                 }
//             ),
//         ]))
//         case 'group': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.list.nested_literal_old<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.optional.literal.not_set(),
//                     'annotations': pt.list.literal([]),
//                     'classifier': MetaPointer("group"),
//                     'containments': pt.list.literal([
//                         {
//                             'containment': MetaPointer("properties"),
//                             'children': $.__to_list(($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': pt.list.literal([]),
//                     'references': pt.list.literal([])
//                 }
//             ],
//             pt.list.flatten(
//                 $.__to_list(($, id) => Type_Node_2_Document_nodes(
//                     $.node,
//                     {
//                         'path': $p.path plus "." + key,
//                     }
//                 )),
//                 ($) => $,
//             ),
//         ]))
//         case 'list': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.list.nested_literal_old<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.optional.literal.not_set(),
//                     'annotations': pt.list.literal([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': pt.list.literal([
//                         {
//                             'containment': MetaPointer("elements"),
//                             'children': pt.list.literal([$p.path plus ".L"]),
//                         },
//                     ]),
//                     'properties': pt.list.literal([]),
//                     'references': pt.list.literal([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".L",
//                 }
//             ),
//         ]))
//         case 'optional': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.list.nested_literal_old<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.optional.literal.not_set(),
//                     'annotations': pt.list.literal([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': pt.list.literal([
//                         {
//                             'containment': MetaPointer("optional"),
//                             'children': pt.list.literal([$p.path plus ".O"]),
//                         },
//                     ]),
//                     'properties': pt.list.literal([]),
//                     'references': pt.list.literal([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $,
//                 {
//                     'path': $p.path plus ".O",
//                 }
//             ),
//         ]))
//         case 'state group': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.list.nested_literal_old<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.optional.literal.not_set(),
//                     'annotations': pt.list.literal([]),
//                     'classifier': MetaPointer("state group"),
//                     'containments': pt.list.literal([
//                         {
//                             'containment': MetaPointer("states"),
//                             'children': pt.list.from_dictionary($, ($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': pt.list.literal([]),
//                     'references': pt.list.literal([])
//                 }
//             ],
//             pt.list.from_dictionary($, ($, id) => ({
//                 'id': $p.path,
//                 'parent': pt.optional.literal.not_set(),
//                 'annotations': pt.list.literal([]),
//                 'classifier': MetaPointer("state"),
//                 'containments': pt.list.literal([
//                     {
//                         'containment': MetaPointer("states"),
//                         'children': pt.list.literal([$p.path plus "." + key]),
//                     },
//                 ]),
//                 'properties': pt.list.literal([
//                     {
//                         'value': key,
//                         'property': MetaPointer("state"),
//                     }
//                 ]),
//                 'references': pt.list.literal([])
//             })),
//             pt.list.flatten(
//                 pt.list.from_dictionary($, ($, id) => Type_Node_2_Document_nodes(
//                     $.node,
//                     {
//                         'path': $p.path plus "." + key,
//                     }
//                 )),
//                 ($) => $
//             ),
//         ]))
//         default: return pt.list.literal([])
//     }
// })
