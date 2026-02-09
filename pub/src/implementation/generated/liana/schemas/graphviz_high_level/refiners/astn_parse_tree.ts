
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz_high_level/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/graphviz_high_level/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Graph: t_signatures.Graph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'name': _p_change_context(
            $.__get_entry_deprecated(
                'name',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "name"],
                    ),
                },
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
                    ),
                ),
            ).map(
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
        ),
        'tree': _p_change_context(
            $.__get_entry_deprecated(
                'tree',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "tree"],
                    ),
                },
            ),
            ($) => Tree(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'type': _p_change_context(
            $.__get_entry_deprecated(
                'type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "type"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
                    ),
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Graph.type_ => {
                        switch ($t) {
                            case 'undirected':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['undirected', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'edges': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'edges',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "edges"],
                                                        ),
                                                    },
                                                ),
                                                ($) => _p.list.from.list(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a list', null],
                                                        ),
                                                    ),
                                                ).map(
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'yin': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'yin',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "yin"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'yang': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'yang',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "yang"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'attributes': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'attributes',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "attributes"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => Edge_Attributes(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                ),
                                            ),
                                        }),
                                    )],
                                )
                            case 'directed':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['directed', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'edges': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'edges',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "edges"],
                                                        ),
                                                    },
                                                ),
                                                ($) => _p.list.from.list(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a list', null],
                                                        ),
                                                    ),
                                                ).map(
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'from': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'from',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "from"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'to': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'to',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "to"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => End_Point_Specification(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'attributes': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'attributes',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "attributes"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => Edge_Attributes(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                ),
                                            ),
                                        }),
                                    )],
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Tree: t_signatures.Tree = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'attributes': _p_change_context(
            $.__get_entry_deprecated(
                'attributes',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "attributes"],
                    ),
                },
            ),
            ($) => Graph_Attributes(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'elements': _p_change_context(
            $.__get_entry_deprecated(
                'elements',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "elements"],
                    ),
                },
            ),
            ($) => _p.dictionary.from.dictionary(
                v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null],
                    ),
                ),
            ).map(
                ($, id) => _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            ['expected a state', null],
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Tree.elements.D => {
                            switch ($t) {
                                case 'node':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['node', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'attributes': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'attributes',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "attributes"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => Node_Attributes(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        )],
                                    )
                                case 'sub':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['sub', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'type': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'type',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "type"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.State(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a state', null],
                                                            ),
                                                        ),
                                                        ($) => _p.decide.text(
                                                            $['option']['value'],
                                                            ($t): t_out.Tree.elements.D.sub.type_ => {
                                                                switch ($t) {
                                                                    case 'group':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['group', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'cluster':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['cluster', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'subgraph':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['subgraph', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        )
                                                                    default:
                                                                        return abort(
                                                                            ['unknown option', $['option']['value']],
                                                                        )
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                'tree': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'tree',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "tree"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => Tree(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        )],
                                    )
                                default:
                                    return abort(
                                        ['unknown option', $['option']['value']],
                                    )
                            }
                        },
                    ),
                ),
            ),
        ),
    }),
)

export const End_Point_Specification: t_signatures.End_Point_Specification = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry_deprecated(
                'start',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "start"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'tail': _p_change_context(
            $.__get_entry_deprecated(
                'tail',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "tail"],
                    ),
                },
            ),
            ($) => _p.list.from.list(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null],
                    ),
                ),
            ).map(
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
        ),
        'port data': _p_change_context(
            $.__get_entry_deprecated(
                'port data',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "port data"],
                    ),
                },
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
                    ),
                ),
            ).map(
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'port': _p_change_context(
                            $.__get_entry_deprecated(
                                'port',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "port"],
                                    ),
                                },
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                        'compass direction': _p_change_context(
                            $.__get_entry_deprecated(
                                'compass direction',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "compass direction"],
                                    ),
                                },
                            ),
                            ($) => _p.optional.from.optional(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null],
                                    ),
                                ),
                            ).map(
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                        ),
                    }),
                ),
            ),
        ),
    }),
)

export const Graph_Attributes: t_signatures.Graph_Attributes = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Graph_Attributes.L => {
                switch ($t) {
                    case 'concentrate':
                        return _p_change_context(
                            $['value'],
                            ($) => ['concentrate', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'charset':
                        return _p_change_context(
                            $['value'],
                            ($) => ['charset', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'clusterrank':
                        return _p_change_context(
                            $['value'],
                            ($) => ['clusterrank', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.clusterrank => {
                                        switch ($t) {
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'local':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['local', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'global':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['global', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'color':
                        return _p_change_context(
                            $['value'],
                            ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'color scheme':
                        return _p_change_context(
                            $['value'],
                            ($) => ['color scheme', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'comment':
                        return _p_change_context(
                            $['value'],
                            ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'compound':
                        return _p_change_context(
                            $['value'],
                            ($) => ['compound', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'dpi':
                        return _p_change_context(
                            $['value'],
                            ($) => ['dpi', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'font color':
                        return _p_change_context(
                            $['value'],
                            ($) => ['font color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'font name':
                        return _p_change_context(
                            $['value'],
                            ($) => ['font name', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'font path':
                        return _p_change_context(
                            $['value'],
                            ($) => ['font path', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'font size':
                        return _p_change_context(
                            $['value'],
                            ($) => ['font size', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'label':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'label distance':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label distance', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'label scheme':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label scheme', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'label location':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label location', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.label_location => {
                                        switch ($t) {
                                            case 'top':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['top', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'bottom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['bottom', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'landscape':
                        return _p_change_context(
                            $['value'],
                            ($) => ['landscape', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'layer list':
                        return _p_change_context(
                            $['value'],
                            ($) => ['layer list', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'layer separator':
                        return _p_change_context(
                            $['value'],
                            ($) => ['layer separator', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'layers':
                        return _p_change_context(
                            $['value'],
                            ($) => ['layers', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'margin':
                        return _p_change_context(
                            $['value'],
                            ($) => ['margin', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'max iteration':
                        return _p_change_context(
                            $['value'],
                            ($) => ['max iteration', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'mclimit':
                        return _p_change_context(
                            $['value'],
                            ($) => ['mclimit', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'mindist':
                        return _p_change_context(
                            $['value'],
                            ($) => ['mindist', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'mode':
                        return _p_change_context(
                            $['value'],
                            ($) => ['mode', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.mode => {
                                        switch ($t) {
                                            case 'no output':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['no output', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'out':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'in':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['in', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'in out':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['in out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'newrank':
                        return _p_change_context(
                            $['value'],
                            ($) => ['newrank', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'no loop':
                        return _p_change_context(
                            $['value'],
                            ($) => ['no loop', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'normalize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['normalize', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'ordering':
                        return _p_change_context(
                            $['value'],
                            ($) => ['ordering', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.ordering => {
                                        switch ($t) {
                                            case 'out':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'in':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['in', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'in out':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['in out', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'orientation':
                        return _p_change_context(
                            $['value'],
                            ($) => ['orientation', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'output order':
                        return _p_change_context(
                            $['value'],
                            ($) => ['output order', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.output_order => {
                                        switch ($t) {
                                            case 'breadth first':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['breadth first', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'dfs':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['dfs', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'overlap':
                        return _p_change_context(
                            $['value'],
                            ($) => ['overlap', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'output mode':
                        return _p_change_context(
                            $['value'],
                            ($) => ['output mode', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.output_mode => {
                                        switch ($t) {
                                            case 'edges first':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['edges first', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'nodes first':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['nodes first', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'pack':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pack', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'pack mode':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pack mode', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.pack_mode => {
                                        switch ($t) {
                                            case 'node':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['node', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'graph':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['graph', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'pad':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pad', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'page':
                        return _p_change_context(
                            $['value'],
                            ($) => ['page', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'quadtree':
                        return _p_change_context(
                            $['value'],
                            ($) => ['quadtree', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'quantum':
                        return _p_change_context(
                            $['value'],
                            ($) => ['quantum', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'rankdir':
                        return _p_change_context(
                            $['value'],
                            ($) => ['rankdir', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.rankdir => {
                                        switch ($t) {
                                            case 'top bottom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['top bottom', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'bottom top':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['bottom top', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'left right':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['left right', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'right left':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['right left', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'ranksep':
                        return _p_change_context(
                            $['value'],
                            ($) => ['ranksep', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'ratio':
                        return _p_change_context(
                            $['value'],
                            ($) => ['ratio', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'remincross':
                        return _p_change_context(
                            $['value'],
                            ($) => ['remincross', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'rotate':
                        return _p_change_context(
                            $['value'],
                            ($) => ['rotate', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'scale':
                        return _p_change_context(
                            $['value'],
                            ($) => ['scale', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'searchsize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['searchsize', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'sep':
                        return _p_change_context(
                            $['value'],
                            ($) => ['sep', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'showboxes':
                        return _p_change_context(
                            $['value'],
                            ($) => ['showboxes', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'size':
                        return _p_change_context(
                            $['value'],
                            ($) => ['size', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'smoothing':
                        return _p_change_context(
                            $['value'],
                            ($) => ['smoothing', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Graph_Attributes.L.smoothing => {
                                        switch ($t) {
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'spring':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['spring', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'triangle':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['triangle', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'sortv':
                        return _p_change_context(
                            $['value'],
                            ($) => ['sortv', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'splines':
                        return _p_change_context(
                            $['value'],
                            ($) => ['splines', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'start':
                        return _p_change_context(
                            $['value'],
                            ($) => ['start', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'style':
                        return _p_change_context(
                            $['value'],
                            ($) => ['style', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'stylesheet':
                        return _p_change_context(
                            $['value'],
                            ($) => ['stylesheet', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'target':
                        return _p_change_context(
                            $['value'],
                            ($) => ['target', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'truecolor':
                        return _p_change_context(
                            $['value'],
                            ($) => ['truecolor', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'viewport':
                        return _p_change_context(
                            $['value'],
                            ($) => ['viewport', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'width':
                        return _p_change_context(
                            $['value'],
                            ($) => ['width', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'xdotversion':
                        return _p_change_context(
                            $['value'],
                            ($) => ['xdotversion', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'xlabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    ),
)

export const Node_Attributes: t_signatures.Node_Attributes = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Node_Attributes.L => {
                switch ($t) {
                    case 'color':
                        return _p_change_context(
                            $['value'],
                            ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'colorscheme':
                        return _p_change_context(
                            $['value'],
                            ($) => ['colorscheme', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'comment':
                        return _p_change_context(
                            $['value'],
                            ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'concentrate':
                        return _p_change_context(
                            $['value'],
                            ($) => ['concentrate', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'fill color':
                        return _p_change_context(
                            $['value'],
                            ($) => ['fill color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'fixed size':
                        return _p_change_context(
                            $['value'],
                            ($) => ['fixed size', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'font color':
                        return _p_change_context(
                            $['value'],
                            ($) => ['font color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'font name':
                        return _p_change_context(
                            $['value'],
                            ($) => ['font name', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'font size':
                        return _p_change_context(
                            $['value'],
                            ($) => ['font size', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'group':
                        return _p_change_context(
                            $['value'],
                            ($) => ['group', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'height':
                        return _p_change_context(
                            $['value'],
                            ($) => ['height', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'image':
                        return _p_change_context(
                            $['value'],
                            ($) => ['image', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'label':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'labelloc':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelloc', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Node_Attributes.L.labelloc => {
                                        switch ($t) {
                                            case 'top':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['top', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'center':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['center', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'bottom':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['bottom', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'layers':
                        return _p_change_context(
                            $['value'],
                            ($) => ['layers', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'margin':
                        return _p_change_context(
                            $['value'],
                            ($) => ['margin', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'nojustify':
                        return _p_change_context(
                            $['value'],
                            ($) => ['nojustify', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'orientation':
                        return _p_change_context(
                            $['value'],
                            ($) => ['orientation', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'pen width':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pen width', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'peripheries':
                        return _p_change_context(
                            $['value'],
                            ($) => ['peripheries', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'pos':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pos', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'rects':
                        return _p_change_context(
                            $['value'],
                            ($) => ['rects', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'regular':
                        return _p_change_context(
                            $['value'],
                            ($) => ['regular', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'root':
                        return _p_change_context(
                            $['value'],
                            ($) => ['root', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'shape':
                        return _p_change_context(
                            $['value'],
                            ($) => ['shape', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'showboxes':
                        return _p_change_context(
                            $['value'],
                            ($) => ['showboxes', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'sides':
                        return _p_change_context(
                            $['value'],
                            ($) => ['sides', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'skew':
                        return _p_change_context(
                            $['value'],
                            ($) => ['skew', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'style':
                        return _p_change_context(
                            $['value'],
                            ($) => ['style', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'target':
                        return _p_change_context(
                            $['value'],
                            ($) => ['target', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'width':
                        return _p_change_context(
                            $['value'],
                            ($) => ['width', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'xlabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'xlp':
                        return _p_change_context(
                            $['value'],
                            ($) => ['xlp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    ),
)

export const Edge_Attributes: t_signatures.Edge_Attributes = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Edge_Attributes.L => {
                switch ($t) {
                    case 'arrowhead':
                        return _p_change_context(
                            $['value'],
                            ($) => ['arrowhead', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'arrowsize':
                        return _p_change_context(
                            $['value'],
                            ($) => ['arrowsize', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'arrowtail':
                        return _p_change_context(
                            $['value'],
                            ($) => ['arrowtail', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'bgcolor':
                        return _p_change_context(
                            $['value'],
                            ($) => ['bgcolor', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'color':
                        return _p_change_context(
                            $['value'],
                            ($) => ['color', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'colorscheme':
                        return _p_change_context(
                            $['value'],
                            ($) => ['colorscheme', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'comment':
                        return _p_change_context(
                            $['value'],
                            ($) => ['comment', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'constraint':
                        return _p_change_context(
                            $['value'],
                            ($) => ['constraint', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'decorate':
                        return _p_change_context(
                            $['value'],
                            ($) => ['decorate', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'dir':
                        return _p_change_context(
                            $['value'],
                            ($) => ['dir', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Edge_Attributes.L.dir => {
                                        switch ($t) {
                                            case 'forward':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['forward', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'back':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['back', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'both':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['both', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'none':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        )
                    case 'edge url':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edge url', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'edge lp':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edge lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'edge target':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edge target', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'edge tooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edge tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'head lp':
                        return _p_change_context(
                            $['value'],
                            ($) => ['head lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'headclip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headclip', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'headlabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'headport':
                        return _p_change_context(
                            $['value'],
                            ($) => ['headport', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'height':
                        return _p_change_context(
                            $['value'],
                            ($) => ['height', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'id':
                        return _p_change_context(
                            $['value'],
                            ($) => ['id', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'label':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'label distance':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label distance', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'label angle':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label angle', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'label float':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label float', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'labelfloat':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelfloat', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'labelhref':
                        return _p_change_context(
                            $['value'],
                            ($) => ['labelhref', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'label lp':
                        return _p_change_context(
                            $['value'],
                            ($) => ['label lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'layer':
                        return _p_change_context(
                            $['value'],
                            ($) => ['layer', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'len':
                        return _p_change_context(
                            $['value'],
                            ($) => ['len', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'lhead':
                        return _p_change_context(
                            $['value'],
                            ($) => ['lhead', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'lp':
                        return _p_change_context(
                            $['value'],
                            ($) => ['lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'ltail':
                        return _p_change_context(
                            $['value'],
                            ($) => ['ltail', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'minlen':
                        return _p_change_context(
                            $['value'],
                            ($) => ['minlen', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'pen width':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pen width', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'pos':
                        return _p_change_context(
                            $['value'],
                            ($) => ['pos', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'same head':
                        return _p_change_context(
                            $['value'],
                            ($) => ['same head', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'same tail':
                        return _p_change_context(
                            $['value'],
                            ($) => ['same tail', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'showboxes':
                        return _p_change_context(
                            $['value'],
                            ($) => ['showboxes', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'style':
                        return _p_change_context(
                            $['value'],
                            ($) => ['style', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tail lp':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tail lp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tailclip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailclip', v_deserialize_boolean.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null],
                                ),
                            )],
                        )
                    case 'taillabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['taillabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tailport':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tailport', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'tooltip':
                        return _p_change_context(
                            $['value'],
                            ($) => ['tooltip', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'weight':
                        return _p_change_context(
                            $['value'],
                            ($) => ['weight', v_deserialize_number.deserialize(
                                _p_list_from_text(
                                    v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                    ($) => $,
                                ),
                                ($) => abort(
                                    ['not a valid number', null],
                                ),
                            )],
                        )
                    case 'xlabel':
                        return _p_change_context(
                            $['value'],
                            ($) => ['xlabel', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    case 'xlp':
                        return _p_change_context(
                            $['value'],
                            ($) => ['xlp', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        )
                    default:
                        return abort(
                            ['unknown option', $['option']['value']],
                        )
                }
            },
        ),
    ),
)

export const Attribute_Value: t_signatures.Attribute_Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Attribute_Value => {
            switch ($t) {
                case 'number':
                    return _p_change_context(
                        $['value'],
                        ($) => ['number', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null],
                            ),
                        )],
                    )
                case 'string':
                    return _p_change_context(
                        $['value'],
                        ($) => ['string', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null],
                            ),
                        )],
                    )
                case 'html string':
                    return _p_change_context(
                        $['value'],
                        ($) => ['html string', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null],
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)
