import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'
import p_implement_me from 'pareto-core-dev/implement_me'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-lionweb/interface/generated/liana/schemas/serialization_chunk/data"

export namespace interface_ {
    export type Schema = p_i.Transformer<
        d_in.Schema,
         d_out.Serialization_Chunk
    >
    export type Meta_Pointer = p_i.Transformer<
        string, d_out.Meta_Pointer
    >
}
import * as temp_interface_ from "../../../../interface/declarations/transformers/schema/lionweb_serialization_chunk.js"

// //dependencies

export const Meta_Pointer: interface_.Meta_Pointer = ($) => ({
    'language': "astn",
    'version': "0.1",
    'key': $,
})


export const Schema: interface_.Schema = ($) => ({
    'range': p_unreachable_code_path("REMOVE range property"),
    'serializationFormatVersion': "2023.1",
    'languages': p_.literal.list([
        {
            'key': "LionCore-M3",
            'version': "2023.1",
        },
        {
            'key': "LionCore-builtins",
            'version': "2023.1",
        }
    ]),
    'nodes': p_.from.dictionary($.modules).flatten_to_list(
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
// ): d_out.Serialization_Chunk.nodes.L.properties => p_.literal.list([])

// export const Type_Node_2_Document_nodes = (
//     $: d_in.Type_Node,
//     $p: {
//         'path': string,
//     }
// ): d_out.Serialization_Chunk.nodes => p_.from.state($).decide(
// ($) => {
//     switch ($[0]) {
//         case 'dictionary': return p_.option($, ($): d_out.Serialization_Chunk.nodes => p_.literal.nested_ list<d_out.Serialization_Chunk.nodes.L>([
//             p_.literal.list([
//                 {
//                     'id': $p.path,
//                     'parent': p_.literal.not_set(),
//                     'annotations': p_.literal.list([]),
//                     'classifier': MetaPointer("dictionary"),
//                     'containments': p_.literal.list([
//                         {
//                             'containment': MetaPointer("entry"),
//                             'children': p_.literal.list([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': p_.literal.list([]),
//                     'references': p_.literal.list([])
//                 },
//                 {
//                     'id': $p.path plus ".D",
//                     'parent': p_.literal.not_set(),
//                     'annotations': p_.literal.list([]),
//                     'classifier': MetaPointer("entry"),
//                     'containments': p_.literal.list([
//                         {
//                             'containment': MetaPointer("entries"),
//                             'children': p_.literal.list([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': p_.literal.list([]),
//                     'references': p_.literal.list([])
//                 }
//             ]),
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".D",
//                 }
//             ),
//         ]))
//         case 'group': return p_.option($, ($): d_out.Serialization_Chunk.nodes => p_.literal.nested_ list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': p_.literal.not_set(),
//                     'annotations': p_.literal.list([]),
//                     'classifier': MetaPointer("group"),
//                     'containments': p_.literal.list([
//                         {
//                             'containment': MetaPointer("properties"),
//                             'children': $.__to_list(
// ($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': p_.literal.list([]),
//                     'references': p_.literal.list([])
//                 }
//             ],
//             p_.list.flatten(
//                 $.__to_list(
// ($, id) => Type_Node_2_Document_nodes(
//                     $.node,
//                     {
//                         'path': $p.path plus "." + key,
//                     }
//                 )),
//                 ($) => $,
//             ),
//         ]))
//         case 'list': return p_.option($, ($): d_out.Serialization_Chunk.nodes => p_.literal.nested_ list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': p_.literal.not_set(),
//                     'annotations': p_.literal.list([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': p_.literal.list([
//                         {
//                             'containment': MetaPointer("elements"),
//                             'children': p_.literal.list([$p.path plus ".L"]),
//                         },
//                     ]),
//                     'properties': p_.literal.list([]),
//                     'references': p_.literal.list([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".L",
//                 }
//             ),
//         ]))
//         case 'optional': return p_.option($, ($): d_out.Serialization_Chunk.nodes => p_.literal.nested_ list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': p_.literal.not_set(),
//                     'annotations': p_.literal.list([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': p_.literal.list([
//                         {
//                             'containment': MetaPointer("optional"),
//                             'children': p_.literal.list([$p.path plus ".O"]),
//                         },
//                     ]),
//                     'properties': p_.literal.list([]),
//                     'references': p_.literal.list([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $,
//                 {
//                     'path': $p.path plus ".O",
//                 }
//             ),
//         ]))
//         case 'state group': return p_.option($, ($): d_out.Serialization_Chunk.nodes => p_.literal.nested_ list<d_out.Serialization_Chunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': p_.literal.not_set(),
//                     'annotations': p_.literal.list([]),
//                     'classifier': MetaPointer("state group"),
//                     'containments': p_.literal.list([
//                         {
//                             'containment': MetaPointer("states"),
//                             'children': p_.list.from_dictionary($, ($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': p_.literal.list([]),
//                     'references': p_.literal.list([])
//                 }
//             ],
//             p_.list.from_dictionary($, ($, id) => ({
//                 'id': $p.path,
//                 'parent': p_.literal.not_set(),
//                 'annotations': p_.literal.list([]),
//                 'classifier': MetaPointer("state"),
//                 'containments': p_.literal.list([
//                     {
//                         'containment': MetaPointer("states"),
//                         'children': p_.literal.list([$p.path plus "." + key]),
//                     },
//                 ]),
//                 'properties': p_.literal.list([
//                     {
//                         'value': key,
//                         'property': MetaPointer("state"),
//                     }
//                 ]),
//                 'references': p_.literal.list([])
//             })),
//             p_.list.flatten(
//                 p_.list.from_dictionary($, ($, id) => Type_Node_2_Document_nodes(
//                     $.node,
//                     {
//                         'path': $p.path plus "." + key,
//                     }
//                 )),
//                 ($) => $
//             ),
//         ]))
//         default: return p_.literal.list([])
//     }
// })
