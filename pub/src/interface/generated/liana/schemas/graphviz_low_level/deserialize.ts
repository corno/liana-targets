
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace Graph_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Graph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Graph_ = (
    context: Graph_.I,
    abort: _pi.Abort<Graph_.E>,
    parameters: {
        readonly 'document resource identifier': Graph_.P.document_resource_identifier
        readonly 'tab size': Graph_.P.tab_size
    },
) => Graph_.O

export namespace Statement_List_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Statement_List
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Statement_List_ = (
    context: Statement_List_.I,
    abort: _pi.Abort<Statement_List_.E>,
    parameters: {
        readonly 'document resource identifier': Statement_List_.P.document_resource_identifier
        readonly 'tab size': Statement_List_.P.tab_size
    },
) => Statement_List_.O

export namespace Attribute_List_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Attribute_List
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Attribute_List_ = (
    context: Attribute_List_.I,
    abort: _pi.Abort<Attribute_List_.E>,
    parameters: {
        readonly 'document resource identifier': Attribute_List_.P.document_resource_identifier
        readonly 'tab size': Attribute_List_.P.tab_size
    },
) => Attribute_List_.O

export namespace Node_ID_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Node_ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_ID_ = (
    context: Node_ID_.I,
    abort: _pi.Abort<Node_ID_.E>,
    parameters: {
        readonly 'document resource identifier': Node_ID_.P.document_resource_identifier
        readonly 'tab size': Node_ID_.P.tab_size
    },
) => Node_ID_.O

export namespace ID_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
    parameters: {
        readonly 'document resource identifier': ID_.P.document_resource_identifier
        readonly 'tab size': ID_.P.tab_size
    },
) => ID_.O

export namespace Subgraph_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Subgraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Subgraph_ = (
    context: Subgraph_.I,
    abort: _pi.Abort<Subgraph_.E>,
    parameters: {
        readonly 'document resource identifier': Subgraph_.P.document_resource_identifier
        readonly 'tab size': Subgraph_.P.tab_size
    },
) => Subgraph_.O

export { 
    Graph_ as Graph, 
    Statement_List_ as Statement_List, 
    Attribute_List_ as Attribute_List, 
    Node_ID_ as Node_ID, 
    ID_ as ID, 
    Subgraph_ as Subgraph, 
}
