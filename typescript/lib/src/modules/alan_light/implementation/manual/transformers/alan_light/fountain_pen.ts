import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import * as d_in from "../../../../../../interface/generated/liana/schemas/alan_light/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


export const Root: p_i.Transformer<
    d_in.Root,
    d_out.Paragraph
> = ($) => sh.pg.sentences([
    sh.sentence([
        sh.ph.literal("users"),
        sh.ph.indent(
            sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("anonymous")
                ])
            ]),
        ),
    ]),
    sh.sentence([]),
    sh.sentence([
        sh.ph.literal("interfaces")
    ]),
    sh.sentence([]),
    sh.sentence([
        sh.ph.literal("root "),
        Node($.root)
    ]),
    sh.sentence([]),
    sh.sentence([
        sh.ph.literal("numerical-types ")
    ]),
    sh.sentence([]),
])

export const Identifier: p_i.Transformer<
    d_in.Identifier,
    d_out.Phrase
> = ($) => sh.ph.serialize(p_.literal.segmented_list([
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

export const Node: p_i.Transformer<
    d_in.Node,
    d_out.Phrase
> = ($) => sh.ph.composed([
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
                                case 'collection': return p_.ss($, ($) => sh.ph.composed([
                                    sh.ph.literal("collection ["),
                                    Identifier($.key),
                                    sh.ph.literal("] "),
                                    Node($.node)
                                ]))
                                case 'group': return p_.ss($, ($) => sh.ph.composed([
                                    sh.ph.literal("group "),
                                    Node($.node)
                                ]))
                                case 'state group': return p_.ss($, ($) => p_.from.dictionary($.states).on_has_entries(
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
                                case 'text': return p_.ss($, ($) => sh.ph.literal("text"))
                                default: return p_.au($[0])
                            }
                        })
                ])
            )
        ),

    ),
    sh.ph.literal("}"),
])