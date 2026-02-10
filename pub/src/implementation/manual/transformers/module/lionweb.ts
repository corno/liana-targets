import * as _p from 'pareto-core/dist/assign'

import * as d_in_s from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/module/data/resolved"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as t_schema_to_lionweb from "../schema/lionweb"
import * as t_lionweb_to_json from "../../lionweb/transformers/json"
import * as t_json_to_fountain_pen_block from "pareto-json/dist/implementation/manual/schemas/json/transformers/fountain_pen_block"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


export const Schema_Tree = ($: d_in_s.Schema_Tree): d_out.Directory => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => _p.dictionary.literal({
            "lionweb.json": sh.n.file(
                t_json_to_fountain_pen_block.Document(
                    t_lionweb_to_json.SerializationChunk(
                        t_schema_to_lionweb.Schema($)
                    )
                ),
            )
        }))
        case 'set': return _p.ss($, ($) => Schemas($))
        default: return _p.au($[0])
    }
})

export const Schemas = ($: d_in_s.Schemas): d_out.Directory => $.__d_map(($, id) => sh.n.directory(Schema_Tree($)))

export const Module = ($: d_in.Module): d_out.Directory => Schema_Tree($['schema tree'])