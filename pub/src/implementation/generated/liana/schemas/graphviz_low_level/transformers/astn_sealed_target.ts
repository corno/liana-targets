
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz_low_level/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Graph: t_signatures.Graph = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "strict": _p_change_context(
            $['strict'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': _p_text_from_list(
                    v_serialize_boolean.serialize(
                        $,
                    ),
                    ($) => $,
                ),
            }],
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'graph':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'graph',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'digraph':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'digraph',
                                    'value': ['nothing', null],
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
        "name": _p_change_context(
            $['name'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ID(
                    $,
                )],
                () => ['not set', null],
            )],
        ),
        "statements": _p_change_context(
            $['statements'],
            ($) => Statement_List(
                $,
            ),
        ),
    },
)]]

export const Statement_List: t_signatures.Statement_List = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'node':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'node',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "node": _p_change_context(
                                        $['node'],
                                        ($) => Node_ID(
                                            $,
                                        ),
                                    ),
                                    "attribute list": _p_change_context(
                                        $['attribute list'],
                                        ($) => Attribute_List(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'edge':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edge',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "left": _p_change_context(
                                        $['left'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'node':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'node',
                                                                'value': Node_ID(
                                                                    $,
                                                                ),
                                                            }),
                                                        )
                                                    case 'subgraph':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'subgraph',
                                                                'value': Subgraph(
                                                                    $,
                                                                ),
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
                                    "right": _p_change_context(
                                        $['right'],
                                        ($) => ['list', _p.list.from.list(
                                            $,
                                        ).map(
                                            ($) => ['state', _p.decide.state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'node':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'node',
                                                                    'value': Node_ID(
                                                                        $,
                                                                    ),
                                                                }),
                                                            )
                                                        case 'subgraph':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'subgraph',
                                                                    'value': Subgraph(
                                                                        $,
                                                                    ),
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
                                    "attributes": _p_change_context(
                                        $['attributes'],
                                        ($) => Attribute_List(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'attribute list':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'attribute list',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "type": _p_change_context(
                                        $['type'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'graph':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'graph',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'node':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'node',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'edge':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'edge',
                                                                'value': ['nothing', null],
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
                                    "attributes": _p_change_context(
                                        $['attributes'],
                                        ($) => Attribute_List(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'attribute assignment':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'attribute assignment',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "name": _p_change_context(
                                        $['name'],
                                        ($) => ID(
                                            $,
                                        ),
                                    ),
                                    "value": _p_change_context(
                                        $['value'],
                                        ($) => ID(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'subgraph':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'subgraph',
                            'value': Subgraph(
                                $,
                            ),
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Attribute_List: t_signatures.Attribute_List = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "name": _p_change_context(
                $['name'],
                ($) => ID(
                    $,
                ),
            ),
            "value": _p_change_context(
                $['value'],
                ($) => ID(
                    $,
                ),
            ),
        },
    )]],
)]

export const Node_ID: t_signatures.Node_ID = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "id": _p_change_context(
            $['id'],
            ($) => ID(
                $,
            ),
        ),
        "port": _p_change_context(
            $['port'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                    {
                        "port": _p_change_context(
                            $['port'],
                            ($) => ID(
                                $,
                            ),
                        ),
                        "compass point": _p_change_context(
                            $['compass point'],
                            ($) => ['optional', _p.decide.optional(
                                $,
                                ($): t_out.Value.optional => ['set', ID(
                                    $,
                                )],
                                () => ['not set', null],
                            )],
                        ),
                    },
                )]]],
                () => ['not set', null],
            )],
        ),
    },
)]]

export const ID: t_signatures.ID = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'id':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'id',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'string',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'html':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'html',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    }),
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['text', {
                            'delimiter': ['none', null],
                            'value': _p_text_from_list(
                                v_serialize_number.serialize(
                                    $,
                                ),
                                ($) => $,
                            ),
                        }],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Subgraph: t_signatures.Subgraph = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "subgraph": _p_change_context(
            $['subgraph'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['optional', _p.decide.optional(
                    $,
                    ($): t_out.Value.optional => ['set', ID(
                        $,
                    )],
                    () => ['not set', null],
                )]],
                () => ['not set', null],
            )],
        ),
        "statements": _p_change_context(
            $['statements'],
            ($) => Statement_List(
                $,
            ),
        ),
    },
)]]
