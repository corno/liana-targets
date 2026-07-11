import * as p_ from 'pareto-core/implementation/refiner'
import p_implement_me from 'pareto-core-dev/implement_me'

import type * as interface_ from "../../../declarations/refiners/alan_light/schema.js"

//data types
import type * as d_out_package from "../../../interface/data/alan_light_package.js"

//shorthands
import * as sh from "../../../submodules/alan_light/shorthands/alan_light/target.js"

export const Package: interface_.Package = ($, abort) => Schema_Tree($['schema tree'], abort)

export const Schema_Tree: interface_.Schema_Tree = ($, abort) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => ['model', Schema($, abort)])
            case 'set': return p_.option($, ($): d_out_package.Node => ['package', p_.from.dictionary($).map(
                ($) => Schema_Tree($, abort)
            )])
            default: return p_.exhaustive($[0])
        }
    })

export const Schema: interface_.Schema = ($, abort) => ({
    'numerical types': p_.from.dictionary($.globals['simple types']).map(
        ($) => sh.numerical_type()
    ),
    'root': p_implement_me("alan light")
})

// export const Value_to_Property: Value_to_Property = ($, abort) => p_.from.state($).decide(
// ($) => {
//     switch ($[0]) {
//         case 'number': return p_.option($, ($) => sh.prop.number())
//         case 'boolean': return p_.option($, ($) => sh.prop.state_group({
//             "no": sh.state(
//                 {},
//                 sh.node({})
//             ),
//             "yes": sh.state(
//                 {},
//                 sh.node({})
//             )
//         }))
//         case 'component': return p_.option($, ($) => )
//         case 'dictionary': return p_.option($, ($) => )
//         case 'group': return p_.option($, ($) => )
//         case 'list': return p_.option($, ($) => )
//         case 'nothing': return p_.option($, ($) => )
//         case 'optional': return p_.option($, ($) => )
//         case 'reference': return p_.option($, ($) => )
//         case 'state': return p_.option($, ($) => sh.prop.state_group(p_.dictionary.map(
//             $.options
//         ).map(
//             ($) => sh.state(
//                 {},
//                 Value($, abort)
//             ))))
//         case 'text': return p_.option($, ($) => )
//         default: return p_.exhaustive($[0])
//     }
// })

// export const Value_to_Node: Value_to_Node = ($, abort) => {
//     const value = $
//     return p_.from.state($).decide(
// ($) => {
//         switch ($[0]) {
//             case 'number': return p_.option($, ($) => sh.node({
//                 "value": Value_to_Property(value, abort)
//             }))
//             case 'boolean': return p_.option($, ($) => sh.prop.state_group({
//                 "no": sh.state(
//                     {},
//                     sh.node({})
//                 ),
//                 "yes": sh.state(
//                     {},
//                     sh.node({})
//                 )
//             }))
//             case 'component': return p_.option($, ($) => p_.from.state($.type).decide(
// ($) => {
//                 switch ($[0]) {
//                     case 'external': return p_.option($, ($) => )
//                     case 'internal': return p_.option($, ($) => )
//                     case 'internal acyclic': return p_.option($, ($) => )
//                     default: return p_.exhaustive($[0])
//                 }
//             }))
//             case 'dictionary': return p_.option($, ($) => )
//             case 'group': return p_.option($, ($) => )
//             case 'list': return p_.option($, ($) => )
//             case 'nothing': return p_.option($, ($) => )
//             case 'optional': return p_.option($, ($) => )
//             case 'reference': return p_.option($, ($) => )
//             case 'state': return p_.option($, ($) => sh.prop.state_group(p_.dictionary.map(
//                 $.options
//             ).map(
//                 ($) => sh.state(
//                     {},
//                     Value($, abort)
//                 ))))
//             case 'text': return p_.option($, ($) => )
//             default: return p_.exhaustive($[0])
//         }
//     })
// }