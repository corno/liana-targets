
import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as s_in from "pareto-liana/modules/schema/interface/data/resolved"
import type * as s_out from "../../../interface/schemas/alan_light.js"
import type * as s_out_package from "../../../interface/schemas/alan_light_package.js"

export namespace s_function {

    export type Error =
        | ['foo', null]

}



//signatures
export type Package = p_.Refiner<
    s_out_package.Node,
    s_function.Error, s_in.Package
>
export type Schema_Tree = p_.Refiner<
    s_out_package.Node,
    s_function.Error, s_in.Schema_Tree
>
export type Schema = p_.Refiner<
    s_out.Root,
    s_function.Error,
    s_in.Schema
>
export type Value_to_Node = p_.Refiner<
    s_out.Node,
    s_function.Error,
    s_in.Value
>
export type Value_to_Property = p_.Refiner<
    s_out.Node.properties.D,
    s_function.Error,
    s_in.Value
>

