
import * as _pi from 'pareto-core/dist/interface'

export namespace Graph_ {
    
    export type strict = boolean
    
    export namespace type_ {
        
        export type graph = null
        
        export type digraph = null
        
    }
    
    export type type_ = 
        | readonly ['graph', type_.graph]
        | readonly ['digraph', type_.digraph]
    
    export namespace name {
        
        export type O = ID_
        
    }
    
    export type name = _pi.Optional_Value<name.O>
    
    export type statements = Statement_List_
    
}

export type Graph_ = {
    readonly 'strict': Graph_.strict
    readonly 'type': Graph_.type_
    readonly 'name': Graph_.name
    readonly 'statements': Graph_.statements
}

export namespace Statement_List_ {
    
    export namespace L {
        
        export namespace node {
            
            export type node = Node_ID_
            
            export type attribute_list = Attribute_List_
            
        }
        
        export type node = {
            readonly 'node': node.node
            readonly 'attribute list': node.attribute_list
        }
        
        export namespace edge {
            
            export namespace left {
                
                export type node = Node_ID_
                
                export type subgraph = Subgraph_
                
            }
            
            export type left = 
                | readonly ['node', left.node]
                | readonly ['subgraph', left.subgraph]
            
            export namespace right {
                
                export namespace L {
                    
                    export type node = Node_ID_
                    
                    export type subgraph = Subgraph_
                    
                }
                
                export type L = 
                    | readonly ['node', L.node]
                    | readonly ['subgraph', L.subgraph]
                
            }
            
            export type right = _pi.List<right.L>
            
            export type attributes = Attribute_List_
            
        }
        
        export type edge = {
            readonly 'left': edge.left
            readonly 'right': edge.right
            readonly 'attributes': edge.attributes
        }
        
        export namespace attribute_list {
            
            export namespace type_ {
                
                export type graph = null
                
                export type node = null
                
                export type edge = null
                
            }
            
            export type type_ = 
                | readonly ['graph', type_.graph]
                | readonly ['node', type_.node]
                | readonly ['edge', type_.edge]
            
            export type attributes = Attribute_List_
            
        }
        
        export type attribute_list = {
            readonly 'type': attribute_list.type_
            readonly 'attributes': attribute_list.attributes
        }
        
        export namespace attribute_assignment {
            
            export type name = ID_
            
            export type value = ID_
            
        }
        
        export type attribute_assignment = {
            readonly 'name': attribute_assignment.name
            readonly 'value': attribute_assignment.value
        }
        
        export type subgraph = Subgraph_
        
    }
    
    export type L = 
        | readonly ['node', L.node]
        | readonly ['edge', L.edge]
        | readonly ['attribute list', L.attribute_list]
        | readonly ['attribute assignment', L.attribute_assignment]
        | readonly ['subgraph', L.subgraph]
    
}

export type Statement_List_ = _pi.List<Statement_List_.L>

export namespace Attribute_List_ {
    
    export namespace L {
        
        export type name = ID_
        
        export type value = ID_
        
    }
    
    export type L = {
        readonly 'name': L.name
        readonly 'value': L.value
    }
    
}

export type Attribute_List_ = _pi.List<Attribute_List_.L>

export namespace Node_ID_ {
    
    export type id = ID_
    
    export namespace port {
        
        export namespace O {
            
            export type port = ID_
            
            export namespace compass_point {
                
                export type O = ID_
                
            }
            
            export type compass_point = _pi.Optional_Value<compass_point.O>
            
        }
        
        export type O = {
            readonly 'port': O.port
            readonly 'compass point': O.compass_point
        }
        
    }
    
    export type port = _pi.Optional_Value<port.O>
    
}

export type Node_ID_ = {
    readonly 'id': Node_ID_.id
    readonly 'port': Node_ID_.port
}

export namespace ID_ {
    
    export type id = string
    
    export type string_ = string
    
    export type html = string
    
    export type number_ = number
    
}

export type ID_ = 
    | readonly ['id', ID_.id]
    | readonly ['string', ID_.string_]
    | readonly ['html', ID_.html]
    | readonly ['number', ID_.number_]

export namespace Subgraph_ {
    
    export namespace subgraph {
        
        export namespace O {
            
            export type O = ID_
            
        }
        
        export type O = _pi.Optional_Value<O.O>
        
    }
    
    export type subgraph = _pi.Optional_Value<subgraph.O>
    
    export type statements = Statement_List_
    
}

export type Subgraph_ = {
    readonly 'subgraph': Subgraph_.subgraph
    readonly 'statements': Subgraph_.statements
}

export { 
    Graph_ as Graph, 
    Statement_List_ as Statement_List, 
    Attribute_List_ as Attribute_List, 
    Node_ID_ as Node_ID, 
    ID_ as ID, 
    Subgraph_ as Subgraph, 
}
