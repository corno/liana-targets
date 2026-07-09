
import * as p_ from 'pareto-core/implementation/refiner'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/signatures/refiners/list_of_characters.js"

import * as v_deserialize from "astn-core/implementation/refiners/parse_tree/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const Identifier: t_signatures.Identifier = ($, abort, $p) => v_unmarshall.Identifier(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Path: t_signatures.Path = ($, abort, $p) => v_unmarshall.Path(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Node: t_signatures.Node = ($, abort, $p) => v_unmarshall.Node(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Root: t_signatures.Root = ($, abort, $p) => v_unmarshall.Root(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)
