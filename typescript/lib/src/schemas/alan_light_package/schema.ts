import * as p_ from 'pareto-core/schema'

import type * as s_alan_light from "../../modules/alan_light/schemas/alan_light/schema.js"


export type Package = p_.Dictionary<Node>

export type Node =
    | ['model', s_alan_light.Root]
    | ['package', Package]