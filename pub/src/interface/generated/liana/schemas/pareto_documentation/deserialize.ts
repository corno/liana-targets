
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace Graphviz_Directory_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Graphviz_Directory
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Graphviz_Directory_ = (
    context: Graphviz_Directory_.I,
    abort: _pi.Abort<Graphviz_Directory_.E>,
    parameters: {
        readonly 'document resource identifier': Graphviz_Directory_.P.document_resource_identifier
        readonly 'tab size': Graphviz_Directory_.P.tab_size
    },
) => Graphviz_Directory_.O

export { 
    Graphviz_Directory_ as Graphviz_Directory, 
}
