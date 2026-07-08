
import type * as p_i from 'pareto-core/interface/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'
import p_implement_me from 'pareto-core-dev/implement_me'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-lionweb/interface/generated/liana/schemas/serialization_chunk/data"


    export type Schema = p_i.Transformer<
        d_in.Schema,
         d_out.Serialization_Chunk
    >
    export type Meta_Pointer = p_i.Transformer<
        string, d_out.Meta_Pointer
    >

