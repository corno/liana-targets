import * as _p from 'pareto-core/dist/assign'

import * as d_in_s from "pareto/dist/interface/generated/liana/schemas/schema/data"
import * as d_in from "pareto/dist/interface/generated/liana/schemas/module/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

//dependecies
import * as t_schema_to_documentation from "../../schema/transformers/documentation"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Module = ($: d_in.Module): d_out.Directory => _p.dictionary.literal({
    "doc.txt": sh.n.file(sh.group([
        t_schema_to_documentation.Schema_Tree($['schema tree'])
    ]))
})