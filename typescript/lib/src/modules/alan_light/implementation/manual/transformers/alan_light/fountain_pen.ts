import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_in from "../../../../../../interface/generated/liana/schemas/alan_light/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


export const Root = (
    $: d_in.Root
): d_out.Paragraph => sh.pg.sentences([
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

export const Identifier = (
    $: d_in.Identifier
): d_out.Phrase => sh.ph.serialize(_p.list.nested_literal_old([
    [
        0x60, // `
    ],
    _p.list.from.list(
        _p_list_from_text($, ($) => $),
    ).flatten(
        ($): _pi.List<number> => {
            switch ($) {
                case 0x22: // " (\")
                    return _p.list.literal([
                        0x5C, // \
                        0x22, // "
                    ])
                case 0x5C: // \ (\\)
                    return _p.list.literal([
                        0x5C, // \
                        0x5C, // \
                    ])
                case 0x08: // backspace (\b)
                    return _p.list.literal([
                        0x5C, // \
                        0x62, // b
                    ])
                case 0x0C: // form feed (\f)
                    return _p.list.literal([
                        0x5C, // \
                        0x66, // f
                    ])
                case 0x0A: // line feed (\n)
                    return _p.list.literal([
                        0x5C, // \
                        0x6E, // n
                    ])
                case 0x0D: // carriage return (\r)
                    return _p.list.literal([
                        0x5C, // \
                        0x72, // r
                    ])
                case 0x09: // horizontal tab (\t)
                    return _p.list.literal([
                        0x5C, // \
                        0x74, // t
                    ])
                case 0x0B: // vertical tab (\v)
                    return _p.list.literal([
                        0x5C, // \
                        0x76, // v
                    ])
                default: {
                    return _p.list.literal([
                        $,
                    ])
                }
            }
        }
    ),
    [
        0x60, // `
    ]
]))

export const Node = (
    $: d_in.Node
): d_out.Phrase => sh.ph.composed([
    sh.ph.literal("{"),
    sh.ph.indent(
        sh.pg.sentences(
            _p.list.from.dictionary(
                $.properties,
            ).convert(
                ($, id) => sh.sentence([
                    Identifier(id),
                    sh.ph.literal(": "),
                    _p.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'collection': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("collection ["),
                                Identifier($.key),
                                sh.ph.literal("] "),
                                Node($.node)
                            ]))
                            case 'group': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("group "),
                                Node($.node)
                            ]))
                            case 'state group': return _p.ss($, ($) => _p.boolean.from.dictionary($.states).is_empty()
                                ? sh.ph.literal("group { }")
                                : sh.ph.composed([
                                    sh.ph.literal("stategroup ("),
                                    sh.ph.indent(
                                        sh.pg.sentences(
                                            _p.list.from.dictionary(
                                                $.states,
                                            ).convert(
                                                ($, id) => sh.sentence([
                                                    Identifier(id),
                                                    sh.ph.literal(" "),
                                                    Node($.node)
                                                ])
                                            )
                                        )
                                    ),
                                    sh.ph.literal(")")
                                ]))
                            case 'text': return _p.ss($, ($) => sh.ph.literal("text"))
                            default: return _p.au($[0])
                        }
                    })
                ])
            )
        ),

    ),
    sh.ph.literal("}"),
])