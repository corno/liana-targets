
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as s_in from "pareto-liana/modules/schema/interface/data/resolved"
import type * as s_out from "pareto-graphviz/interface/data/high_level"

export namespace s_function {
    export type Schema_Parameters = {
        'graph name': string
    }
    export type Value_Parameters = {
        'type name': string
    }
}


export type Schema = p_.Transformer_With_Parameter<
    s_in.Schema,
    s_out.Graph,
    s_function.Schema_Parameters
>
export type Value = p_.Transformer_With_Parameter<
    s_in.Value,
    s_out.Graph.type_.directed.edges,
    s_function.Value_Parameters
>

