
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "./data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Graphviz_Directory_ {
    
    export type I = i_in.Graphviz_Directory
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Graphviz_Directory_ = (
    context: Graphviz_Directory_.I,
) => Graphviz_Directory_.O

export { 
    Graphviz_Directory_ as Graphviz_Directory, 
}
