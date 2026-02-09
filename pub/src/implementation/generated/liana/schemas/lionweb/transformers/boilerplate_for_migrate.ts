
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lionweb/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/lionweb/data"

export const SerializationChunk: t_signatures.SerializationChunk = ($) => ({
    'serializationFormatVersion': _p_change_context(
        $['serializationFormatVersion'],
        ($) => $,
    ),
    'languages': _p_change_context(
        $['languages'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => ({
                'key': _p_change_context(
                    $['key'],
                    ($) => $,
                ),
                'version': _p_change_context(
                    $['version'],
                    ($) => $,
                ),
            }),
        ),
    ),
    'nodes': _p_change_context(
        $['nodes'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => ({
                'id': _p_change_context(
                    $['id'],
                    ($) => $,
                ),
                'parent': _p_change_context(
                    $['parent'],
                    ($) => _p.optional.from.optional(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
                'annotations': _p_change_context(
                    $['annotations'],
                    ($) => _p.list.from.list(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
                'classifier': _p_change_context(
                    $['classifier'],
                    ($) => MetaPointer(
                        $,
                    ),
                ),
                'containments': _p_change_context(
                    $['containments'],
                    ($) => _p.list.from.list(
                        $,
                    ).map(
                        ($) => ({
                            'containment': _p_change_context(
                                $['containment'],
                                ($) => MetaPointer(
                                    $,
                                ),
                            ),
                            'children': _p_change_context(
                                $['children'],
                                ($) => _p.list.from.list(
                                    $,
                                ).map(
                                    ($) => $,
                                ),
                            ),
                        }),
                    ),
                ),
                'properties': _p_change_context(
                    $['properties'],
                    ($) => _p.list.from.list(
                        $,
                    ).map(
                        ($) => ({
                            'value': _p_change_context(
                                $['value'],
                                ($) => $,
                            ),
                            'property': _p_change_context(
                                $['property'],
                                ($) => MetaPointer(
                                    $,
                                ),
                            ),
                        }),
                    ),
                ),
                'references': _p_change_context(
                    $['references'],
                    ($) => _p.list.from.list(
                        $,
                    ).map(
                        ($) => ({
                            'targets': _p_change_context(
                                $['targets'],
                                ($) => _p.list.from.list(
                                    $,
                                ).map(
                                    ($) => ({
                                        'reference': _p_change_context(
                                            $['reference'],
                                            ($) => $,
                                        ),
                                        'resolveInfo': _p_change_context(
                                            $['resolveInfo'],
                                            ($) => $,
                                        ),
                                    }),
                                ),
                            ),
                            'reference': _p_change_context(
                                $['reference'],
                                ($) => MetaPointer(
                                    $,
                                ),
                            ),
                        }),
                    ),
                ),
            }),
        ),
    ),
})

export const MetaPointer: t_signatures.MetaPointer = ($) => ({
    'language': _p_change_context(
        $['language'],
        ($) => $,
    ),
    'version': _p_change_context(
        $['version'],
        ($) => $,
    ),
    'key': _p_change_context(
        $['key'],
        ($) => $,
    ),
})

export const SerializationChunks: t_signatures.SerializationChunks = ($) => _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => SerializationChunk(
        $,
    ),
)
