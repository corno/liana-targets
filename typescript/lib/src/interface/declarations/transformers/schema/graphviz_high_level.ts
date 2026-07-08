
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-graphviz/interface/generated/liana/schemas/high_level/data"

export namespace d_function {
    export type Schema_Parameters = {
        'graph name': string
    }
    export type Value_Parameters = {
        'type name': string
    }
}


export type Schema = p_i.Transformer_With_Parameter<
    d_in.Schema,
    d_out.Graph,
    d_function.Schema_Parameters
>
export type Value = p_i.Transformer_With_Parameter<
    d_in.Value,
    d_out.Graph.type_.directed.edges,
    d_function.Value_Parameters
>

