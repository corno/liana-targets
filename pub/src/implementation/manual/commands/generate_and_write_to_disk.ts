import * as _p from 'pareto-core/dist/command'

import { location_to_string } from 'pareto-core/dist/misc/location_to_string'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_write_to_directory from "../../../modules/pareto-fountain-pen-directory/interface/to_be_generated/write_to_dictionary"

//dependencies
import * as r_liana_module from "pareto-liana/dist/implementation/temp/resolvers/module"
import * as t_liana_module_to_fountain_pen_block from "../schemas/liana_module/transformers/fountain_pen_block"


export const $$: signatures.commands.generate_and_write_to_disk = _p.command_procedure(
    ($p, $cr, $qr) => [
        $cr['write to directory'].execute(
            {
                'escape spaces in path': true,
                'directory': t_liana_module_to_fountain_pen_block.Module(
                    r_liana_module.Module(
                        $p.module,
                        {
                            'parameters': {
                                'lookups': null,
                                'values': null,
                            },
                            'location 2 string': location_to_string
                        }
                    ),
                    {

                        'target': $p.target
                    }
                ),
                'path': $p.path,
                'indentation': "    ",
                'newline': "\n",
                'remove before creating': true,
            },
            ($) => $,
        )
    ]
)