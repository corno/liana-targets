import * as pi from 'pareto-core/dist/interface'

import * as d_alan_light from "../../interface/generated/liana/schemas/alan_light/data"


export type Package = pi.Dictionary<Node>

export type Node =
    | ['model', d_alan_light.Root]
    | ['package', Package]