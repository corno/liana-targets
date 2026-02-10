
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lionweb/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/lionweb/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const SerializationChunk: t_signatures.SerializationChunk = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'serializationFormatVersion': _p_change_context(
            $.__get_entry_deprecated(
                'serializationFormatVersion',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "serializationFormatVersion"],
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
        'languages': _p_change_context(
            $.__get_entry_deprecated(
                'languages',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "languages"],
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
                        'key': _p_change_context(
                            $.__get_entry_deprecated(
                                'key',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "key"],
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
                        'version': _p_change_context(
                            $.__get_entry_deprecated(
                                'version',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "version"],
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
                    }),
                ),
            ),
        ),
        'nodes': _p_change_context(
            $.__get_entry_deprecated(
                'nodes',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "nodes"],
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
                        'id': _p_change_context(
                            $.__get_entry_deprecated(
                                'id',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "id"],
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
                        'parent': _p_change_context(
                            $.__get_entry_deprecated(
                                'parent',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "parent"],
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
                        'annotations': _p_change_context(
                            $.__get_entry_deprecated(
                                'annotations',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "annotations"],
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
                        'classifier': _p_change_context(
                            $.__get_entry_deprecated(
                                'classifier',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "classifier"],
                                    ),
                                },
                            ),
                            ($) => MetaPointer(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'containments': _p_change_context(
                            $.__get_entry_deprecated(
                                'containments',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "containments"],
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
                                        'containment': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'containment',
                                                {
                                                    no_such_entry: ($) => abort(
                                                        ['no such entry', "containment"],
                                                    ),
                                                },
                                            ),
                                            ($) => MetaPointer(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'children': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'children',
                                                {
                                                    no_such_entry: ($) => abort(
                                                        ['no such entry', "children"],
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
                                    }),
                                ),
                            ),
                        ),
                        'properties': _p_change_context(
                            $.__get_entry_deprecated(
                                'properties',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "properties"],
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
                                        'value': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'value',
                                                {
                                                    no_such_entry: ($) => abort(
                                                        ['no such entry', "value"],
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
                                        'property': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'property',
                                                {
                                                    no_such_entry: ($) => abort(
                                                        ['no such entry', "property"],
                                                    ),
                                                },
                                            ),
                                            ($) => MetaPointer(
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
                        'references': _p_change_context(
                            $.__get_entry_deprecated(
                                'references',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "references"],
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
                                        'targets': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'targets',
                                                {
                                                    no_such_entry: ($) => abort(
                                                        ['no such entry', "targets"],
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
                                                        'reference': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'reference',
                                                                {
                                                                    no_such_entry: ($) => abort(
                                                                        ['no such entry', "reference"],
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
                                                        'resolveInfo': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'resolveInfo',
                                                                {
                                                                    no_such_entry: ($) => abort(
                                                                        ['no such entry', "resolveInfo"],
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
                                                    }),
                                                ),
                                            ),
                                        ),
                                        'reference': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'reference',
                                                {
                                                    no_such_entry: ($) => abort(
                                                        ['no such entry', "reference"],
                                                    ),
                                                },
                                            ),
                                            ($) => MetaPointer(
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
                ),
            ),
        ),
    }),
)

export const MetaPointer: t_signatures.MetaPointer = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'language': _p_change_context(
            $.__get_entry_deprecated(
                'language',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "language"],
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
        'version': _p_change_context(
            $.__get_entry_deprecated(
                'version',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "version"],
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
        'key': _p_change_context(
            $.__get_entry_deprecated(
                'key',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "key"],
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
    }),
)

export const SerializationChunks: t_signatures.SerializationChunks = ($, abort) => _p.dictionary.from.dictionary(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null],
        ),
    ),
).map(
    ($, id) => SerializationChunk(
        $,
        ($) => abort(
            $,
        ),
    ),
)
