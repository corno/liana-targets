
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace Identifier_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Identifier
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Identifier_ = (
    context: Identifier_.I,
    abort: _pi.Abort<Identifier_.E>,
    parameters: {
        readonly 'document resource identifier': Identifier_.P.document_resource_identifier
        readonly 'tab size': Identifier_.P.tab_size
    },
) => Identifier_.O

export namespace Path_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Path_ = (
    context: Path_.I,
    abort: _pi.Abort<Path_.E>,
    parameters: {
        readonly 'document resource identifier': Path_.P.document_resource_identifier
        readonly 'tab size': Path_.P.tab_size
    },
) => Path_.O

export namespace Node_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
    parameters: {
        readonly 'document resource identifier': Node_.P.document_resource_identifier
        readonly 'tab size': Node_.P.tab_size
    },
) => Node_.O

export namespace Root_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: _pi.Abort<Root_.E>,
    parameters: {
        readonly 'document resource identifier': Root_.P.document_resource_identifier
        readonly 'tab size': Root_.P.tab_size
    },
) => Root_.O

export { 
    Identifier_ as Identifier, 
    Path_ as Path, 
    Node_ as Node, 
    Root_ as Root, 
}
