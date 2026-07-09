
import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "../../../interface/generated/liana/schemas/alan_light/data.js"
import type * as d_out_package from "../../../interface/data/alan_light_package.js"

export namespace d_function {

    export type Error =
        | ['foo', null]

}



//signatures
export type Package = p_.Refiner<
    d_out_package.Node,
    d_function.Error, d_in.Package
>
export type Schema_Tree = p_.Refiner<
    d_out_package.Node,
    d_function.Error, d_in.Schema_Tree
>
export type Schema = p_.Refiner<
    d_out.Root,
    d_function.Error,
    d_in.Schema
>
export type Value_to_Node = p_.Refiner<
    d_out.Node,
    d_function.Error,
    d_in.Value
>
export type Value_to_Property = p_.Refiner<
    d_out.Node.properties.D,
    d_function.Error,
    d_in.Value
>

