// import * as _p from 'pareto-core/dist/assign'

// import * as d_in_s from "pareto/dist/interface/generated/liana/schemas/schema/data"
// import * as d_in from "pareto/dist/interface/generated/liana/schemas/module/data"
// import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

// //transformations

// import * as t_schema_to_graphviz from "../../pareto_schema/transformers/graphviz_high_level"
// import * as t_graphviz_to_fountain_pen from "../../graphviz_highlevel/transformers/fountain_pen"

// //shorthands
// import * as sh from "pareto-fountain-pen/dist/shorthands/block"



// export const Schema_Tree = (
//     $: d_in_s.Schema_Tree,
//     $p: {
//         'graph name': string
//     }
// ): d_out.Directory => _p.decide.state($, ($) => {
//     switch ($[0]) {
//         case 'schema': return _p.ss($, ($) => _p.dictionary.literal({
//             "graphviz.dot": sh.n.file(
//                 t_graphviz_to_fountain_pen.Graph(
//                     t_schema_to_graphviz.Schema($, {
//                         'graph name': $p['graph name']
//                     })
//                 ),
//             )
//         }))
//         case 'set': return _p.ss($, ($) => Schemas($))
//         default: return _p.au($[0])
//     }
// })

// export const Schemas = ($: d_in_s.Schemas): d_out.Directory => $.dictionary.__d_map(($, id) => sh.n.directory(Schema_Tree($, { 'graph name': key })))

// export const Module = (
//     $: d_in.Module,
//     $p: {
//         'graph name': string
//     }
// ): d_out.Directory => Schema_Tree($['schema tree'], { 'graph name': $p['graph name'] })