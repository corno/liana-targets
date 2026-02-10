import * as _p from 'pareto-core/dist/assign'

import * as d_in from "pareto/dist/interface/generated/liana/schemas/module/data"
import * as d_out from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"

//dependecies
import * as t_schema_to_documentation from "../schema/documentation"

//shorthands
import * as sh from "pareto-static-html/dist/shorthands/static_html"


export const Module = ($: d_in.Module): d_out.Document => _p.dictionary.literal({
    "doc.html": sh.n.file(sh.group([
        t_schema_to_documentation.Schema_Tree($['schema tree'])
    ]))
})