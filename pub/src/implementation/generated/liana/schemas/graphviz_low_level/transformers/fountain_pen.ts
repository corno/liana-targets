
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz_low_level/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Graph: t_signatures.Graph = ($) => v_serialize.Document(
    v_marshall.Graph(
        $,
    ),
)

export const Statement_List: t_signatures.Statement_List = ($) => v_serialize.Document(
    v_marshall.Statement_List(
        $,
    ),
)

export const Attribute_List: t_signatures.Attribute_List = ($) => v_serialize.Document(
    v_marshall.Attribute_List(
        $,
    ),
)

export const Node_ID: t_signatures.Node_ID = ($) => v_serialize.Document(
    v_marshall.Node_ID(
        $,
    ),
)

export const ID: t_signatures.ID = ($) => v_serialize.Document(
    v_marshall.ID(
        $,
    ),
)

export const Subgraph: t_signatures.Subgraph = ($) => v_serialize.Document(
    v_marshall.Subgraph(
        $,
    ),
)
