
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/pareto_documentation/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Graphviz_Directory: t_signatures.Graphviz_Directory = ($) => v_serialize.Document(
    v_marshall.Graphviz_Directory(
        $,
    ),
)
