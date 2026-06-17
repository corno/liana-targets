import * as p_ from 'pareto-core/dist/interface/data'

import * as d_alan_light from "../generated/liana/schemas/alan_light/data"


export type Package = p_.Dictionary<Node>

export type Node =
    | ['model', d_alan_light.Root]
    | ['package', Package]