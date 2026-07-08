
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-fountain-pen-file-structure/interface/data/file-system"


    export type Package = p_i.Transformer_With_Parameter<
        d_in.Package,
        d_out.Directory,
        { 'graph name': string }
    >
    export type Schema_Tree = p_i.Transformer_With_Parameter<
        d_in.Schema_Tree,
        d_out.Directory,
        { 'graph name': string }
    >
    export type Schemas = p_i.Transformer<
        d_in.Schemas,
        d_out.Directory
    >
    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Directory,
        { 'graph name': string }
    >

