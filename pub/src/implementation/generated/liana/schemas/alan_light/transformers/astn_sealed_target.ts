
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Identifier: t_signatures.Identifier = ($) => ['text', {
    'delimiter': ['quote', null],
    'value': $,
}]

export const Path: t_signatures.Path = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "up steps": _p_change_context(
            $['up steps'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {},
                )]],
            )],
        ),
        "context": _p_change_context(
            $['context'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'sibling',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {},
                                    )]],
                                }),
                            )
                        case 'state constraint':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'state constraint',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "name": _p_change_context(
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
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "selection steps": _p_change_context(
            $['selection steps'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['state', _p.decide.state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'group':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'group',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "name": _p_change_context(
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
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'state constraint',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "name": _p_change_context(
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
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'reference',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "name": _p_change_context(
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
                                return _p.au(
                                    $[0],
                                )
                        }
                    },
                )],
            )],
        ),
    },
)]]

export const Node: t_signatures.Node = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "properties": _p_change_context(
            $['properties'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "type": _p_change_context(
                            $['type'],
                            ($) => ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'collection':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'collection',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "node": _p_change_context(
                                                                $['node'],
                                                                ($) => Node(
                                                                    $,
                                                                ),
                                                            ),
                                                            "key": _p_change_context(
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
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'group',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "node": _p_change_context(
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
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'text',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "constraint": _p_change_context(
                                                                $['constraint'],
                                                                ($) => ['optional', _p.decide.optional(
                                                                    $,
                                                                    ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "path": _p_change_context(
                                                                                $['path'],
                                                                                ($) => Path(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                            "dictionary": _p_change_context(
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
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'state group',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "options": _p_change_context(
                                                                $['options'],
                                                                ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                    $,
                                                                ).map(
                                                                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "constraints": _p_change_context(
                                                                                $['constraints'],
                                                                                ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                                    $,
                                                                                ).map(
                                                                                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            "path": _p_change_context(
                                                                                                $['path'],
                                                                                                ($) => Path(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                )],
                                                                            ),
                                                                            "node": _p_change_context(
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
                                            return _p.au(
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

export const Root: t_signatures.Root = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "numerical types": _p_change_context(
            $['numerical types'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {},
                )]],
            )],
        ),
        "root": _p_change_context(
            $['root'],
            ($) => Node(
                $,
            ),
        ),
    },
)]]
