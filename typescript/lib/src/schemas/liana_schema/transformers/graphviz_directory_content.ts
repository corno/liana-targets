import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../schema.js"
import type * as s_out from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/to_be_written_directory_content/schema"

namespace declarations {
    export type Package = p_.Transformer_With_Parameter<
        s_in.Package,
        s_out.Directory,
        {
            'graph name': string
            'indentation': string,
        }
    >
    export type Schema_Tree = p_.Transformer_With_Parameter<
        s_in.Schema_Tree,
        s_out.Directory,
        {
            'graph name': string,
            'indentation': string,
        }
    >
    export type Schemas = p_.Transformer_With_Parameter<
        s_in.Schemas,
        s_out.Directory,
        {
            'indentation': string,
        }
    >
    export type Schema = p_.Transformer_With_Parameter<
        s_in.Schema,
        s_out.Directory,
        {
            'graph name': string
            'indentation': string,
        }
    >
}

//dependencies
import * as t_graphviz_to_serialized from "pareto-graphviz/schemas/high_level/transformers/serialized"
import * as t_schema_to_graphviz from "./graphviz_high_level.js"

//shorthands
import * as sh from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/to_be_written_directory_content/shorthands/target"

export const Schema_Tree: declarations.Schema_Tree = ($, $p) => p_.from.state($).decide(
    ($): s_out.Directory => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => p_.literal.dictionary({
                "graphviz.dot": sh.n.file(
                    t_graphviz_to_serialized.Graph(
                        t_schema_to_graphviz.Schema($, {
                            'graph name': $p['graph name']
                        }),
                        {
                            'indentation': $p['indentation'],
                        }
                    ),
                    "\n"
                )
            }))
            case 'set': return p_.option($, ($) => Schemas(
                $,
                {
                    'indentation': $p['indentation'],
                }
            ))
            default: return p_.exhaustive($[0])
        }
    })

export const Schemas: declarations.Schemas = ($, $p) => p_.from.dictionary($).map(
    ($, id) => sh.n.directory(
        Schema_Tree(
            $,
            {
                'graph name': id,
                'indentation': $p.indentation
            }
        )
    )
)

export const Package: declarations.Package = ($, $p) => Schema_Tree(
    $['schema tree'],
    {
        'graph name':   $p['graph name'],
        'indentation':  $p['indentation'],
    }
)
