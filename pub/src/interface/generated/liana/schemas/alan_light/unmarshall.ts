
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Identifier_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Identifier
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Identifier_ = (
    context: Identifier_.I,
    abort: _pi.Abort<Identifier_.E>,
) => Identifier_.O

export namespace Path_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Path_ = (
    context: Path_.I,
    abort: _pi.Abort<Path_.E>,
) => Path_.O

export namespace Node_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
) => Node_.O

export namespace Root_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: _pi.Abort<Root_.E>,
) => Root_.O

export { 
    Identifier_ as Identifier, 
    Path_ as Path, 
    Node_ as Node, 
    Root_ as Root, 
}
