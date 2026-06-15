import * as pt from 'pareto-core/dist/transformer/implementation'
import p_unreachable_code_path from 'pareto-core/dist/specials/unreachable_code_path'
import p_implement_me from 'pareto-core-dev/dist/implement_me'
import * as p_i from 'pareto-core/dist/transformer/interface'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-lionweb/dist/interface/generated/liana/schemas/serialization_chunk/data"

// //dependencies

export const Meta_Pointer: p_i.Transformer<string, d_out.Meta_Pointer> = ($) => ({
    'language': "astn",
    'version': "0.1",
    'key': $,
})


export const Schema = (
    $: d_in.Schema,
): d_out.Serialization_Chunk => ({
    'range': p_unreachable_code_path("REMOVE range property"),
    'serializationFormatVersion': "2023.1",
    'languages': pt.literal.list([
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
// ): d_out.Serialization_Chunk.nodes.L.properties => pt.literal.list([])

// export const Type_Node_2_Document_nodes = (
//     $: d_in.Type_Node,
//     $p: {
//         'path': string,
//     }
// ): d_out.Serialization_Chunk.nodes => pt.decide.state($, ($) => {
//     switch ($[0]) {
//         case 'dictionary': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.literal.nested_list<d_out.Serialization_Chunk.nodes.L>([
//             pt.literal.list([
//                 {
//                     'id': $p.path,
//                     'parent': pt.literal.not_set(),
//                     'annotations': pt.literal.list([]),
//                     'classifier': MetaPointer("dictionary"),
//                     'containments': pt.literal.list([
//                         {
//                             'containment': MetaPointer("entry"),
//                             'children': pt.literal.list([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': pt.literal.list([]),
//                     'references': pt.literal.list([])
//                 },
//                 {
//                     'id': $p.path plus ".D",
//                     'parent': pt.literal.not_set(),
//                     'annotations': pt.literal.list([]),
//                     'classifier': MetaPointer("entry"),
//                     'containments': pt.literal.list([
//                         {
//                             'containment': MetaPointer("entries"),
//                             'children': pt.literal.list([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': pt.literal.list([]),
//                     'references': pt.literal.list([])
//                 }
//             ]),
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".D",
//                 }
//             ),
//         ]))
//         case 'group': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.literal.nested_list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.literal.not_set(),
//                     'annotations': pt.literal.list([]),
//                     'classifier': MetaPointer("group"),
//                     'containments': pt.literal.list([
//                         {
//                             'containment': MetaPointer("properties"),
//                             'children': $.__to_list(($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': pt.literal.list([]),
//                     'references': pt.literal.list([])
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
//         case 'list': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.literal.nested_list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.literal.not_set(),
//                     'annotations': pt.literal.list([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': pt.literal.list([
//                         {
//                             'containment': MetaPointer("elements"),
//                             'children': pt.literal.list([$p.path plus ".L"]),
//                         },
//                     ]),
//                     'properties': pt.literal.list([]),
//                     'references': pt.literal.list([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".L",
//                 }
//             ),
//         ]))
//         case 'optional': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.literal.nested_list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.literal.not_set(),
//                     'annotations': pt.literal.list([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': pt.literal.list([
//                         {
//                             'containment': MetaPointer("optional"),
//                             'children': pt.literal.list([$p.path plus ".O"]),
//                         },
//                     ]),
//                     'properties': pt.literal.list([]),
//                     'references': pt.literal.list([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $,
//                 {
//                     'path': $p.path plus ".O",
//                 }
//             ),
//         ]))
//         case 'state group': return pt.ss($, ($): d_out.Serialization_Chunk.nodes => pt.literal.nested_list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': pt.literal.not_set(),
//                     'annotations': pt.literal.list([]),
//                     'classifier': MetaPointer("state group"),
//                     'containments': pt.literal.list([
//                         {
//                             'containment': MetaPointer("states"),
//                             'children': pt.list.from_dictionary($, ($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': pt.literal.list([]),
//                     'references': pt.literal.list([])
//                 }
//             ],
//             pt.list.from_dictionary($, ($, id) => ({
//                 'id': $p.path,
//                 'parent': pt.literal.not_set(),
//                 'annotations': pt.literal.list([]),
//                 'classifier': MetaPointer("state"),
//                 'containments': pt.literal.list([
//                     {
//                         'containment': MetaPointer("states"),
//                         'children': pt.literal.list([$p.path plus "." + key]),
//                     },
//                 ]),
//                 'properties': pt.literal.list([
//                     {
//                         'value': key,
//                         'property': MetaPointer("state"),
//                     }
//                 ]),
//                 'references': pt.literal.list([])
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
//         default: return pt.literal.list([])
//     }
// })
