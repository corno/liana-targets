import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_implement_me from 'pareto-core-dev/implement_me'

//schemas
import type * as s_in from "pareto-liana/modules/liana.generated/modules/schema/schemas/resolved"
import type * as s_out from "../../../interface/schemas/to_be_written_directory_content.js"

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
// import * as t_lionweb_to_serialized from "pareto-lionweb/modules/lionweb-core/implementation/transformers/serialization_chunk/serialized"
import * as t_schema_to_lionweb from "./lionweb_serialization_chunk.js"

//shorthands
import * as sh from "pareto-filesystem-unrestricted-api/modules/helpers/shorthands/to_be_written_diretory_content/target"

export const Schema_Tree: declarations.Schema_Tree = ($, $p) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => p_.literal.dictionary({
                "lionweb.json": sh.n.file(
                    p_implement_me("TODO: implement lionweb serialization"),
                    // t_lionweb_to_serialized.Serialization_Chunk(
                    //     t_schema_to_lionweb.Schema($)
                    // ),
                    "\n"
                )
            }))
            case 'set': return p_.option($, ($) => Schemas($))
            default: return p_.exhaustive($[0])
        }
    })

export const Schemas: declarations.Schemas = ($) => p_.from.dictionary($).map(
    ($, id) => sh.n.directory(Schema_Tree($, { 'graph name': id })))

export const Package: declarations.Package = ($, $p) => Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })
