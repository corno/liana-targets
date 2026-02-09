
import * as d_in from "../../../../../../../interface/generated/liana/schemas/lionweb/data"
import * as d_out from "pareto-json/dist/interface/generated/liana/schemas/json/data"

import * as sh from "pareto-json/dist/shorthands/json"


export const MetaPointer = ($: d_in.MetaPointer): d_out.Value => sh.v.object({
    "key": sh.v.string($.key),
    "version": sh.v.string($.version),
    "language": sh.v.string($.language),
})

export const SerializationChunks = ($: d_in.SerializationChunks): d_out.Document => ['object', ['dictionary', $.__d_map(($) => SerializationChunk($))]]

export const SerializationChunk = ($: d_in.SerializationChunk): d_out.Document => sh.v.object({
    "serializationFormatVersion": sh.v.string($.serializationFormatVersion),
    "languages": sh.v.array($.languages.__l_map(($) => sh.v.object({
        "key": sh.v.string($.key),
        "version": sh.v.string($.version),
    }))),
    "nodes": sh.v.array($.nodes.__l_map(($) => sh.v.object({
        "id": sh.v.string($.id),
        "parent": $.parent.__decide(
            ($) => sh.v.string($),
            () => sh.v.null_()
        ),
        "annotations": sh.v.array($.annotations.__l_map(($) => sh.v.string($))),
        "classifier": MetaPointer($['classifier']),
        "containments": sh.v.array($.containments.__l_map(($) => sh.v.object({
            "containment": MetaPointer($.containment),
            "children": sh.v.array($.children.__l_map(($) => sh.v.string($))),
        }))),
        "properties": sh.v.array($.properties.__l_map(($) => sh.v.object({
            "value": sh.v.string($.value),
            "property": MetaPointer($.property),
        }))),
        "references": sh.v.array($.references.__l_map(($) => sh.v.object({
            "targets": sh.v.array($.targets.__l_map(($) => sh.v.object({
                "reference": sh.v.string($.reference),
                "resolveInfo": sh.v.string($.resolveInfo),
            }))),
            "reference": MetaPointer($.reference),
        }))),
    }))),
})