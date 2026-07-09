import * as p_ from 'pareto-core/implementation/transformer'
import type * as interface_ from "../../../../declarations/transformers/schema/graphviz_tree.js"

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
