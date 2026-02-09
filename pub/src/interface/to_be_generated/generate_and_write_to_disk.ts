import * as _pi from 'pareto-core/dist/interface'

import * as d_module from "pareto/dist/interface/generated/liana/schemas/module/data"
import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/path/data"
import * as d_write_to_directory from "../../modules/pareto-fountain-pen-directory/interface/to_be_generated/write_to_dictionary"

export type Error = d_write_to_directory.Error

export type Parameters = {
    'module': d_module.Module<_pi.Deprecated_Source_Location>
    'path': d_path.Node_Path
    'target':
    | ['documentation', null]
    | ['graphviz', null]
    | ['lionweb', null]
    | ['typescript', null]
}

