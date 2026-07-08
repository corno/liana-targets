
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-fountain-pen-file-structure/interface/data/file-system"


export type Package = p_.Transformer_With_Parameter<
    d_in.Package,
    d_out.Directory,
    { 'graph name': string }
>
export type Schema_Tree = p_.Transformer_With_Parameter<
    d_in.Schema_Tree,
    d_out.Directory,
    { 'graph name': string }
>
export type Schemas = p_.Transformer<
    d_in.Schemas,
    d_out.Directory
>
export type Schema = p_.Transformer_With_Parameter<
    d_in.Schema,
    d_out.Directory,
    { 'graph name': string }
>

