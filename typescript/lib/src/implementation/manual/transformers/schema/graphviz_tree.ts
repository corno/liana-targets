import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-fountain-pen-file-structure/dist/interface/data/file-system"

//dependencies
import * as t_graphviz_to_fountain_pen from "pareto-graphviz/dist/implementation/manual/transformers/high_level/fountain_pen"
import * as t_schema_to_graphviz from "./graphviz_high_level"

//shorthands
import * as sh from "pareto-fountain-pen-file-structure/dist/shorthands/file-system"

export const Schema_Tree: p_i.Transformer_With_Parameter<
    d_in.Schema_Tree,
    d_out.Directory,
    { 'graph name': string }
> = ($, $p) => p_.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return p_.ss($, ($) => p_.literal.dictionary({
            "graphviz.dot": sh.n.file(
                t_graphviz_to_fountain_pen.Graph(
                    t_schema_to_graphviz.Schema($, {
                        'graph name': $p['graph name']
                    })
                ),
            )
        }))
        case 'set': return p_.ss($, ($) => Schemas($))
        default: return p_.au($[0])
    }
})

export const Schemas: p_i.Transformer<
    d_in.Schemas,
    d_out.Directory
> = ($) => $.__d_map(($, id) => sh.n.directory(Schema_Tree($, { 'graph name': id })))

export const Package: p_i.Transformer_With_Parameter<
    d_in.Package,
    d_out.Directory,
    { 'graph name': string }
> = (
    $,
    $p
) => Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })
