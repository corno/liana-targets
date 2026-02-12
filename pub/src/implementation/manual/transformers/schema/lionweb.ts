import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
// import * as d_out from "../../../../../interface/generated/liana/schemas/lionweb/data"

// //dependencies

export const MetaPointer = (
    $: string,
): d_out.MetaPointer => ({
    'language': "astn",
    'version': "0.1",
    'key': $,
})


export const Schema_Tree = ($: d_in_s.Schema_Tree): d_out.Directory => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => _p.dictionary.literal({
            "lionweb.json": sh.n.file(
                t_json_to_fountain_pen_block.Document(
                    t_lionweb_to_json.SerializationChunk(
                        t_schema_to_lionweb.Schema($)
                    )
                ),
            )
        }))
        case 'set': return _p.ss($, ($) => Schemas($))
        default: return _p.au($[0])
    }
})

export const Schemas = ($: d_in_s.Schemas): d_out.Directory => $.__d_map(($, id) => sh.n.directory(Schema_Tree($)))

export const Module = ($: d_in.Module): d_out.Directory => Schema_Tree($['schema tree'])

// export const Type_Node_2_properties = (
//     $: d_in.Type_Node,
//     $p: {
//         'path': string,
//     }
// ): d_out.SerializationChunk.nodes.L.properties => _p.list.literal([])

// export const Type_Node_2_Document_nodes = (
//     $: d_in.Type_Node,
//     $p: {
//         'path': string,
//     }
// ): d_out.SerializationChunk.nodes => _p.decide.state($, ($) => {
//     switch ($[0]) {
//         case 'dictionary': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.nested_literal_old<d_out.SerializationChunk.nodes.L>([
//             _p.list.literal([
//                 {
//                     'id': $p.path,
//                     'parent': _p.optional.literal.not_set(),
//                     'annotations': _p.list.literal([]),
//                     'classifier': MetaPointer("dictionary"),
//                     'containments': _p.list.literal([
//                         {
//                             'containment': MetaPointer("entry"),
//                             'children': _p.list.literal([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': _p.list.literal([]),
//                     'references': _p.list.literal([])
//                 },
//                 {
//                     'id': $p.path plus ".D",
//                     'parent': _p.optional.literal.not_set(),
//                     'annotations': _p.list.literal([]),
//                     'classifier': MetaPointer("entry"),
//                     'containments': _p.list.literal([
//                         {
//                             'containment': MetaPointer("entries"),
//                             'children': _p.list.literal([$p.path plus ".D"]),
//                         },
//                     ]),
//                     'properties': _p.list.literal([]),
//                     'references': _p.list.literal([])
//                 }
//             ]),
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".D",
//                 }
//             ),
//         ]))
//         case 'group': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.nested_literal_old<d_out.SerializationChunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': _p.optional.literal.not_set(),
//                     'annotations': _p.list.literal([]),
//                     'classifier': MetaPointer("group"),
//                     'containments': _p.list.literal([
//                         {
//                             'containment': MetaPointer("properties"),
//                             'children': $.__to_list(($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': _p.list.literal([]),
//                     'references': _p.list.literal([])
//                 }
//             ],
//             _p.list.flatten(
//                 $.__to_list(($, id) => Type_Node_2_Document_nodes(
//                     $.node,
//                     {
//                         'path': $p.path plus "." + key,
//                     }
//                 )),
//                 ($) => $,
//             ),
//         ]))
//         case 'list': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.nested_literal_old<d_out.SerializationChunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': _p.optional.literal.not_set(),
//                     'annotations': _p.list.literal([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': _p.list.literal([
//                         {
//                             'containment': MetaPointer("elements"),
//                             'children': _p.list.literal([$p.path plus ".L"]),
//                         },
//                     ]),
//                     'properties': _p.list.literal([]),
//                     'references': _p.list.literal([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': $p.path plus ".L",
//                 }
//             ),
//         ]))
//         case 'optional': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.nested_literal_old<d_out.SerializationChunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': _p.optional.literal.not_set(),
//                     'annotations': _p.list.literal([]),
//                     'classifier': MetaPointer("list"),
//                     'containments': _p.list.literal([
//                         {
//                             'containment': MetaPointer("optional"),
//                             'children': _p.list.literal([$p.path plus ".O"]),
//                         },
//                     ]),
//                     'properties': _p.list.literal([]),
//                     'references': _p.list.literal([])
//                 }
//             ],
//             Type_Node_2_Document_nodes(
//                 $,
//                 {
//                     'path': $p.path plus ".O",
//                 }
//             ),
//         ]))
//         case 'state group': return _p.ss($, ($): d_out.SerializationChunk.nodes => _p.list.nested_literal_old<d_out.SerializationChunk.nodes.L>([
//             [
//                 {
//                     'id': $p.path,
//                     'parent': _p.optional.literal.not_set(),
//                     'annotations': _p.list.literal([]),
//                     'classifier': MetaPointer("state group"),
//                     'containments': _p.list.literal([
//                         {
//                             'containment': MetaPointer("states"),
//                             'children': _p.list.from_dictionary($, ($, id) => $p.path plus "." + key),
//                         },
//                     ]),
//                     'properties': _p.list.literal([]),
//                     'references': _p.list.literal([])
//                 }
//             ],
//             _p.list.from_dictionary($, ($, id) => ({
//                 'id': $p.path,
//                 'parent': _p.optional.literal.not_set(),
//                 'annotations': _p.list.literal([]),
//                 'classifier': MetaPointer("state"),
//                 'containments': _p.list.literal([
//                     {
//                         'containment': MetaPointer("states"),
//                         'children': _p.list.literal([$p.path plus "." + key]),
//                     },
//                 ]),
//                 'properties': _p.list.literal([
//                     {
//                         'value': key,
//                         'property': MetaPointer("state"),
//                     }
//                 ]),
//                 'references': _p.list.literal([])
//             })),
//             _p.list.flatten(
//                 _p.list.from_dictionary($, ($, id) => Type_Node_2_Document_nodes(
//                     $.node,
//                     {
//                         'path': $p.path plus "." + key,
//                     }
//                 )),
//                 ($) => $
//             ),
//         ]))
//         default: return _p.list.literal([])
//     }
// })


// export const Schema = (
//     $: d_in.Schema,
// ): d_out.SerializationChunk => ({
//     'serializationFormatVersion': "2023.1",
//     'languages': _p.list.literal([
//         {
//             'key': "LionCore-M3",
//             'version': "2023.1",
//         },
//         {
//             'key': "LionCore-builtins",
//             'version': "2023.1",
//         }
//     ]),
//     'nodes': _p.list.flatten(
//         $.types.__to_list(
//             ($, id) => Type_Node_2_Document_nodes(
//                 $.node,
//                 {
//                     'path': key,
//                 }
//             )
//         ),
//         ($) => $,
//     )
// })