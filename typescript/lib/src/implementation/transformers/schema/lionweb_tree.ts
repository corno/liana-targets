import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "./resolved.js"

import type * as s_out from "./file-system.js"
namespace declarations {

    export type Schema_Tree = p_i.Transformer_With_Parameter<
        s_in.Schema_Tree,
        s_out.Directory,
        {
            'graph name': string
        }
    >

    export type Schemas = p_i.Transformer<
        s_in.Schemas,
        s_out.Directory
    >

    export type Package = p_i.Transformer_With_Parameter<
        s_in.Package,
        s_out.Directory,
        {
            'graph name': string
        }
    >
}

//dependencies
import * as t_lionweb_to_prose from "pareto-lionweb/modules/lionweb-core/implementation/transformers/serialization_chunk/prose"
import * as t_schema_to_lionweb from "./lionweb_serialization_chunk.js"

//shorthands
import * as sh from "pareto-fountain-pen-file-structure/shorthands/file-system/target"

export const Schema_Tree: declarations.Schema_Tree = ($, $p) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => p_.literal.dictionary({
                "lionweb.json": sh.n.file(
                    t_lionweb_to_prose.Serialization_Chunk(
                        t_schema_to_lionweb.Schema($)
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
