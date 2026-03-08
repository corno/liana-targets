import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-fountain-pen-file-structure/dist/interface/to_be_generated/file-system"

//dependencies
import * as t_lionweb_to_fountain_pen from "pareto-lionweb/dist/modules/lionweb-core/implementation/manual/transformers/serialization_chunk/fountain_pen"
import * as t_schema_to_lionweb from "./lionweb_serialization_chunk"

//shorthands
import * as sh from "pareto-fountain-pen-file-structure/dist/shorthands/file-system"

export const Schema_Tree = (
    $: d_in.Schema_Tree,
    $p: {
        'graph name': string
    }
): d_out.Directory => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => _p.dictionary.literal({
            "lionweb.json": sh.n.file(
                t_lionweb_to_fountain_pen.Serialization_Chunk(
                    t_schema_to_lionweb.Schema($)
                ),
            )
        }))
        case 'set': return _p.ss($, ($) => Schemas($))
        default: return _p.au($[0])
    }
})

export const Schemas = ($: d_in.Schemas): d_out.Directory => $.__d_map(($, id) => sh.n.directory(Schema_Tree($, { 'graph name': id })))

export const Package = (
    $: d_in.Package,
    $p: {
        'graph name': string
    }
): d_out.Directory => Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })
