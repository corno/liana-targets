
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-static-html/interface/generated/liana/schemas/static-html/data"


    export type Package = p_.Transformer<
        d_in.Package, d_out.Document
    >
    export type Schema_Tree = p_.Transformer<
        d_in.Schema_Tree, d_out.Flow_Element
    >
    export type Schemas = p_.Transformer<
        d_in.Schemas, d_out.Flow_Content
    >
    export type Schema = p_.Transformer<
        d_in.Schema, d_out.Flow_Element
    >

