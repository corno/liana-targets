import * as p_ from 'pareto-core/interface/data'

import type * as s_alan_light from "./alan_light.js"


export type Package = p_.Dictionary<Node>

export type Node =
    | ['model', s_alan_light.Root]
    | ['package', Package]