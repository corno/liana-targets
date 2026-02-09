
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lionweb/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const SerializationChunk: t_signatures.SerializationChunk = ($) => v_serialize.Document(
    v_marshall.SerializationChunk(
        $,
    ),
)

export const MetaPointer: t_signatures.MetaPointer = ($) => v_serialize.Document(
    v_marshall.MetaPointer(
        $,
    ),
)

export const SerializationChunks: t_signatures.SerializationChunks = ($) => v_serialize.Document(
    v_marshall.SerializationChunks(
        $,
    ),
)
