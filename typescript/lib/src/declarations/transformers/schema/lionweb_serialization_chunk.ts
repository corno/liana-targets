
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/modules/schema/interface/data/resolved"
import type * as d_out from "pareto-lionweb/interface/data/serialization_chunk"


export type Schema = p_.Transformer<
    d_in.Schema,
    d_out.Serialization_Chunk
>
export type Meta_Pointer = p_.Transformer<
    string, d_out.Meta_Pointer
>

