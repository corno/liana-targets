
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz_high_level/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Graph: t_signatures.Graph = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "name": _p_change_context(
            $['name'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]],
                () => ['not set', null],
            )],
        ),
        "tree": _p_change_context(
            $['tree'],
            ($) => Tree(
                $,
            ),
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'undirected':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'undirected',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "edges": _p_change_context(
                                                $['edges'],
                                                ($) => ['list', _p.list.from.list(
                                                    $,
                                                ).map(
                                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "yin": _p_change_context(
                                                                $['yin'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "yang": _p_change_context(
                                                                $['yang'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "attributes": _p_change_context(
                                                                $['attributes'],
                                                                ($) => Edge_Attributes(
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
                        case 'directed':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'directed',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "edges": _p_change_context(
                                                $['edges'],
                                                ($) => ['list', _p.list.from.list(
                                                    $,
                                                ).map(
                                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "from": _p_change_context(
                                                                $['from'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "to": _p_change_context(
                                                                $['to'],
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                ),
                                                            ),
                                                            "attributes": _p_change_context(
                                                                $['attributes'],
                                                                ($) => Edge_Attributes(
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
)]]

export const Tree: t_signatures.Tree = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "attributes": _p_change_context(
            $['attributes'],
            ($) => Graph_Attributes(
                $,
            ),
        ),
        "elements": _p_change_context(
            $['elements'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['state', _p.decide.state(
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
                                                "attributes": _p_change_context(
                                                    $['attributes'],
                                                    ($) => Node_Attributes(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    }),
                                )
                            case 'sub':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'sub',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "type": _p_change_context(
                                                    $['type'],
                                                    ($) => ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'group':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'group',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'cluster':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'cluster',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'subgraph':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'subgraph',
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
                                                "tree": _p_change_context(
                                                    $['tree'],
                                                    ($) => Tree(
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

export const End_Point_Specification: t_signatures.End_Point_Specification = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "start": _p_change_context(
            $['start'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "tail": _p_change_context(
            $['tail'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "port data": _p_change_context(
            $['port data'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                    {
                        "port": _p_change_context(
                            $['port'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "compass direction": _p_change_context(
                            $['compass direction'],
                            ($) => ['optional', _p.decide.optional(
                                $,
                                ($): t_out.Value.optional => ['set', ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]],
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

export const Graph_Attributes: t_signatures.Graph_Attributes = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'concentrate':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'concentrate',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'charset':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'charset',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'clusterrank':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'clusterrank',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'local',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'global':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'global',
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
                        }),
                    )
                case 'color':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'color',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'color scheme':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'color scheme',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'comment':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'comment',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'compound':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'compound',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'dpi':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'dpi',
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
                case 'font color':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'font color',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'font name':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'font name',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'font path':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'font path',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'font size':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'font size',
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
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'label distance':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label distance',
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
                case 'label scheme':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label scheme',
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
                case 'label location':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label location',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'top':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'top',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bottom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bottom',
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
                        }),
                    )
                case 'landscape':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'landscape',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'layer list':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'layer list',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'layer separator':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'layer separator',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'layers':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'layers',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'margin':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'margin',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'max iteration':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'max iteration',
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
                case 'mclimit':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'mclimit',
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
                case 'mindist':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'mindist',
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
                case 'mode':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'mode',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'no output':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'no output',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'out':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'out',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'in':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'in',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'in out':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'in out',
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
                        }),
                    )
                case 'newrank':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'newrank',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'no loop':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'no loop',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'normalize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'normalize',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'ordering':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'ordering',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'out':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'out',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'in':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'in',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'in out':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'in out',
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
                        }),
                    )
                case 'orientation':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'orientation',
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
                case 'output order':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'output order',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'breadth first':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'breadth first',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'dfs':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dfs',
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
                        }),
                    )
                case 'overlap':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'overlap',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'output mode':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'output mode',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'edges first':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'edges first',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'nodes first':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nodes first',
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
                        }),
                    )
                case 'pack':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pack',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'pack mode':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pack mode',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'node':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'node',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'graph':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'graph',
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
                        }),
                    )
                case 'pad':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pad',
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
                case 'page':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'page',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'quadtree':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'quadtree',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'quantum':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'quantum',
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
                case 'rankdir':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'rankdir',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'top bottom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'top bottom',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bottom top':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bottom top',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'left right':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'left right',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'right left':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'right left',
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
                        }),
                    )
                case 'ranksep':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'ranksep',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'ratio':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'ratio',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'remincross':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'remincross',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'rotate':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'rotate',
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
                case 'scale':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'scale',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'searchsize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'searchsize',
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
                case 'sep':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'sep',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'showboxes':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'showboxes',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'size':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'size',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'smoothing':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'smoothing',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'spring':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'spring',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'triangle':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'triangle',
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
                        }),
                    )
                case 'sortv':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'sortv',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'splines':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'splines',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'start':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'start',
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
                case 'style':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'style',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'stylesheet':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'stylesheet',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'target':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'target',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'truecolor':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'truecolor',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'viewport':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'viewport',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'width':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'width',
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
                case 'xdotversion':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'xdotversion',
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
                case 'xlabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'xlabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
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

export const Node_Attributes: t_signatures.Node_Attributes = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'color':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'color',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'colorscheme':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'colorscheme',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'comment':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'comment',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'concentrate':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'concentrate',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'fill color':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'fill color',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'fixed size':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'fixed size',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'font color':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'font color',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'font name':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'font name',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'font size':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'font size',
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
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'group',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'height':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'height',
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
                case 'image':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'image',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'labelloc':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelloc',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'top':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'top',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'center':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'center',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'bottom':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'bottom',
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
                        }),
                    )
                case 'layers':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'layers',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'margin':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'margin',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'nojustify':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'nojustify',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'orientation':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'orientation',
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
                case 'pen width':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pen width',
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
                case 'peripheries':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'peripheries',
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
                case 'pos':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pos',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'rects':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'rects',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'regular':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'regular',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'root':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'root',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'shape':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'shape',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'showboxes':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'showboxes',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'sides':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'sides',
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
                case 'skew':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'skew',
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
                case 'style':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'style',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'target':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'target',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'width':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'width',
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
                case 'xlabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'xlabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'xlp':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'xlp',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
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

export const Edge_Attributes: t_signatures.Edge_Attributes = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'arrowhead':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'arrowhead',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'arrowsize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'arrowsize',
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
                case 'arrowtail':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'arrowtail',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'bgcolor':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'bgcolor',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'color':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'color',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'colorscheme':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'colorscheme',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'comment':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'comment',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'constraint':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'constraint',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'decorate':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'decorate',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'dir':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'dir',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'forward':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'forward',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'back':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'back',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'both':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'both',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'none':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'none',
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
                        }),
                    )
                case 'edge url':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edge url',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'edge lp':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edge lp',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'edge target':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edge target',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'edge tooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'edge tooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'head lp':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'head lp',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'headclip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headclip',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'headlabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headlabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'headport':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'headport',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'height':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'height',
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
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'label distance':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label distance',
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
                case 'label angle':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label angle',
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
                case 'label float':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label float',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'labelfloat':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelfloat',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'labelhref':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'labelhref',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'label lp':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'label lp',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'layer':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'layer',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'len':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'len',
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
                case 'lhead':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'lhead',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'lp':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'lp',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'ltail':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'ltail',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'minlen':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'minlen',
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
                case 'pen width':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pen width',
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
                case 'pos':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'pos',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'same head':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'same head',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'same tail':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'same tail',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'showboxes':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'showboxes',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'style':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'style',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tail lp':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tail lp',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tailclip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailclip',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_boolean.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'taillabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'taillabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tailport':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tailport',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'tooltip':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tooltip',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'weight':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'weight',
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
                case 'xlabel':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'xlabel',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'xlp':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'xlp',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
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

export const Attribute_Value: t_signatures.Attribute_Value = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'number':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'number',
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
            case 'html string':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'html string',
                        'value': ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
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
