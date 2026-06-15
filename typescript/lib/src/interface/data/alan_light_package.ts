import * as p_di from 'pareto-core/dist/interface/data'

import * as d_alan_light from "../generated/liana/schemas/alan_light/data"


export type Package = p_di.Dictionary<Node>

export type Node =
    | ['model', d_alan_light.Root]
    | ['package', Package]