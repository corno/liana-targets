
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Graph_ {
    
    export type I = i_in.Graph
    
    export type O = i_out.Graph
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
) => Graph_.O

export namespace Statement_List_ {
    
    export type I = i_in.Statement_List
    
    export type O = i_out.Statement_List
    
    export namespace P {
        
    }
    
}

export type Statement_List_ = (
    context: Statement_List_.I,
) => Statement_List_.O

export namespace Attribute_List_ {
    
    export type I = i_in.Attribute_List
    
    export type O = i_out.Attribute_List
    
    export namespace P {
        
    }
    
}

export type Attribute_List_ = (
    context: Attribute_List_.I,
) => Attribute_List_.O

export namespace Node_ID_ {
    
    export type I = i_in.Node_ID
    
    export type O = i_out.Node_ID
    
    export namespace P {
        
    }
    
}

export type Node_ID_ = (
    context: Node_ID_.I,
) => Node_ID_.O

export namespace ID_ {
    
    export type I = i_in.ID
    
    export type O = i_out.ID
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
) => ID_.O

export namespace Subgraph_ {
    
    export type I = i_in.Subgraph
    
    export type O = i_out.Subgraph
    
    export namespace P {
        
    }
    
}

export type Subgraph_ = (
    context: Subgraph_.I,
) => Subgraph_.O

export { 
    Graph_ as Graph, 
    Statement_List_ as Statement_List, 
    Attribute_List_ as Attribute_List, 
    Node_ID_ as Node_ID, 
    ID_ as ID, 
    Subgraph_ as Subgraph, 
}
