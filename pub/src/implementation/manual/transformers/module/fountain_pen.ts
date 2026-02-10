import * as _p from 'pareto-core/dist/assign'

import * as d_in from "pareto-liana/dist/interface/generated/liana/schemas/module/data/resolved"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependecies

import * as t_liana_module_to_documentation from "./documentation"
import * as t_liana_module_to_graphviz from "./graphviz"
import * as t_liana_module_to_lionweb from "./lionweb"
import * as t_liana_module_to_typescript from "./typescript"


export const Module = (
    $: d_in.Module,
    $p: {
        'target':
        | ['documentation', null]
        | ['graphviz', null]
        | ['lionweb', null]
        | ['typescript', null]
    }

): d_out.Directory => {
    const module = $
    return _p.decide.state($p.target, ($): d_out.Directory => {
        switch ($[0]) {
            case 'documentation': return _p.ss($, ($) => t_liana_module_to_documentation.Module(module))
            case 'graphviz': return _p.ss($, ($) => t_liana_module_to_graphviz.Module(module, { 'graph name': "schema" }))
            case 'lionweb': return _p.ss($, ($) => t_liana_module_to_lionweb.Module(module))
            case 'typescript': return _p.ss($, ($) => t_liana_module_to_typescript.Module(module))
            default: return _p.au($[0])
        }
    })
}