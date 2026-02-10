
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz_low_level/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/graphviz_low_level/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const Graph: t_signatures.Graph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'strict': _p_change_context(
            $.__get_entry_deprecated(
                'strict',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "strict"],
                    ),
                },
            ),
            ($) => v_deserialize_boolean.deserialize(
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
                            case 'digraph':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['digraph', v_unmarshalled_from_parse_tree.Nothing(
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
                ($) => ID(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
        ),
        'statements': _p_change_context(
            $.__get_entry_deprecated(
                'statements',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "statements"],
                    ),
                },
            ),
            ($) => Statement_List(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Statement_List: t_signatures.Statement_List = ($, abort) => _p.list.from.list(
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
            ($t): t_out.Statement_List.L => {
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
                                    'node': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'node',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "node"],
                                                ),
                                            },
                                        ),
                                        ($) => Node_ID(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'attribute list': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'attribute list',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "attribute list"],
                                                ),
                                            },
                                        ),
                                        ($) => Attribute_List(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'edge':
                        return _p_change_context(
                            $['value'],
                            ($) => ['edge', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'left': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'left',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "left"],
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
                                                ($t): t_out.Statement_List.L.edge.left => {
                                                    switch ($t) {
                                                        case 'node':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['node', Node_ID(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            )
                                                        case 'subgraph':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['subgraph', Subgraph(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
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
                                    'right': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'right',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "right"],
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
                                                v_unmarshalled_from_parse_tree.State(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a state', null],
                                                    ),
                                                ),
                                                ($) => _p.decide.text(
                                                    $['option']['value'],
                                                    ($t): t_out.Statement_List.L.edge.right.L => {
                                                        switch ($t) {
                                                            case 'node':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['node', Node_ID(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'subgraph':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['subgraph', Subgraph(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
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
                                        ($) => Attribute_List(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'attribute list':
                        return _p_change_context(
                            $['value'],
                            ($) => ['attribute list', _p_change_context(
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
                                                ($t): t_out.Statement_List.L.attribute_list.type_ => {
                                                    switch ($t) {
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
                                                        case 'edge':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['edge', v_unmarshalled_from_parse_tree.Nothing(
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
                                    'attributes': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'attributes',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "attributes"],
                                                ),
                                            },
                                        ),
                                        ($) => Attribute_List(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'attribute assignment':
                        return _p_change_context(
                            $['value'],
                            ($) => ['attribute assignment', _p_change_context(
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
                                        ($) => ID(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'value': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'value',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "value"],
                                                ),
                                            },
                                        ),
                                        ($) => ID(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        )
                    case 'subgraph':
                        return _p_change_context(
                            $['value'],
                            ($) => ['subgraph', Subgraph(
                                $,
                                ($) => abort(
                                    $,
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

export const Attribute_List: t_signatures.Attribute_List = ($, abort) => _p.list.from.list(
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
            'name': _p_change_context(
                $.__get_entry_deprecated(
                    'name',
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "name"],
                        ),
                    },
                ),
                ($) => ID(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
            'value': _p_change_context(
                $.__get_entry_deprecated(
                    'value',
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "value"],
                        ),
                    },
                ),
                ($) => ID(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
        }),
    ),
)

export const Node_ID: t_signatures.Node_ID = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'id': _p_change_context(
            $.__get_entry_deprecated(
                'id',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "id"],
                    ),
                },
            ),
            ($) => ID(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'port': _p_change_context(
            $.__get_entry_deprecated(
                'port',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "port"],
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
                            ($) => ID(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'compass point': _p_change_context(
                            $.__get_entry_deprecated(
                                'compass point',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "compass point"],
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
                                ($) => ID(
                                    $,
                                    ($) => abort(
                                        $,
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

export const ID: t_signatures.ID = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.ID => {
            switch ($t) {
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
                case 'html':
                    return _p_change_context(
                        $['value'],
                        ($) => ['html', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null],
                            ),
                        )],
                    )
                case 'number':
                    return _p_change_context(
                        $['value'],
                        ($) => ['number', v_deserialize_number.deserialize(
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
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Subgraph: t_signatures.Subgraph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'subgraph': _p_change_context(
            $.__get_entry_deprecated(
                'subgraph',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "subgraph"],
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
                ($) => _p.optional.from.optional(
                    v_unmarshalled_from_parse_tree.Optional(
                        $,
                        ($) => abort(
                            ['expected an optional', null],
                        ),
                    ),
                ).map(
                    ($) => ID(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            ),
        ),
        'statements': _p_change_context(
            $.__get_entry_deprecated(
                'statements',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "statements"],
                    ),
                },
            ),
            ($) => Statement_List(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)
