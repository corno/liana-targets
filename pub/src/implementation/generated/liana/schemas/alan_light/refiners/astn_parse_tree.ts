
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/alan_light/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Identifier: t_signatures.Identifier = ($, abort) => v_unmarshalled_from_parse_tree.Text(
    $,
    ($) => abort(
        $,
    ),
)

export const Path: t_signatures.Path = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "up steps": null,
                    "context": null,
                    "selection steps": null,
                },
            ),
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
                },
            )
            return {
                'up steps': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'up steps',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
                            },
                        )['items'],
                    ).map(
                        ($) => _p_change_context(
                            $['value'],
                            ($) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {},
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return null
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'context': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'context',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['token']['value'],
                            ($t): t_out.Path.context => {
                                switch ($t) {
                                    case 'sibling':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['sibling', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {},
                                                        ),
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'document resource identifier': "dummy dri",
                                                            },
                                                        )
                                                        return null
                                                    },
                                                ),
                                            )],
                                        )
                                    case 'state constraint':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['state constraint', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "name": null,
                                                            },
                                                        ),
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'document resource identifier': "dummy dri",
                                                            },
                                                        )
                                                        return {
                                                            'name': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'name',
                                                                        'document resource identifier': "dummy dri",
                                                                    },
                                                                ),
                                                                ($) => Identifier(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }
                                                    },
                                                ),
                                            )],
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'selection steps': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'selection steps',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
                            },
                        )['items'],
                    ).map(
                        ($) => _p_change_context(
                            $['value'],
                            ($) => _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Path.selection_steps.L => {
                                        switch ($t) {
                                            case 'group':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['group', _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': _p.dictionary.literal(
                                                                    {
                                                                        "name": null,
                                                                    },
                                                                ),
                                                                'document resource identifier': "dummy dri",
                                                            },
                                                        ),
                                                        ($) => _p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'document resource identifier': "dummy dri",
                                                                    },
                                                                )
                                                                return {
                                                                    'name': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'name',
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => Identifier(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }
                                                            },
                                                        ),
                                                    )],
                                                )
                                            case 'state constraint':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['state constraint', _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': _p.dictionary.literal(
                                                                    {
                                                                        "name": null,
                                                                    },
                                                                ),
                                                                'document resource identifier': "dummy dri",
                                                            },
                                                        ),
                                                        ($) => _p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'document resource identifier': "dummy dri",
                                                                    },
                                                                )
                                                                return {
                                                                    'name': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'name',
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => Identifier(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }
                                                            },
                                                        ),
                                                    )],
                                                )
                                            case 'reference':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['reference', _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': _p.dictionary.literal(
                                                                    {
                                                                        "name": null,
                                                                    },
                                                                ),
                                                                'document resource identifier': "dummy dri",
                                                            },
                                                        ),
                                                        ($) => _p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'document resource identifier': "dummy dri",
                                                                    },
                                                                )
                                                                return {
                                                                    'name': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'name',
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => Identifier(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }
                                                            },
                                                        ),
                                                    )],
                                                )
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'document resource identifier': "dummy dri",
                                                            },
                                                        ),
                                                    }],
                                                )
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Node: t_signatures.Node = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "properties": null,
                },
            ),
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
                },
            )
            return {
                'properties': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'properties',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "type": null,
                                            },
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return {
                                            'type': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Node.properties.D.type_ => {
                                                            switch ($t) {
                                                                case 'collection':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['collection', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {
                                                                                            "node": null,
                                                                                            "key": null,
                                                                                        },
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'node': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'node',
                                                                                                    'document resource identifier': "dummy dri",
                                                                                                },
                                                                                            ),
                                                                                            ($) => Node(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'key': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'key',
                                                                                                    'document resource identifier': "dummy dri",
                                                                                                },
                                                                                            ),
                                                                                            ($) => Identifier(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'group':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['group', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {
                                                                                            "node": null,
                                                                                        },
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'node': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'node',
                                                                                                    'document resource identifier': "dummy dri",
                                                                                                },
                                                                                            ),
                                                                                            ($) => Node(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'text':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['text', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {
                                                                                            "constraint": null,
                                                                                        },
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'constraint': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'constraint',
                                                                                                    'document resource identifier': "dummy dri",
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p.optional.from.optional(
                                                                                                v_unmarshalled_from_parse_tree.Optional(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )['optional'],
                                                                                            ).map(
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                {
                                                                                                                    "path": null,
                                                                                                                    "dictionary": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'document resource identifier': "dummy dri",
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                },
                                                                                                            )
                                                                                                            return {
                                                                                                                'path': _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'path',
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => Path(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'dictionary': _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'dictionary',
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => Identifier(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'state group':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['state group', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {
                                                                                            "states": null,
                                                                                        },
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'states': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'states',
                                                                                                    'document resource identifier': "dummy dri",
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                                    $['entries'],
                                                                                                ).map(
                                                                                                    ($, id) => _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "constraints": null,
                                                                                                                        "node": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'constraints': _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'constraints',
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p.dictionary.from.dictionary(
                                                                                                                                $['entries'],
                                                                                                                            ).map(
                                                                                                                                ($, id) => _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "path": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'path': _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'path',
                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => Path(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'node': _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'node',
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => Node(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Root: t_signatures.Root = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "numerical types": null,
                    "root": null,
                },
            ),
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
                },
            )
            return {
                'numerical types': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'numerical types',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {},
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return null
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'root': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'root',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => Node(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)
