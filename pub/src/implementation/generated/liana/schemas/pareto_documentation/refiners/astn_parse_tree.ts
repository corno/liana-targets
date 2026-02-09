
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/pareto_documentation/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/pareto_documentation/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_graphviz from "../../graphviz_high_level/refiners/astn_parse_tree"

export const Graphviz_Directory: t_signatures.Graphviz_Directory = ($, abort) => _p.dictionary.from.dictionary(
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
            ($t): t_out.Graphviz_Directory.D => {
                switch ($t) {
                    case 'file':
                        return _p_change_context(
                            $['value'],
                            ($) => ['file', v_external_graphviz.Graph(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        )
                    case 'directory':
                        return _p_change_context(
                            $['value'],
                            ($) => ['directory', Graphviz_Directory(
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
