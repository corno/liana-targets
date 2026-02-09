
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Identifier: t_signatures.Identifier = ($) => v_serialize.Document(
    v_marshall.Identifier(
        $,
    ),
)

export const Path: t_signatures.Path = ($) => v_serialize.Document(
    v_marshall.Path(
        $,
    ),
)

export const Node: t_signatures.Node = ($) => v_serialize.Document(
    v_marshall.Node(
        $,
    ),
)

export const Root: t_signatures.Root = ($) => v_serialize.Document(
    v_marshall.Root(
        $,
    ),
)
