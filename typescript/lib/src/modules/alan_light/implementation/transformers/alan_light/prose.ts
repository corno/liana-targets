import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//data types
import type * as d_in from "../../../../../interface/generated/liana/schemas/alan_light/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export namespace interface_ {
    export type Root = p_i.Transformer<
        d_in.Root,
        d_out.Paragraph
    >
    export type Node = p_i.Transformer<
        d_in.Node,
        d_out.Phrase
    >
    export type Identifier = p_i.Transformer<
        d_in.Identifier,
        d_out.Phrase
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"


export const Root: interface_.Root = ($) => sh.pg.sentences([
    sh.sentence(
        p_.literal.list([
            sh.ph.literal("users"),
            sh.ph.indent(
                sh.pg.sentences([
                    sh.sentence([
                        sh.ph.literal("anonymous")
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
            sh.ph.literal("interfaces")
        ])
    ),
    sh.sentence(
        p_.literal.list([])
    ),
    sh.sentence([
        sh.ph.literal("root "),
        Node($.root)
    ]),
    sh.sentence(
        p_.literal.list([])
    ),
    sh.sentence(

        p_.literal.list([
            sh.ph.literal("numerical-types ")
        ]),
    ),
    sh.sentence(
        p_.literal.list([])
    ),
])

export const Identifier: interface_.Identifier = ($) => sh.ph.serialize(
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

export const Node: interface_.Node = ($) => sh.ph.composed([
    sh.ph.literal("{"),
    sh.ph.indent(
        sh.pg.sentences(
            p_.from.dictionary($.properties).convert_to_list(
                ($, id) => sh.sentence([
                    Identifier(id),
                    sh.ph.literal(": "),
                    p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'collection': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("collection ["),
                                    Identifier($.key),
                                    sh.ph.literal("] "),
                                    Node($.node)
                                ]))
                                case 'group': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("group "),
                                    Node($.node)
                                ]))
                                case 'state group': return p_.option($, ($) => p_.from.dictionary($.states).on_has_entries(
                                    ($) => sh.ph.composed([
                                        sh.ph.literal("stategroup ("),
                                        sh.ph.indent(
                                            sh.pg.sentences(
                                                p_.from.dictionary($).convert_to_list(
                                                    ($, id) => sh.sentence([
                                                        Identifier(id),
                                                        sh.ph.literal(" "),
                                                        Node($.node)
                                                    ])
                                                )
                                            )
                                        ),
                                        sh.ph.literal(")")
                                    ]),
                                    () => sh.ph.literal("group { }")
                                ))
                                case 'text': return p_.option($, ($) => sh.ph.literal("text"))
                                default: return p_.exhaustive($[0])
                            }
                        })
                ])
            )
        ),

    ),
    sh.ph.literal("}"),
])