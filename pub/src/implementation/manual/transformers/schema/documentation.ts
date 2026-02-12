import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"

//shorthands
import * as sh from "pareto-static-html/dist/shorthands/static_html"


export const Package = ($: d_in.Package): d_out.Document => _p.dictionary.literal({
    "doc.html": sh.n.file(sh.group([
        t_schema_to_documentation.Schema_Tree($['schema tree'])
    ]))
})

export const Schema_Tree = (
    $: d_in.Schema_Tree
): d_out.Flow_Content => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => sh.g.sub([
            sh.pg.single_line("types:"),
            sh.g.nested_block([
                sh.ph.indent([
                    sh.g.sub($.types.__to_list((($, id) => sh.g.sub([
                        sh.pg.single_line(key)
                    ]))))
                ])
            ]),
            sh.pg.single_line(""),
        ]))
        case 'set': return _p.ss($, ($) => sh.g.sub([
            sh.pg.single_line("schemas:"),
            sh.g.nested_block([
                sh.ph.indent([
                    Schemas($)
                ])
            ]),
            sh.pg.single_line(""),
        ]))
        default: return _p.au($[0])
    }
})

export const Schemas = ($: d_in.Schemas): d_out.Flow_Content => sh.g.sub($.__to_list(($, id) => sh.g.sub([
    sh.pg.single_line(key),
    sh.g.nested_block([
        sh.ph.indent([
            Schema_Tree($),
        ]),
    ]),
])))