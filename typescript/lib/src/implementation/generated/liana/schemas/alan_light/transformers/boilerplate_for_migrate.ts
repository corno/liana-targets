
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_create_symbol from 'pareto-core/dist/implementation/specials/create_symbol'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/alan_light/data"

export const Identifier: t_signatures.Identifier = ($) => $

export const Path: t_signatures.Path = ($) => ({
    'up steps': p_change_context(
        $['up steps'],
        ($) => p_.from.list(
            $,
        ).map(
            ($) => _p_create_symbol(),
        ),
    ),
    'context': p_change_context(
        $['context'],
        ($) => p_decide_state(
            $,
            ($): t_out.Path.context => {
                switch ($[0]) {
                    case 'sibling':
                        return p_.ss(
                            $,
                            ($) => ['sibling', _p_create_symbol()],
                        )
                    case 'state constraint':
                        return p_.ss(
                            $,
                            ($) => ['state constraint', {
                                'name': p_change_context(
                                    $['name'],
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
    'selection steps': p_change_context(
        $['selection steps'],
        ($) => p_.from.list(
            $,
        ).map(
            ($) => p_decide_state(
                $,
                ($): t_out.Path.selection_steps.L => {
                    switch ($[0]) {
                        case 'group':
                            return p_.ss(
                                $,
                                ($) => ['group', {
                                    'name': p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        case 'state constraint':
                            return p_.ss(
                                $,
                                ($) => ['state constraint', {
                                    'name': p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        case 'reference':
                            return p_.ss(
                                $,
                                ($) => ['reference', {
                                    'name': p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        ),
    ),
})

export const Node: t_signatures.Node = ($) => ({
    'properties': p_change_context(
        $['properties'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'type': p_change_context(
                    $['type'],
                    ($) => p_decide_state(
                        $,
                        ($): t_out.Node.properties.D.type_ => {
                            switch ($[0]) {
                                case 'collection':
                                    return p_.ss(
                                        $,
                                        ($) => ['collection', {
                                            'node': p_change_context(
                                                $['node'],
                                                ($) => Node(
                                                    $,
                                                ),
                                            ),
                                            'key': p_change_context(
                                                $['key'],
                                                ($) => Identifier(
                                                    $,
                                                ),
                                            ),
                                        }],
                                    )
                                case 'group':
                                    return p_.ss(
                                        $,
                                        ($) => ['group', {
                                            'node': p_change_context(
                                                $['node'],
                                                ($) => Node(
                                                    $,
                                                ),
                                            ),
                                        }],
                                    )
                                case 'text':
                                    return p_.ss(
                                        $,
                                        ($) => ['text', {
                                            'constraint': p_change_context(
                                                $['constraint'],
                                                ($) => p_.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => ({
                                                        'path': p_change_context(
                                                            $['path'],
                                                            ($) => Path(
                                                                $,
                                                            ),
                                                        ),
                                                        'dictionary': p_change_context(
                                                            $['dictionary'],
                                                            ($) => Identifier(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        }],
                                    )
                                case 'state group':
                                    return p_.ss(
                                        $,
                                        ($) => ['state group', {
                                            'states': p_change_context(
                                                $['states'],
                                                ($) => p_.from.dictionary(
                                                    $,
                                                ).map(
                                                    ($, id) => ({
                                                        'constraints': p_change_context(
                                                            $['constraints'],
                                                            ($) => p_.from.dictionary(
                                                                $,
                                                            ).map(
                                                                ($, id) => ({
                                                                    'path': p_change_context(
                                                                        $['path'],
                                                                        ($) => Path(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        ),
                                                        'node': p_change_context(
                                                            $['node'],
                                                            ($) => Node(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        }],
                                    )
                                default:
                                    return p_.au(
                                        $[0],
                                    )
                            }
                        },
                    ),
                ),
            }),
        ),
    ),
})

export const Root: t_signatures.Root = ($) => ({
    'numerical types': p_change_context(
        $['numerical types'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => _p_create_symbol(),
        ),
    ),
    'root': p_change_context(
        $['root'],
        ($) => Node(
            $,
        ),
    ),
})
