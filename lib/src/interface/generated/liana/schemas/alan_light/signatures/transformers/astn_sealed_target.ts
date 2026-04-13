
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "../../data"

export namespace Identifier_ {
    
    export type I = i_in.Identifier
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Identifier_ = (
    context: Identifier_.I,
) => Identifier_.O

export namespace Path_ {
    
    export type I = i_in.Path
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Path_ = (
    context: Path_.I,
) => Path_.O

export namespace Node_ {
    
    export type I = i_in.Node
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
) => Node_.O

export namespace Root_ {
    
    export type I = i_in.Root
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
) => Root_.O

export { 
    Identifier_ as Identifier, 
    Path_ as Path, 
    Node_ as Node, 
    Root_ as Root, 
}
