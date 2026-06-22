import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_i from 'pareto-core/dist/interface/refiner'
import p_implement_me from 'pareto-core-dev/dist/implement_me'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "../../../../interface/generated/liana/schemas/alan_light/data"
import * as d_out_package from "../../../../interface/data/alan_light_package"

//shorthands
import * as sh from "../../../../modules/alan_light/shorthands/alan_light"

export type My_Error =
    | ['foo', null]

//signatures
export type Package = p_i.Refiner<d_out_package.Node, My_Error, d_in.Package>
export type Schema_Tree = p_i.Refiner<d_out_package.Node, My_Error, d_in.Schema_Tree>
export type Schema = p_i.Refiner<d_out.Root, My_Error, d_in.Schema>
export type Value_to_Node = p_i.Refiner<d_out.Node, My_Error, d_in.Value>
export type Value_to_Property = p_i.Refiner<d_out.Node.properties.D, My_Error, d_in.Value>

export const Package: Package = ($, abort) => Schema_Tree($['schema tree'], abort)

export const Schema_Tree: Schema_Tree = ($, abort) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'schema': return p_.ss($, ($) => ['model', Schema($, abort)])
            case 'set': return p_.ss($, ($): d_out_package.Node => ['package', p_.from.dictionary($
            ).map(
                ($) => Schema_Tree($, abort)
            )])
            default: return p_.au($[0])
        }
    })

export const Schema: Schema = ($, abort) => ({
    'numerical types': p_.from.dictionary($.globals['simple types']
    ).map(
        ($) => sh.numerical_type()
    ),
    'root': p_implement_me("alan light")
})

// export const Value_to_Property: Value_to_Property = ($, abort) => p_.from.state($).decide(
// ($) => {
//     switch ($[0]) {
//         case 'number': return p_.ss($, ($) => sh.prop.number())
//         case 'boolean': return p_.ss($, ($) => sh.prop.state_group({
//             "no": sh.state(
//                 {},
//                 sh.node({})
//             ),
//             "yes": sh.state(
//                 {},
//                 sh.node({})
//             )
//         }))
//         case 'component': return p_.ss($, ($) => )
//         case 'dictionary': return p_.ss($, ($) => )
//         case 'group': return p_.ss($, ($) => )
//         case 'list': return p_.ss($, ($) => )
//         case 'nothing': return p_.ss($, ($) => )
//         case 'optional': return p_.ss($, ($) => )
//         case 'reference': return p_.ss($, ($) => )
//         case 'state': return p_.ss($, ($) => sh.prop.state_group(p_.dictionary.map(
//             $.options
//         ).map(
//             ($) => sh.state(
//                 {},
//                 Value($, abort)
//             ))))
//         case 'text': return p_.ss($, ($) => )
//         default: return p_.au($[0])
//     }
// })

// export const Value_to_Node: Value_to_Node = ($, abort) => {
//     const value = $
//     return p_.from.state($).decide(
// ($) => {
//         switch ($[0]) {
//             case 'number': return p_.ss($, ($) => sh.node({
//                 "value": Value_to_Property(value, abort)
//             }))
//             case 'boolean': return p_.ss($, ($) => sh.prop.state_group({
//                 "no": sh.state(
//                     {},
//                     sh.node({})
//                 ),
//                 "yes": sh.state(
//                     {},
//                     sh.node({})
//                 )
//             }))
//             case 'component': return p_.ss($, ($) => p_.from.state($.type).decide(
// ($) => {
//                 switch ($[0]) {
//                     case 'external': return p_.ss($, ($) => )
//                     case 'internal': return p_.ss($, ($) => )
//                     case 'internal acyclic': return p_.ss($, ($) => )
//                     default: return p_.au($[0])
//                 }
//             }))
//             case 'dictionary': return p_.ss($, ($) => )
//             case 'group': return p_.ss($, ($) => )
//             case 'list': return p_.ss($, ($) => )
//             case 'nothing': return p_.ss($, ($) => )
//             case 'optional': return p_.ss($, ($) => )
//             case 'reference': return p_.ss($, ($) => )
//             case 'state': return p_.ss($, ($) => sh.prop.state_group(p_.dictionary.map(
//                 $.options
//             ).map(
//                 ($) => sh.state(
//                     {},
//                     Value($, abort)
//                 ))))
//             case 'text': return p_.ss($, ($) => )
//             default: return p_.au($[0])
//         }
//     })
// }