import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "pareto-liana/modules/liana.generated/modules/schema/schemas/resolved"
import type * as s_out from "../../../interface/schemas/static_html_document.js"

namespace declarations {
    export type Package = p_.Transformer<
        s_in.Package,
        s_out.Document
    >
    export type Schema_Tree = p_.Transformer<
        s_in.Schema_Tree,
        s_out.Flow_Element
    >
    export type Schemas = p_.Transformer<
        s_in.Schemas,
        s_out.Flow_Content
    >
    export type Schema = p_.Transformer<
        s_in.Schema,
        s_out.Flow_Element
    >
}

//shorthands
import * as sh from "pareto-static-html/shorthands/static_html/target"


export const Package: declarations.Package = ($) => sh.document(
    `/*CSS*/
    
    .div#modules
    
    `,
    Schema_Tree($['schema tree'])
)

export const Schema_Tree: declarations.Schema_Tree = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => Schema($))
            case 'set': return p_.option($, ($) => sh.f.div(Schemas($)))
            default: return p_.exhaustive($[0])
        }
    })

export const Schemas: declarations.Schemas = ($) => p_.from.dictionary($).convert_to_list(
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


export const Schema: declarations.Schema = ($) => sh.f.classified_div(
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