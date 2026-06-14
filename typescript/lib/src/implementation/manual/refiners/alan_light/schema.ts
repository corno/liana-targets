import * as pi from 'pareto-core/dist/interface'
import * as pt from 'pareto-core/dist/assign'
import p_implement_me from 'pareto-core-dev/dist/implement_me'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "../../../../interface/generated/liana/schemas/alan_light/data"
import * as d_out_package from "../../../../interface/to_be_generated/alan_light_package"

//shorthands
import * as sh from "../../../../modules/alan_light/shorthands/alan_light"

export type My_Error =
    | ['foo', null]

//signatures
export type Package = pi.Refiner<d_out_package.Node, My_Error, d_in.Package>
export type Schema_Tree = pi.Refiner<d_out_package.Node, My_Error, d_in.Schema_Tree>
export type Schema = pi.Refiner<d_out.Root, My_Error, d_in.Schema>
export type Value_to_Node = pi.Refiner<d_out.Node, My_Error, d_in.Value>
export type Value_to_Property = pi.Refiner<d_out.Node.properties.D, My_Error, d_in.Value>

export const Package: Package = ($, abort) => Schema_Tree($['schema tree'], abort)

export const Schema_Tree: Schema_Tree = ($, abort) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return pt.ss($, ($) => ['model', Schema($, abort)])
        case 'set': return pt.ss($, ($): d_out_package.Node => ['package', pt.dictionary.from.dictionary(
            $
        ).map(
            ($) => Schema_Tree($, abort)
        )])
        default: return pt.au($[0])
    }
})

export const Schema: Schema = ($, abort) => ({
    'numerical types': pt.dictionary.from.dictionary(
        $.globals['simple types']
    ).map(
        ($) => sh.numerical_type()
    ),
    'root': p_implement_me("alan light")
})

// export const Value_to_Property: Value_to_Property = ($, abort) => pt.decide.state($, ($) => {
//     switch ($[0]) {
//         case 'number': return pt.ss($, ($) => sh.prop.number())
//         case 'boolean': return pt.ss($, ($) => sh.prop.state_group({
//             "no": sh.state(
//                 {},
//                 sh.node({})
//             ),
//             "yes": sh.state(
//                 {},
//                 sh.node({})
//             )
//         }))
//         case 'component': return pt.ss($, ($) => )
//         case 'dictionary': return pt.ss($, ($) => )
//         case 'group': return pt.ss($, ($) => )
//         case 'list': return pt.ss($, ($) => )
//         case 'nothing': return pt.ss($, ($) => )
//         case 'optional': return pt.ss($, ($) => )
//         case 'reference': return pt.ss($, ($) => )
//         case 'state': return pt.ss($, ($) => sh.prop.state_group(pt.dictionary.map(
//             $.options
//         ).map(
//             ($) => sh.state(
//                 {},
//                 Value($, abort)
//             ))))
//         case 'text': return pt.ss($, ($) => )
//         default: return pt.au($[0])
//     }
// })

// export const Value_to_Node: Value_to_Node = ($, abort) => {
//     const value = $
//     return pt.decide.state($, ($) => {
//         switch ($[0]) {
//             case 'number': return pt.ss($, ($) => sh.node({
//                 "value": Value_to_Property(value, abort)
//             }))
//             case 'boolean': return pt.ss($, ($) => sh.prop.state_group({
//                 "no": sh.state(
//                     {},
//                     sh.node({})
//                 ),
//                 "yes": sh.state(
//                     {},
//                     sh.node({})
//                 )
//             }))
//             case 'component': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
//                 switch ($[0]) {
//                     case 'external': return pt.ss($, ($) => )
//                     case 'internal': return pt.ss($, ($) => )
//                     case 'internal acyclic': return pt.ss($, ($) => )
//                     default: return pt.au($[0])
//                 }
//             }))
//             case 'dictionary': return pt.ss($, ($) => )
//             case 'group': return pt.ss($, ($) => )
//             case 'list': return pt.ss($, ($) => )
//             case 'nothing': return pt.ss($, ($) => )
//             case 'optional': return pt.ss($, ($) => )
//             case 'reference': return pt.ss($, ($) => )
//             case 'state': return pt.ss($, ($) => sh.prop.state_group(pt.dictionary.map(
//                 $.options
//             ).map(
//                 ($) => sh.state(
//                     {},
//                     Value($, abort)
//                 ))))
//             case 'text': return pt.ss($, ($) => )
//             default: return pt.au($[0])
//         }
//     })
// }