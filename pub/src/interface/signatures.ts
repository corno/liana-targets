import * as _pi from 'pareto-core/dist/interface'

import * as resources from "./resources"
import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_fp from "../modules/pareto-fountain-pen-directory/interface/resources"

export namespace commands {

    export type generate_and_write_to_disk = _pi.Command_Procedure<
        resources.commands.generate_and_write_to_disk,
        {
            'remove': resources_pareto.commands.remove
            'make directory': resources_pareto.commands.make_directory
            'write file': resources_pareto.commands.write_file
            'write to directory': resources_fp.commands.write_to_directory
        },
        null
    >
}