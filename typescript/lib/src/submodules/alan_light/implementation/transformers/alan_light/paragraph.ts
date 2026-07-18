import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../../../interface/schemas/alan_light.js"
import type * as s_out from "../../../schemas/paragraph.js"

namespace declarations {
    export type Root = p_i.Transformer<
        s_in.Root,
        s_out.Paragraph
    >
    export type Node = p_i.Transformer<
        s_in.Node,
        s_out.Phrase
    >
    export type Identifier = p_i.Transformer<
        s_in.Identifier,
        s_out.Phrase
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

//dependencies
import * as ser_identifier from "../../serializers/identifier.js"


export const Root: declarations.Root = ($) => sh.pg.sentences([
    sh.sentence(
        p_.literal.list([
            sh.ph.text("users"),
            sh.ph.indent(
                sh.pg.sentences([
                    sh.sentence([
                        sh.ph.text("anonymous")
                    ])
                ]),
            ),
        ]),
    ),
    sh.sentence(
        p_.literal.list([])
    ),
    sh.sentence(
        p_.literal.list([
            sh.ph.text("interfaces")
        ])
    ),
    sh.sentence(
        p_.literal.list([])
    ),
    sh.sentence([
        sh.ph.text("root "),
        Node($.root)
    ]),
    sh.sentence(
        p_.literal.list([])
    ),
    sh.sentence(

        p_.literal.list([
            sh.ph.text("numerical-types ")
        ]),
    ),
    sh.sentence(
        p_.literal.list([])
    ),
])


export const Node: declarations.Node = ($) => sh.ph.composed([
    sh.ph.text("{"),
    sh.ph.indent(
        sh.pg.sentences(
            p_.from.dictionary($.properties).convert_to_list(
                ($, id) => sh.sentence([
                    sh.ph.text(ser_identifier.Identifier(id)),
                    sh.ph.text(": "),
                    p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'collection': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("collection ["),
                                    sh.ph.text(ser_identifier.Identifier($.key)),
                                    sh.ph.text("] "),
                                    Node($.node)
                                ]))
                                case 'group': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("group "),
                                    Node($.node)
                                ]))
                                case 'state group': return p_.option($, ($) => p_.from.dictionary($.states).on_has_entries(
                                    ($) => sh.ph.composed([
                                        sh.ph.text("stategroup ("),
                                        sh.ph.indent(
                                            sh.pg.sentences(
                                                p_.from.dictionary($).convert_to_list(
                                                    ($, id) => sh.sentence([
                                                        sh.ph.text(ser_identifier.Identifier(id)),
                                                        sh.ph.text(" "),
                                                        Node($.node)
                                                    ])
                                                )
                                            )
                                        ),
                                        sh.ph.text(")")
                                    ]),
                                    () => sh.ph.text("group { }")
                                ))
                                case 'text': return p_.option($, ($) => sh.ph.text("text"))
                                default: return p_.exhaustive($[0])
                            }
                        })
                ])
            )
        ),

    ),
    sh.ph.text("}"),
])