import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-fountain-pen-file-structure/interface/data/file-system"

export namespace interface_ {
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
}

//dependencies
import * as t_graphviz_to_prose from "pareto-graphviz/implementation/manual/transformers/high_level/prose"
import * as t_schema_to_graphviz from "./graphviz_high_level.js"

//shorthands
import * as sh from "pareto-fountain-pen-file-structure/shorthands/file-system/target"

export const Schema_Tree: interface_.Schema_Tree = ($, $p) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => p_.literal.dictionary({
                "graphviz.dot": sh.n.file(
                    t_graphviz_to_prose.Graph(
                        t_schema_to_graphviz.Schema($, {
                            'graph name': $p['graph name']
                        })
                    ),
                )
            }))
            case 'set': return p_.option($, ($) => Schemas($))
            default: return p_.exhaustive($[0])
        }
    })

export const Schemas: interface_.Schemas = ($) => p_.from.dictionary($).map(
    ($, id) => sh.n.directory(Schema_Tree($, { 'graph name': id })))

export const Package: interface_.Package = ($, $p) => Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })
