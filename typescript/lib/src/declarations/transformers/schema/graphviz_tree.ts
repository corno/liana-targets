
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "pareto-liana/modules/schema/interface/data/resolved"
import type * as s_out from "pareto-fountain-pen-file-structure/interface/data/file-system"


export type Package = p_.Transformer_With_Parameter<
    s_in.Package,
    s_out.Directory,
    { 'graph name': string }
>
export type Schema_Tree = p_.Transformer_With_Parameter<
    s_in.Schema_Tree,
    s_out.Directory,
    { 'graph name': string }
>
export type Schemas = p_.Transformer<
    s_in.Schemas,
    s_out.Directory
>
export type Schema = p_.Transformer_With_Parameter<
    s_in.Schema,
    s_out.Directory,
    { 'graph name': string }
>

