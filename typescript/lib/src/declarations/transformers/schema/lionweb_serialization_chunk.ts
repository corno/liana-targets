
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "pareto-liana/modules/schema/interface/data/resolved"
import type * as s_out from "pareto-lionweb/interface/data/serialization_chunk"


export type Schema = p_.Transformer<
    s_in.Schema,
    s_out.Serialization_Chunk
>
export type Meta_Pointer = p_.Transformer<
    string, s_out.Meta_Pointer
>

