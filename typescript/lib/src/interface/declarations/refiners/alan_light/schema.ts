import * as p_ from 'pareto-core/implementation/refiner'
import type * as p_i from 'pareto-core/interface/refiner'
import p_implement_me from 'pareto-core-dev/implement_me'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "../../../generated/liana/schemas/alan_light/data.js"
import type * as d_out_package from "../../../data/alan_light_package.js"

//shorthands
import * as sh from "../../../../modules/alan_light/shorthands/alan_light/target.js"

export namespace d_function {

    export type Error =
        | ['foo', null]

}

export namespace interface_ {

    //signatures
    export type Package = p_i.Refiner<
        d_out_package.Node,
        d_function.Error, d_in.Package
    >
    export type Schema_Tree = p_i.Refiner<
        d_out_package.Node,
        d_function.Error, d_in.Schema_Tree
    >
    export type Schema = p_i.Refiner<
        d_out.Root,
        d_function.Error,
        d_in.Schema
    >
    export type Value_to_Node = p_i.Refiner<
        d_out.Node,
        d_function.Error,
        d_in.Value
    >
    export type Value_to_Property = p_i.Refiner<
        d_out.Node.properties.D,
        d_function.Error,
        d_in.Value
    >
}
