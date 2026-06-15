import * as p_ from 'pareto-core/dist/implementation/transformer'

//data types
import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"

//shorthands
import * as sh from "pareto-static-html/dist/shorthands/static_html"


export const Package = ($: d_in.Package): d_out.Document => sh.document(
    `/*CSS*/
    
    .div#modules
    
    `,
    Schema_Tree($['schema tree'])
)

export const Schema_Tree = (
    $: d_in.Schema_Tree
): d_out.Flow_Element => p_.decide.state($, ($): d_out.Flow_Element => {
    switch ($[0]) {
        case 'schema': return p_.ss($, ($) => Schema($))
        case 'set': return p_.ss($, ($) => sh.f.div(Schemas($)))
        default: return p_.au($[0])
    }
})

export const Schemas = ($: d_in.Schemas): d_out.Flow_Content => $.__to_list(($, id) => sh.f.div([
    sh.f.span([
        sh.p_.p_("schema:"),
        sh.p_.p_(id),
    ]),
    Schema_Tree($)
]))


export const Schema = ($: d_in.Schema): d_out.Flow_Element => sh.f.classified_div(
    [
        "modules"
    ],
    $.modules.__to_list(($, id) => sh.f.div([
        sh.f.span([
            sh.p_.p_("module:"),
            sh.p_.p_(id),
        ]),
    ]))
)