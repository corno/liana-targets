
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/pareto_documentation/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree"

export const Graphviz_Directory: t_signatures.Graphviz_Directory = ($, abort, $p) => v_unmarshall.Graphviz_Directory(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)
