
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/pareto_documentation/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/pareto_documentation/data"

import * as v_graphviz from "../../graphviz_high_level/transformers/boilerplate_for_migrate"

export const Graphviz_Directory: t_signatures.Graphviz_Directory = ($) => _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => _p.decide.state(
        $,
        ($): t_out.Graphviz_Directory.D => {
            switch ($[0]) {
                case 'file':
                    return _p.ss(
                        $,
                        ($) => ['file', v_graphviz.Graph(
                            $,
                        )],
                    )
                case 'directory':
                    return _p.ss(
                        $,
                        ($) => ['directory', Graphviz_Directory(
                            $,
                        )],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
)
