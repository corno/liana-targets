import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//schemas
import type * as s_in from "../../../../../interface/schemas/alan_light.js"

import type * as s_out from "../../../interface/schemas/prose.js"
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
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"


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

export const Identifier: declarations.Identifier = ($) => sh.ph.serialize(
    p_.literal.segmented_list([
        p_.literal.list([
            0x60, // `
        ]),
        p_.from.list(p_list_from_text(
            $,
            ($) => $
        ),
        ).flatten(
            ($) => {
                switch ($) {
                    case 0x22: // " (\")
                        return p_.literal.list([
                            0x5C, // \
                            0x22, // "
                        ])
                    case 0x5C: // \ (\\)
                        return p_.literal.list([
                            0x5C, // \
                            0x5C, // \
                        ])
                    case 0x08: // backspace (\b)
                        return p_.literal.list([
                            0x5C, // \
                            0x62, // b
                        ])
                    case 0x0C: // form feed (\f)
                        return p_.literal.list([
                            0x5C, // \
                            0x66, // f
                        ])
                    case 0x0A: // line feed (\n)
                        return p_.literal.list([
                            0x5C, // \
                            0x6E, // n
                        ])
                    case 0x0D: // carriage return (\r)
                        return p_.literal.list([
                            0x5C, // \
                            0x72, // r
                        ])
                    case 0x09: // horizontal tab (\t)
                        return p_.literal.list([
                            0x5C, // \
                            0x74, // t
                        ])
                    case 0x0B: // vertical tab (\v)
                        return p_.literal.list([
                            0x5C, // \
                            0x76, // v
                        ])
                    default: {
                        return p_.literal.list([
                            $,
                        ])
                    }
                }
            }
        ),
        p_.literal.list([
            0x60, // `
        ])
    ]))

export const Node: declarations.Node = ($) => sh.ph.composed([
    sh.ph.text("{"),
    sh.ph.indent(
        sh.pg.sentences(
            p_.from.dictionary($.properties).convert_to_list(
                ($, id) => sh.sentence([
                    Identifier(id),
                    sh.ph.text(": "),
                    p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'collection': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("collection ["),
                                    Identifier($.key),
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
                                                        Identifier(id),
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