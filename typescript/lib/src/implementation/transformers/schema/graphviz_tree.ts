import * as p_ from 'pareto-core/implementation/transformer'
import type * as s_in from "./resolved.js"
namespace declarations {
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
}

//dependencies
import * as t_graphviz_to_prose from "pareto-graphviz/implementation/transformers/high_level/prose"
import * as t_schema_to_graphviz from "./graphviz_high_level.js"

//shorthands
import * as sh from "pareto-fountain-pen-file-structure/shorthands/file-system/target"

export const Schema_Tree: declarations.Schema_Tree = ($, $p) => p_.from.state($).decide(
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

export const Schemas: declarations.Schemas = ($) => p_.from.dictionary($).map(
    ($, id) => sh.n.directory(Schema_Tree($, { 'graph name': id })))

export const Package: declarations.Package = ($, $p) => Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })
