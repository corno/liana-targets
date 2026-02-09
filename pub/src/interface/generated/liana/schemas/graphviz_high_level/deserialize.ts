
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

export namespace Tree_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Tree_ = (
    context: Tree_.I,
    abort: _pi.Abort<Tree_.E>,
    parameters: {
        readonly 'document resource identifier': Tree_.P.document_resource_identifier
        readonly 'tab size': Tree_.P.tab_size
    },
) => Tree_.O

export namespace End_Point_Specification_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.End_Point_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type End_Point_Specification_ = (
    context: End_Point_Specification_.I,
    abort: _pi.Abort<End_Point_Specification_.E>,
    parameters: {
        readonly 'document resource identifier': End_Point_Specification_.P.document_resource_identifier
        readonly 'tab size': End_Point_Specification_.P.tab_size
    },
) => End_Point_Specification_.O

export namespace Graph_Attributes_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Graph_Attributes
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Graph_Attributes_ = (
    context: Graph_Attributes_.I,
    abort: _pi.Abort<Graph_Attributes_.E>,
    parameters: {
        readonly 'document resource identifier': Graph_Attributes_.P.document_resource_identifier
        readonly 'tab size': Graph_Attributes_.P.tab_size
    },
) => Graph_Attributes_.O

export namespace Node_Attributes_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Node_Attributes
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_Attributes_ = (
    context: Node_Attributes_.I,
    abort: _pi.Abort<Node_Attributes_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Attributes_.P.document_resource_identifier
        readonly 'tab size': Node_Attributes_.P.tab_size
    },
) => Node_Attributes_.O

export namespace Edge_Attributes_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Edge_Attributes
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Edge_Attributes_ = (
    context: Edge_Attributes_.I,
    abort: _pi.Abort<Edge_Attributes_.E>,
    parameters: {
        readonly 'document resource identifier': Edge_Attributes_.P.document_resource_identifier
        readonly 'tab size': Edge_Attributes_.P.tab_size
    },
) => Edge_Attributes_.O

export namespace Attribute_Value_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Attribute_Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Attribute_Value_ = (
    context: Attribute_Value_.I,
    abort: _pi.Abort<Attribute_Value_.E>,
    parameters: {
        readonly 'document resource identifier': Attribute_Value_.P.document_resource_identifier
        readonly 'tab size': Attribute_Value_.P.tab_size
    },
) => Attribute_Value_.O

export { 
    Graph_ as Graph, 
    Tree_ as Tree, 
    End_Point_Specification_ as End_Point_Specification, 
    Graph_Attributes_ as Graph_Attributes, 
    Node_Attributes_ as Node_Attributes, 
    Edge_Attributes_ as Edge_Attributes, 
    Attribute_Value_ as Attribute_Value, 
}
