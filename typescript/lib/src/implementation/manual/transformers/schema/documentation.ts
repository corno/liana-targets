import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"

//shorthands
import * as sh from "pareto-static-html/dist/shorthands/static_html"


export const Package: p_i.Transformer<d_in.Package, d_out.Document> = ($) => sh.document(
    `/*CSS*/
    
    .div#modules
    
    `,
    Schema_Tree($['schema tree'])
)

export const Schema_Tree: p_i.Transformer<d_in.Schema_Tree, d_out.Flow_Element> = ($) => p_.from.state($).decide(($) => {
    switch ($[0]) {
        case 'schema': return p_.ss($, ($) => Schema($))
        case 'set': return p_.ss($, ($) => sh.f.div(Schemas($)))
        default: return p_.au($[0])
    }
})

export const Schemas: p_i.Transformer<d_in.Schemas, d_out.Flow_Content> = ($) => p_.from.dictionary($).convert_to_list(($, id) => sh.f.div([
    sh.f.span([
        sh.p.p("schema:"),
        sh.p.p(id),
    ]),
    Schema_Tree($)
]))


export const Schema: p_i.Transformer<d_in.Schema, d_out.Flow_Element> = ($) => sh.f.classified_div(
    [
        "modules"
    ],
    p_.from.dictionary($.modules).convert_to_list(($, id) => sh.f.div([
        sh.f.span([
            sh.p.p("module:"),
            sh.p.p(id),
        ]),
    ]))
)