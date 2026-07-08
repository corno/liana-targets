import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "pareto-liana/interface/generated/liana/schemas/schema/data/resolved"
import type * as d_out from "pareto-static-html/interface/generated/liana/schemas/static-html/data"

export namespace interface_ {
    export type Package = p_i.Transformer<
        d_in.Package, d_out.Document
    >
    export type Schema_Tree = p_i.Transformer<
        d_in.Schema_Tree, d_out.Flow_Element
    >
    export type Schemas = p_i.Transformer<
        d_in.Schemas, d_out.Flow_Content
    >
    export type Schema = p_i.Transformer<
        d_in.Schema, d_out.Flow_Element
    >
}
import * as temp_interface_ from "../../../../interface/declarations/transformers/schema/documentation.js"

//shorthands
import * as sh from "pareto-static-html/shorthands/static_html/target"


export const Package: interface_.Package = ($) => sh.document(
    `/*CSS*/
    
    .div#modules
    
    `,
    Schema_Tree($['schema tree'])
)

export const Schema_Tree: interface_.Schema_Tree = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => Schema($))
            case 'set': return p_.option($, ($) => sh.f.div(Schemas($)))
            default: return p_.exhaustive($[0])
        }
    })

export const Schemas: interface_.Schemas = ($) => p_.from.dictionary($).convert_to_list(
    ($, id) => sh.f.div(
        p_.literal.list([
            sh.f.span(
                p_.literal.list([
                    sh.p.p("schema:"),
                    sh.p.p(id),
                ])
            ),
            Schema_Tree($)
        ])
    )
)


export const Schema: interface_.Schema = ($) => sh.f.classified_div(
    p_.literal.list([
        "modules"
    ]),
    p_.from.dictionary($.modules).convert_to_list(
        ($, id) => sh.f.div(
            p_.literal.list([
                sh.f.span(
                    p_.literal.list([
                        sh.p.p("module:"),
                        sh.p.p(id),
                    ])
                ),
            ])
        )
    )
)