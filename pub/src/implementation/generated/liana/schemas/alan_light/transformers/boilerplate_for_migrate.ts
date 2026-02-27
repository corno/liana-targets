
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/alan_light/signatures/transformers/boilerplate_for_migrate"

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
        ($) => _p.decide.state(
            $,
            ($): t_out.Path.context => {
                switch ($[0]) {
                    case 'sibling':
                        return _p.ss(
                            $,
                            ($) => ['sibling', null],
                        )
                    case 'state constraint':
                        return _p.ss(
                            $,
                            ($) => ['state constraint', {
                                'name': _p_change_context(
                                    $['name'],
                                    ($) => Identifier(
                                        $,
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
    'selection steps': _p_change_context(
        $['selection steps'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => _p.decide.state(
                $,
                ($): t_out.Path.selection_steps.L => {
                    switch ($[0]) {
                        case 'group':
                            return _p.ss(
                                $,
                                ($) => ['group', {
                                    'name': _p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        case 'state constraint':
                            return _p.ss(
                                $,
                                ($) => ['state constraint', {
                                    'name': _p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        case 'reference':
                            return _p.ss(
                                $,
                                ($) => ['reference', {
                                    'name': _p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
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
                                            'options': _p_change_context(
                                                $['options'],
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
