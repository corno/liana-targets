
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Graph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: _pi.Abort<Graph_.E>,
) => Graph_.O

export namespace Statement_List_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Statement_List
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Statement_List_ = (
    context: Statement_List_.I,
    abort: _pi.Abort<Statement_List_.E>,
) => Statement_List_.O

export namespace Attribute_List_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Attribute_List
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Attribute_List_ = (
    context: Attribute_List_.I,
    abort: _pi.Abort<Attribute_List_.E>,
) => Attribute_List_.O

export namespace Node_ID_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node_ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_ID_ = (
    context: Node_ID_.I,
    abort: _pi.Abort<Node_ID_.E>,
) => Node_ID_.O

export namespace ID_ {
    
    export type I = i_in.Value
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
) => ID_.O

export namespace Subgraph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Subgraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Subgraph_ = (
    context: Subgraph_.I,
    abort: _pi.Abort<Subgraph_.E>,
) => Subgraph_.O

export { 
    Graph_ as Graph, 
    Statement_List_ as Statement_List, 
    Attribute_List_ as Attribute_List, 
    Node_ID_ as Node_ID, 
    ID_ as ID, 
    Subgraph_ as Subgraph, 
}
