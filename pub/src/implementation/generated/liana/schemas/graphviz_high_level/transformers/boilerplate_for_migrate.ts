
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/graphviz_high_level/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/graphviz_high_level/data"

export const Graph: t_signatures.Graph = ($) => ({
    'name': _p_change_context(
        $['name'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => $,
        ),
    ),
    'tree': _p_change_context(
        $['tree'],
        ($) => Tree(
            $,
        ),
    ),
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Graph.type_ => {
                switch ($[0]) {
                    case 'undirected':
                        return _p.ss(
                            $,
                            ($) => ['undirected', {
                                'edges': _p_change_context(
                                    $['edges'],
                                    ($) => _p.list.from.list(
                                        $,
                                    ).map(
                                        ($) => ({
                                            'yin': _p_change_context(
                                                $['yin'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'yang': _p_change_context(
                                                $['yang'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'attributes': _p_change_context(
                                                $['attributes'],
                                                ($) => Edge_Attributes(
                                                    $,
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            }],
                        )
                    case 'directed':
                        return _p.ss(
                            $,
                            ($) => ['directed', {
                                'edges': _p_change_context(
                                    $['edges'],
                                    ($) => _p.list.from.list(
                                        $,
                                    ).map(
                                        ($) => ({
                                            'from': _p_change_context(
                                                $['from'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'to': _p_change_context(
                                                $['to'],
                                                ($) => End_Point_Specification(
                                                    $,
                                                ),
                                            ),
                                            'attributes': _p_change_context(
                                                $['attributes'],
                                                ($) => Edge_Attributes(
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
})

export const Tree: t_signatures.Tree = ($) => ({
    'attributes': _p_change_context(
        $['attributes'],
        ($) => Graph_Attributes(
            $,
        ),
    ),
    'elements': _p_change_context(
        $['elements'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => _p.decide.state(
                $,
                ($): t_out.Tree.elements.D => {
                    switch ($[0]) {
                        case 'node':
                            return _p.ss(
                                $,
                                ($) => ['node', {
                                    'attributes': _p_change_context(
                                        $['attributes'],
                                        ($) => Node_Attributes(
                                            $,
                                        ),
                                    ),
                                }],
                            )
                        case 'sub':
                            return _p.ss(
                                $,
                                ($) => ['sub', {
                                    'type': _p_change_context(
                                        $['type'],
                                        ($) => _p.decide.state(
                                            $,
                                            ($): t_out.Tree.elements.D.sub.type_ => {
                                                switch ($[0]) {
                                                    case 'group':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['group', null],
                                                        )
                                                    case 'cluster':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['cluster', null],
                                                        )
                                                    case 'subgraph':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['subgraph', null],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                    'tree': _p_change_context(
                                        $['tree'],
                                        ($) => Tree(
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

export const End_Point_Specification: t_signatures.End_Point_Specification = ($) => ({
    'start': _p_change_context(
        $['start'],
        ($) => $,
    ),
    'tail': _p_change_context(
        $['tail'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => $,
        ),
    ),
    'port data': _p_change_context(
        $['port data'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => ({
                'port': _p_change_context(
                    $['port'],
                    ($) => $,
                ),
                'compass direction': _p_change_context(
                    $['compass direction'],
                    ($) => _p.optional.from.optional(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
            }),
        ),
    ),
})

export const Graph_Attributes: t_signatures.Graph_Attributes = ($) => _p.list.from.list(
    $,
).map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Graph_Attributes.L => {
            switch ($[0]) {
                case 'concentrate':
                    return _p.ss(
                        $,
                        ($) => ['concentrate', $],
                    )
                case 'charset':
                    return _p.ss(
                        $,
                        ($) => ['charset', $],
                    )
                case 'clusterrank':
                    return _p.ss(
                        $,
                        ($) => ['clusterrank', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.clusterrank => {
                                switch ($[0]) {
                                    case 'none':
                                        return _p.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'local':
                                        return _p.ss(
                                            $,
                                            ($) => ['local', null],
                                        )
                                    case 'global':
                                        return _p.ss(
                                            $,
                                            ($) => ['global', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'color':
                    return _p.ss(
                        $,
                        ($) => ['color', $],
                    )
                case 'color scheme':
                    return _p.ss(
                        $,
                        ($) => ['color scheme', $],
                    )
                case 'comment':
                    return _p.ss(
                        $,
                        ($) => ['comment', $],
                    )
                case 'compound':
                    return _p.ss(
                        $,
                        ($) => ['compound', $],
                    )
                case 'dpi':
                    return _p.ss(
                        $,
                        ($) => ['dpi', $],
                    )
                case 'font color':
                    return _p.ss(
                        $,
                        ($) => ['font color', $],
                    )
                case 'font name':
                    return _p.ss(
                        $,
                        ($) => ['font name', $],
                    )
                case 'font path':
                    return _p.ss(
                        $,
                        ($) => ['font path', $],
                    )
                case 'font size':
                    return _p.ss(
                        $,
                        ($) => ['font size', $],
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ['label', $],
                    )
                case 'label distance':
                    return _p.ss(
                        $,
                        ($) => ['label distance', $],
                    )
                case 'label scheme':
                    return _p.ss(
                        $,
                        ($) => ['label scheme', $],
                    )
                case 'label location':
                    return _p.ss(
                        $,
                        ($) => ['label location', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.label_location => {
                                switch ($[0]) {
                                    case 'top':
                                        return _p.ss(
                                            $,
                                            ($) => ['top', null],
                                        )
                                    case 'bottom':
                                        return _p.ss(
                                            $,
                                            ($) => ['bottom', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'landscape':
                    return _p.ss(
                        $,
                        ($) => ['landscape', $],
                    )
                case 'layer list':
                    return _p.ss(
                        $,
                        ($) => ['layer list', $],
                    )
                case 'layer separator':
                    return _p.ss(
                        $,
                        ($) => ['layer separator', $],
                    )
                case 'layers':
                    return _p.ss(
                        $,
                        ($) => ['layers', $],
                    )
                case 'margin':
                    return _p.ss(
                        $,
                        ($) => ['margin', $],
                    )
                case 'max iteration':
                    return _p.ss(
                        $,
                        ($) => ['max iteration', $],
                    )
                case 'mclimit':
                    return _p.ss(
                        $,
                        ($) => ['mclimit', $],
                    )
                case 'mindist':
                    return _p.ss(
                        $,
                        ($) => ['mindist', $],
                    )
                case 'mode':
                    return _p.ss(
                        $,
                        ($) => ['mode', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.mode => {
                                switch ($[0]) {
                                    case 'no output':
                                        return _p.ss(
                                            $,
                                            ($) => ['no output', null],
                                        )
                                    case 'out':
                                        return _p.ss(
                                            $,
                                            ($) => ['out', null],
                                        )
                                    case 'in':
                                        return _p.ss(
                                            $,
                                            ($) => ['in', null],
                                        )
                                    case 'in out':
                                        return _p.ss(
                                            $,
                                            ($) => ['in out', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'newrank':
                    return _p.ss(
                        $,
                        ($) => ['newrank', $],
                    )
                case 'no loop':
                    return _p.ss(
                        $,
                        ($) => ['no loop', $],
                    )
                case 'normalize':
                    return _p.ss(
                        $,
                        ($) => ['normalize', $],
                    )
                case 'ordering':
                    return _p.ss(
                        $,
                        ($) => ['ordering', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.ordering => {
                                switch ($[0]) {
                                    case 'out':
                                        return _p.ss(
                                            $,
                                            ($) => ['out', null],
                                        )
                                    case 'in':
                                        return _p.ss(
                                            $,
                                            ($) => ['in', null],
                                        )
                                    case 'in out':
                                        return _p.ss(
                                            $,
                                            ($) => ['in out', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'orientation':
                    return _p.ss(
                        $,
                        ($) => ['orientation', $],
                    )
                case 'output order':
                    return _p.ss(
                        $,
                        ($) => ['output order', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.output_order => {
                                switch ($[0]) {
                                    case 'breadth first':
                                        return _p.ss(
                                            $,
                                            ($) => ['breadth first', null],
                                        )
                                    case 'dfs':
                                        return _p.ss(
                                            $,
                                            ($) => ['dfs', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'overlap':
                    return _p.ss(
                        $,
                        ($) => ['overlap', $],
                    )
                case 'output mode':
                    return _p.ss(
                        $,
                        ($) => ['output mode', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.output_mode => {
                                switch ($[0]) {
                                    case 'edges first':
                                        return _p.ss(
                                            $,
                                            ($) => ['edges first', null],
                                        )
                                    case 'nodes first':
                                        return _p.ss(
                                            $,
                                            ($) => ['nodes first', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'pack':
                    return _p.ss(
                        $,
                        ($) => ['pack', $],
                    )
                case 'pack mode':
                    return _p.ss(
                        $,
                        ($) => ['pack mode', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.pack_mode => {
                                switch ($[0]) {
                                    case 'node':
                                        return _p.ss(
                                            $,
                                            ($) => ['node', null],
                                        )
                                    case 'graph':
                                        return _p.ss(
                                            $,
                                            ($) => ['graph', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'pad':
                    return _p.ss(
                        $,
                        ($) => ['pad', $],
                    )
                case 'page':
                    return _p.ss(
                        $,
                        ($) => ['page', $],
                    )
                case 'quadtree':
                    return _p.ss(
                        $,
                        ($) => ['quadtree', $],
                    )
                case 'quantum':
                    return _p.ss(
                        $,
                        ($) => ['quantum', $],
                    )
                case 'rankdir':
                    return _p.ss(
                        $,
                        ($) => ['rankdir', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.rankdir => {
                                switch ($[0]) {
                                    case 'top bottom':
                                        return _p.ss(
                                            $,
                                            ($) => ['top bottom', null],
                                        )
                                    case 'bottom top':
                                        return _p.ss(
                                            $,
                                            ($) => ['bottom top', null],
                                        )
                                    case 'left right':
                                        return _p.ss(
                                            $,
                                            ($) => ['left right', null],
                                        )
                                    case 'right left':
                                        return _p.ss(
                                            $,
                                            ($) => ['right left', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'ranksep':
                    return _p.ss(
                        $,
                        ($) => ['ranksep', $],
                    )
                case 'ratio':
                    return _p.ss(
                        $,
                        ($) => ['ratio', $],
                    )
                case 'remincross':
                    return _p.ss(
                        $,
                        ($) => ['remincross', $],
                    )
                case 'rotate':
                    return _p.ss(
                        $,
                        ($) => ['rotate', $],
                    )
                case 'scale':
                    return _p.ss(
                        $,
                        ($) => ['scale', $],
                    )
                case 'searchsize':
                    return _p.ss(
                        $,
                        ($) => ['searchsize', $],
                    )
                case 'sep':
                    return _p.ss(
                        $,
                        ($) => ['sep', $],
                    )
                case 'showboxes':
                    return _p.ss(
                        $,
                        ($) => ['showboxes', $],
                    )
                case 'size':
                    return _p.ss(
                        $,
                        ($) => ['size', $],
                    )
                case 'smoothing':
                    return _p.ss(
                        $,
                        ($) => ['smoothing', _p.decide.state(
                            $,
                            ($): t_out.Graph_Attributes.L.smoothing => {
                                switch ($[0]) {
                                    case 'none':
                                        return _p.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    case 'spring':
                                        return _p.ss(
                                            $,
                                            ($) => ['spring', null],
                                        )
                                    case 'triangle':
                                        return _p.ss(
                                            $,
                                            ($) => ['triangle', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'sortv':
                    return _p.ss(
                        $,
                        ($) => ['sortv', $],
                    )
                case 'splines':
                    return _p.ss(
                        $,
                        ($) => ['splines', $],
                    )
                case 'start':
                    return _p.ss(
                        $,
                        ($) => ['start', $],
                    )
                case 'style':
                    return _p.ss(
                        $,
                        ($) => ['style', $],
                    )
                case 'stylesheet':
                    return _p.ss(
                        $,
                        ($) => ['stylesheet', $],
                    )
                case 'target':
                    return _p.ss(
                        $,
                        ($) => ['target', $],
                    )
                case 'tooltip':
                    return _p.ss(
                        $,
                        ($) => ['tooltip', $],
                    )
                case 'truecolor':
                    return _p.ss(
                        $,
                        ($) => ['truecolor', $],
                    )
                case 'viewport':
                    return _p.ss(
                        $,
                        ($) => ['viewport', $],
                    )
                case 'width':
                    return _p.ss(
                        $,
                        ($) => ['width', $],
                    )
                case 'xdotversion':
                    return _p.ss(
                        $,
                        ($) => ['xdotversion', $],
                    )
                case 'xlabel':
                    return _p.ss(
                        $,
                        ($) => ['xlabel', $],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Node_Attributes: t_signatures.Node_Attributes = ($) => _p.list.from.list(
    $,
).map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Node_Attributes.L => {
            switch ($[0]) {
                case 'color':
                    return _p.ss(
                        $,
                        ($) => ['color', $],
                    )
                case 'colorscheme':
                    return _p.ss(
                        $,
                        ($) => ['colorscheme', $],
                    )
                case 'comment':
                    return _p.ss(
                        $,
                        ($) => ['comment', $],
                    )
                case 'concentrate':
                    return _p.ss(
                        $,
                        ($) => ['concentrate', $],
                    )
                case 'fill color':
                    return _p.ss(
                        $,
                        ($) => ['fill color', $],
                    )
                case 'fixed size':
                    return _p.ss(
                        $,
                        ($) => ['fixed size', $],
                    )
                case 'font color':
                    return _p.ss(
                        $,
                        ($) => ['font color', $],
                    )
                case 'font name':
                    return _p.ss(
                        $,
                        ($) => ['font name', $],
                    )
                case 'font size':
                    return _p.ss(
                        $,
                        ($) => ['font size', $],
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', $],
                    )
                case 'height':
                    return _p.ss(
                        $,
                        ($) => ['height', $],
                    )
                case 'image':
                    return _p.ss(
                        $,
                        ($) => ['image', $],
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ['label', $],
                    )
                case 'labelloc':
                    return _p.ss(
                        $,
                        ($) => ['labelloc', _p.decide.state(
                            $,
                            ($): t_out.Node_Attributes.L.labelloc => {
                                switch ($[0]) {
                                    case 'top':
                                        return _p.ss(
                                            $,
                                            ($) => ['top', null],
                                        )
                                    case 'center':
                                        return _p.ss(
                                            $,
                                            ($) => ['center', null],
                                        )
                                    case 'bottom':
                                        return _p.ss(
                                            $,
                                            ($) => ['bottom', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'layers':
                    return _p.ss(
                        $,
                        ($) => ['layers', $],
                    )
                case 'margin':
                    return _p.ss(
                        $,
                        ($) => ['margin', $],
                    )
                case 'nojustify':
                    return _p.ss(
                        $,
                        ($) => ['nojustify', $],
                    )
                case 'orientation':
                    return _p.ss(
                        $,
                        ($) => ['orientation', $],
                    )
                case 'pen width':
                    return _p.ss(
                        $,
                        ($) => ['pen width', $],
                    )
                case 'peripheries':
                    return _p.ss(
                        $,
                        ($) => ['peripheries', $],
                    )
                case 'pos':
                    return _p.ss(
                        $,
                        ($) => ['pos', $],
                    )
                case 'rects':
                    return _p.ss(
                        $,
                        ($) => ['rects', $],
                    )
                case 'regular':
                    return _p.ss(
                        $,
                        ($) => ['regular', $],
                    )
                case 'root':
                    return _p.ss(
                        $,
                        ($) => ['root', $],
                    )
                case 'shape':
                    return _p.ss(
                        $,
                        ($) => ['shape', $],
                    )
                case 'showboxes':
                    return _p.ss(
                        $,
                        ($) => ['showboxes', $],
                    )
                case 'sides':
                    return _p.ss(
                        $,
                        ($) => ['sides', $],
                    )
                case 'skew':
                    return _p.ss(
                        $,
                        ($) => ['skew', $],
                    )
                case 'style':
                    return _p.ss(
                        $,
                        ($) => ['style', $],
                    )
                case 'target':
                    return _p.ss(
                        $,
                        ($) => ['target', $],
                    )
                case 'tooltip':
                    return _p.ss(
                        $,
                        ($) => ['tooltip', $],
                    )
                case 'width':
                    return _p.ss(
                        $,
                        ($) => ['width', $],
                    )
                case 'xlabel':
                    return _p.ss(
                        $,
                        ($) => ['xlabel', $],
                    )
                case 'xlp':
                    return _p.ss(
                        $,
                        ($) => ['xlp', $],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Edge_Attributes: t_signatures.Edge_Attributes = ($) => _p.list.from.list(
    $,
).map(
    ($) => _p.decide.state(
        $,
        ($): t_out.Edge_Attributes.L => {
            switch ($[0]) {
                case 'arrowhead':
                    return _p.ss(
                        $,
                        ($) => ['arrowhead', $],
                    )
                case 'arrowsize':
                    return _p.ss(
                        $,
                        ($) => ['arrowsize', $],
                    )
                case 'arrowtail':
                    return _p.ss(
                        $,
                        ($) => ['arrowtail', $],
                    )
                case 'bgcolor':
                    return _p.ss(
                        $,
                        ($) => ['bgcolor', $],
                    )
                case 'color':
                    return _p.ss(
                        $,
                        ($) => ['color', $],
                    )
                case 'colorscheme':
                    return _p.ss(
                        $,
                        ($) => ['colorscheme', $],
                    )
                case 'comment':
                    return _p.ss(
                        $,
                        ($) => ['comment', $],
                    )
                case 'constraint':
                    return _p.ss(
                        $,
                        ($) => ['constraint', $],
                    )
                case 'decorate':
                    return _p.ss(
                        $,
                        ($) => ['decorate', $],
                    )
                case 'dir':
                    return _p.ss(
                        $,
                        ($) => ['dir', _p.decide.state(
                            $,
                            ($): t_out.Edge_Attributes.L.dir => {
                                switch ($[0]) {
                                    case 'forward':
                                        return _p.ss(
                                            $,
                                            ($) => ['forward', null],
                                        )
                                    case 'back':
                                        return _p.ss(
                                            $,
                                            ($) => ['back', null],
                                        )
                                    case 'both':
                                        return _p.ss(
                                            $,
                                            ($) => ['both', null],
                                        )
                                    case 'none':
                                        return _p.ss(
                                            $,
                                            ($) => ['none', null],
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    )
                case 'edge url':
                    return _p.ss(
                        $,
                        ($) => ['edge url', $],
                    )
                case 'edge lp':
                    return _p.ss(
                        $,
                        ($) => ['edge lp', $],
                    )
                case 'edge target':
                    return _p.ss(
                        $,
                        ($) => ['edge target', $],
                    )
                case 'edge tooltip':
                    return _p.ss(
                        $,
                        ($) => ['edge tooltip', $],
                    )
                case 'head lp':
                    return _p.ss(
                        $,
                        ($) => ['head lp', $],
                    )
                case 'headclip':
                    return _p.ss(
                        $,
                        ($) => ['headclip', $],
                    )
                case 'headlabel':
                    return _p.ss(
                        $,
                        ($) => ['headlabel', $],
                    )
                case 'headport':
                    return _p.ss(
                        $,
                        ($) => ['headport', $],
                    )
                case 'height':
                    return _p.ss(
                        $,
                        ($) => ['height', $],
                    )
                case 'id':
                    return _p.ss(
                        $,
                        ($) => ['id', $],
                    )
                case 'label':
                    return _p.ss(
                        $,
                        ($) => ['label', $],
                    )
                case 'label distance':
                    return _p.ss(
                        $,
                        ($) => ['label distance', $],
                    )
                case 'label angle':
                    return _p.ss(
                        $,
                        ($) => ['label angle', $],
                    )
                case 'label float':
                    return _p.ss(
                        $,
                        ($) => ['label float', $],
                    )
                case 'labelfloat':
                    return _p.ss(
                        $,
                        ($) => ['labelfloat', $],
                    )
                case 'labelhref':
                    return _p.ss(
                        $,
                        ($) => ['labelhref', $],
                    )
                case 'label lp':
                    return _p.ss(
                        $,
                        ($) => ['label lp', $],
                    )
                case 'layer':
                    return _p.ss(
                        $,
                        ($) => ['layer', $],
                    )
                case 'len':
                    return _p.ss(
                        $,
                        ($) => ['len', $],
                    )
                case 'lhead':
                    return _p.ss(
                        $,
                        ($) => ['lhead', $],
                    )
                case 'lp':
                    return _p.ss(
                        $,
                        ($) => ['lp', $],
                    )
                case 'ltail':
                    return _p.ss(
                        $,
                        ($) => ['ltail', $],
                    )
                case 'minlen':
                    return _p.ss(
                        $,
                        ($) => ['minlen', $],
                    )
                case 'pen width':
                    return _p.ss(
                        $,
                        ($) => ['pen width', $],
                    )
                case 'pos':
                    return _p.ss(
                        $,
                        ($) => ['pos', $],
                    )
                case 'same head':
                    return _p.ss(
                        $,
                        ($) => ['same head', $],
                    )
                case 'same tail':
                    return _p.ss(
                        $,
                        ($) => ['same tail', $],
                    )
                case 'showboxes':
                    return _p.ss(
                        $,
                        ($) => ['showboxes', $],
                    )
                case 'style':
                    return _p.ss(
                        $,
                        ($) => ['style', $],
                    )
                case 'tail lp':
                    return _p.ss(
                        $,
                        ($) => ['tail lp', $],
                    )
                case 'tailclip':
                    return _p.ss(
                        $,
                        ($) => ['tailclip', $],
                    )
                case 'taillabel':
                    return _p.ss(
                        $,
                        ($) => ['taillabel', $],
                    )
                case 'tailport':
                    return _p.ss(
                        $,
                        ($) => ['tailport', $],
                    )
                case 'tooltip':
                    return _p.ss(
                        $,
                        ($) => ['tooltip', $],
                    )
                case 'weight':
                    return _p.ss(
                        $,
                        ($) => ['weight', $],
                    )
                case 'xlabel':
                    return _p.ss(
                        $,
                        ($) => ['xlabel', $],
                    )
                case 'xlp':
                    return _p.ss(
                        $,
                        ($) => ['xlp', $],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Attribute_Value: t_signatures.Attribute_Value = ($) => _p.decide.state(
    $,
    ($): t_out.Attribute_Value => {
        switch ($[0]) {
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', $],
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ['string', $],
                )
            case 'html string':
                return _p.ss(
                    $,
                    ($) => ['html string', $],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)
