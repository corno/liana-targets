import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "../../../../interface/generated/liana/schemas/alan_light/data"
import * as d_out_package from "../../../../interface/to_be_generated/alan_light_package"

//shorthands
import * as sh from "../../../../modules/alan_light/shorthands/alan_light"

export type My_Error =
    | ['foo', null]

//signatures
export type Package = _pi.Refiner<d_out_package.Node, My_Error, d_in.Package>
export type Schema_Tree = _pi.Refiner<d_out_package.Node, My_Error, d_in.Schema_Tree>
export type Schema = _pi.Refiner<d_out.Root, My_Error, d_in.Schema>
export type Value_to_Node = _pi.Refiner<d_out.Node, My_Error, d_in.Value>
export type Value_to_Property = _pi.Refiner<d_out.Node.properties.D, My_Error, d_in.Value>

export const Package: Package = ($, abort) => Schema_Tree($['schema tree'], abort)

export const Schema_Tree: Schema_Tree = ($, abort) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => ['model', Schema($, abort)])
        case 'set': return _p.ss($, ($): d_out_package.Node => ['package', _p.dictionary.from.dictionary(
            $
        ).map(
            ($) => Schema_Tree($, abort)
        )])
        default: return _p.au($[0])
    }
})

export const Schema: Schema = ($, abort) => ({
    'numerical types': _p.dictionary.from.dictionary(
        $.globals['number types']
    ).map(
        ($) => sh.numerical_type()
    ),
    'root': xxx
})

export const Value_to_Property: Value_to_Property = ($, abort) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($) => sh.prop.number())
        case 'boolean': return _p.ss($, ($) => sh.prop.state_group({
            "no": sh.state(
                {},
                sh.node({})
            ),
            "yes": sh.state(
                {},
                sh.node({})
            )
        }))
        case 'component': return _p.ss($, ($) => )
        case 'dictionary': return _p.ss($, ($) => )
        case 'group': return _p.ss($, ($) => )
        case 'list': return _p.ss($, ($) => )
        case 'nothing': return _p.ss($, ($) => )
        case 'optional': return _p.ss($, ($) => )
        case 'reference': return _p.ss($, ($) => )
        case 'state': return _p.ss($, ($) => sh.prop.state_group(_p.dictionary.map(
            $.options
        ).map(
            ($) => sh.state(
                {},
                Value($, abort)
            ))))
        case 'text': return _p.ss($, ($) => )
        default: return _p.au($[0])
    }
})

export const Value_to_Node: Value_to_Node = ($, abort) => {
    const value = $
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => sh.node({
                "value": Value_to_Property(value, abort)
            }))
            case 'boolean': return _p.ss($, ($) => sh.prop.state_group({
                "no": sh.state(
                    {},
                    sh.node({})
                ),
                "yes": sh.state(
                    {},
                    sh.node({})
                )
            }))
            case 'component': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => )
                    case 'internal': return _p.ss($, ($) => )
                    case 'internal acyclic': return _p.ss($, ($) => )
                    default: return _p.au($[0])
                }
            }))
            case 'dictionary': return _p.ss($, ($) => )
            case 'group': return _p.ss($, ($) => )
            case 'list': return _p.ss($, ($) => )
            case 'nothing': return _p.ss($, ($) => )
            case 'optional': return _p.ss($, ($) => )
            case 'reference': return _p.ss($, ($) => )
            case 'state': return _p.ss($, ($) => sh.prop.state_group(_p.dictionary.map(
                $.options
            ).map(
                ($) => sh.state(
                    {},
                    Value($, abort)
                ))))
            case 'text': return _p.ss($, ($) => )
            default: return _p.au($[0])
        }
    })
}