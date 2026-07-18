import * as p_ from 'pareto-core/implementation/serializer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//schemas
import type * as s_in from "../../../../interface/schemas/alan_light.js"

namespace declarations {

    export type Identifier = p_.Serializer<
        s_in.Identifier
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"



export const Identifier: declarations.Identifier = ($) => p_.ph.list_of_characters(
    p_.literal.segmented_list([
        p_.literal.list([
            0x60, // `
        ]),
        p_.from.list(p_list_from_text(
            $,
            ($) => $
        ),
        ).flatten(
            ($) => {
                switch ($) {
                    case 0x22: // " (\")
                        return p_.literal.list([
                            0x5C, // \
                            0x22, // "
                        ])
                    case 0x5C: // \ (\\)
                        return p_.literal.list([
                            0x5C, // \
                            0x5C, // \
                        ])
                    case 0x08: // backspace (\b)
                        return p_.literal.list([
                            0x5C, // \
                            0x62, // b
                        ])
                    case 0x0C: // form feed (\f)
                        return p_.literal.list([
                            0x5C, // \
                            0x66, // f
                        ])
                    case 0x0A: // line feed (\n)
                        return p_.literal.list([
                            0x5C, // \
                            0x6E, // n
                        ])
                    case 0x0D: // carriage return (\r)
                        return p_.literal.list([
                            0x5C, // \
                            0x72, // r
                        ])
                    case 0x09: // horizontal tab (\t)
                        return p_.literal.list([
                            0x5C, // \
                            0x74, // t
                        ])
                    case 0x0B: // vertical tab (\v)
                        return p_.literal.list([
                            0x5C, // \
                            0x76, // v
                        ])
                    default: {
                        return p_.literal.list([
                            $,
                        ])
                    }
                }
            }
        ),
        p_.literal.list([
            0x60, // `
        ])
    ]))