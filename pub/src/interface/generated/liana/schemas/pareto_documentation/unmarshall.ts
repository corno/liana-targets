
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Graphviz_Directory_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Graphviz_Directory
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Graphviz_Directory_ = (
    context: Graphviz_Directory_.I,
    abort: _pi.Abort<Graphviz_Directory_.E>,
) => Graphviz_Directory_.O

export { 
    Graphviz_Directory_ as Graphviz_Directory, 
}
