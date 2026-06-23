
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State, assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>, assign: ($: OV) => B, otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string, assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Identifier: t_signatures.Identifier = ($) => ['text', {
    'delimiter': ['quote', null],
    'value': $,
}]

export const Path: t_signatures.Path = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "up steps": p_change_context(
            $['up steps'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['group', ['verbose', p_.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "context": p_change_context(
            $['context'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'sibling':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'sibling',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {},
                                    )]],
                                }),
                            )
                        case 'state constraint':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'state constraint',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "name": p_change_context(
                                                $['name'],
                                                ($) => Identifier(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "selection steps": p_change_context(
            $['selection steps'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['state', p_decide_state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'group':
                                return p_.ss(
                                    $,
                                    ($) => ({
                                        'option': 'group',
                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "name": p_change_context(
                                                    $['name'],
                                                    ($) => Identifier(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    }),
                                )
                            case 'state constraint':
                                return p_.ss(
                                    $,
                                    ($) => ({
                                        'option': 'state constraint',
                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "name": p_change_context(
                                                    $['name'],
                                                    ($) => Identifier(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    }),
                                )
                            case 'reference':
                                return p_.ss(
                                    $,
                                    ($) => ({
                                        'option': 'reference',
                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "name": p_change_context(
                                                    $['name'],
                                                    ($) => Identifier(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    }),
                                )
                            default:
                                return p_.au(
                                    $[0],
                                )
                        }
                    },
                )],
            )],
        ),
    },
)]]

export const Node: t_signatures.Node = ($): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
    {
        "properties": p_change_context(
            $['properties'],
            ($): t_out.Value => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "type": p_change_context(
                            $['type'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'collection':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'collection',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "node": p_change_context(
                                                                $['node'],
                                                                ($) => Node(
                                                                    $,
                                                                ),
                                                            ),
                                                            "key": p_change_context(
                                                                $['key'],
                                                                ($) => Identifier(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'group':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'group',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "node": p_change_context(
                                                                $['node'],
                                                                ($) => Node(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'text':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'text',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "constraint": p_change_context(
                                                                $['constraint'],
                                                                ($) => ['optional', p_decide_optional(
                                                                    $,
                                                                    ($): t_out.Value.optional => ['set', ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "path": p_change_context(
                                                                                $['path'],
                                                                                ($) => Path(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                            "dictionary": p_change_context(
                                                                                $['dictionary'],
                                                                                ($) => Identifier(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        },
                                                                    )]]],
                                                                    () => ['not set', null],
                                                                )],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'state group':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'state group',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "states": p_change_context(
                                                                $['states'],
                                                                ($) => ['dictionary', p_.from.dictionary($).map(
                                                                    ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "constraints": p_change_context(
                                                                                $['constraints'],
                                                                                ($) => ['dictionary', p_.from.dictionary($).map(
                                                                                    ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "path": p_change_context(
                                                                                                $['path'],
                                                                                                ($) => Path(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                )],
                                                                            ),
                                                                            "node": p_change_context(
                                                                                $['node'],
                                                                                ($) => Node(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        },
                                                                    )]],
                                                                )],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Root: t_signatures.Root = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "numerical types": p_change_context(
            $['numerical types'],
            ($) => ['dictionary', p_.from.dictionary($).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "root": p_change_context(
            $['root'],
            ($) => Node(
                $,
            ),
        ),
    },
)]]
