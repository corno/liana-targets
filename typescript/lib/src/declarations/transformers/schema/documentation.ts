
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "pareto-liana/modules/schema/interface/data/resolved"
import type * as s_out from "pareto-static-html/interface/data/static_html"


export type Package = p_.Transformer<
    s_in.Package, s_out.Document
>
export type Schema_Tree = p_.Transformer<
    s_in.Schema_Tree, s_out.Flow_Element
>
export type Schemas = p_.Transformer<
    s_in.Schemas, s_out.Flow_Content
>
export type Schema = p_.Transformer<
    s_in.Schema, s_out.Flow_Element
>

