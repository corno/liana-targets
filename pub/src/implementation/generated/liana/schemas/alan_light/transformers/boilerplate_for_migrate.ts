
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/alan_light/data"

export const Identifier: t_signatures.Identifier = ($) => $

export const Path: t_signatures.Path = ($) => ({
    'up steps': _p_change_context(
        $['up steps'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => null,
        ),
    ),
    'context': _p_change_context(
        $['context'],
        ($) => ({
            'sibling': _p_change_context(
                $['sibling'],
                ($) => null,
            ),
            'state constraint': _p_change_context(
                $['state constraint'],
                ($) => ({
                    'name': _p_change_context(
                        $['name'],
                        ($) => Identifier(
                            $,
                        ),
                    ),
                }),
            ),
        }),
    ),
    'selection steps': _p_change_context(
        $['selection steps'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => ({
                'group': _p_change_context(
                    $['group'],
                    ($) => ({
                        'name': _p_change_context(
                            $['name'],
                            ($) => Identifier(
                                $,
                            ),
                        ),
                    }),
                ),
                'state constraint': _p_change_context(
                    $['state constraint'],
                    ($) => ({
                        'name': _p_change_context(
                            $['name'],
                            ($) => Identifier(
                                $,
                            ),
                        ),
                    }),
                ),
                'reference': _p_change_context(
                    $['reference'],
                    ($) => ({
                        'name': _p_change_context(
                            $['name'],
                            ($) => Identifier(
                                $,
                            ),
                        ),
                    }),
                ),
            }),
        ),
    ),
})

export const Node: t_signatures.Node = ($) => ({
    'properties': _p_change_context(
        $['properties'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'type': _p_change_context(
                    $['type'],
                    ($) => _p.decide.state(
                        $,
                        ($): t_out.Node.properties.D.type_ => {
                            switch ($[0]) {
                                case 'collection':
                                    return _p.ss(
                                        $,
                                        ($) => ['collection', {
                                            'node': _p_change_context(
                                                $['node'],
                                                ($) => Node(
                                                    $,
                                                ),
                                            ),
                                            'key': _p_change_context(
                                                $['key'],
                                                ($) => Identifier(
                                                    $,
                                                ),
                                            ),
                                        }],
                                    )
                                case 'group':
                                    return _p.ss(
                                        $,
                                        ($) => ['group', {
                                            'node': _p_change_context(
                                                $['node'],
                                                ($) => Node(
                                                    $,
                                                ),
                                            ),
                                        }],
                                    )
                                case 'text':
                                    return _p.ss(
                                        $,
                                        ($) => ['text', {
                                            'constraint': _p_change_context(
                                                $['constraint'],
                                                ($) => _p.optional.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => ({
                                                        'path': _p_change_context(
                                                            $['path'],
                                                            ($) => Path(
                                                                $,
                                                            ),
                                                        ),
                                                        'dictionary': _p_change_context(
                                                            $['dictionary'],
                                                            ($) => Identifier(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        }],
                                    )
                                case 'state group':
                                    return _p.ss(
                                        $,
                                        ($) => ['state group', {
                                            'states': _p_change_context(
                                                $['states'],
                                                ($) => _p.dictionary.from.dictionary(
                                                    $,
                                                ).map(
                                                    ($, id) => ({
                                                        'constraints': _p_change_context(
                                                            $['constraints'],
                                                            ($) => _p.dictionary.from.dictionary(
                                                                $,
                                                            ).map(
                                                                ($, id) => ({
                                                                    'path': _p_change_context(
                                                                        $['path'],
                                                                        ($) => Path(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        ),
                                                        'node': _p_change_context(
                                                            $['node'],
                                                            ($) => Node(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        }],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    ),
                ),
            }),
        ),
    ),
})

export const Root: t_signatures.Root = ($) => ({
    'numerical types': _p_change_context(
        $['numerical types'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => null,
        ),
    ),
    'root': _p_change_context(
        $['root'],
        ($) => Node(
            $,
        ),
    ),
})
