
import * as _pi from 'pareto-core/dist/interface'

export type Identifier_ = string

export namespace Path_ {
    
    export namespace up_steps {
        
        export namespace L {
            
        }
        
        export type L = null
        
    }
    
    export type up_steps = _pi.List<up_steps.L>
    
    export namespace context {
        
        export namespace sibling {
            
        }
        
        export type sibling = null
        
        export namespace state_constraint {
            
            export type name = Identifier_
            
        }
        
        export type state_constraint = {
            readonly 'name': state_constraint.name
        }
        
    }
    
    export type context = 
        | readonly ['sibling', context.sibling]
        | readonly ['state constraint', context.state_constraint]
    
    export namespace selection_steps {
        
        export namespace L {
            
            export namespace group {
                
                export type name = Identifier_
                
            }
            
            export type group = {
                readonly 'name': group.name
            }
            
            export namespace state_constraint {
                
                export type name = Identifier_
                
            }
            
            export type state_constraint = {
                readonly 'name': state_constraint.name
            }
            
            export namespace reference {
                
                export type name = Identifier_
                
            }
            
            export type reference = {
                readonly 'name': reference.name
            }
            
        }
        
        export type L = 
            | readonly ['group', L.group]
            | readonly ['state constraint', L.state_constraint]
            | readonly ['reference', L.reference]
        
    }
    
    export type selection_steps = _pi.List<selection_steps.L>
    
}

export type Path_ = {
    readonly 'up steps': Path_.up_steps
    readonly 'context': Path_.context
    readonly 'selection steps': Path_.selection_steps
}

export namespace Node_ {
    
    export namespace properties {
        
        export namespace D {
            
            export namespace type_ {
                
                export namespace collection {
                    
                    export type node = Node_
                    
                    export type key = Identifier_
                    
                }
                
                export type collection = {
                    readonly 'node': collection.node
                    readonly 'key': collection.key
                }
                
                export namespace group {
                    
                    export type node = Node_
                    
                }
                
                export type group = {
                    readonly 'node': group.node
                }
                
                export namespace text {
                    
                    export namespace constraint {
                        
                        export namespace O {
                            
                            export type path = Path_
                            
                            export type dictionary = Identifier_
                            
                        }
                        
                        export type O = {
                            readonly 'path': O.path
                            readonly 'dictionary': O.dictionary
                        }
                        
                    }
                    
                    export type constraint = _pi.Optional_Value<constraint.O>
                    
                }
                
                export type text = {
                    readonly 'constraint': text.constraint
                }
                
                export namespace state_group {
                    
                    export namespace states {
                        
                        export namespace D {
                            
                            export namespace constraints {
                                
                                export namespace D {
                                    
                                    export type path = Path_
                                    
                                }
                                
                                export type D = {
                                    readonly 'path': D.path
                                }
                                
                            }
                            
                            export type constraints = _pi.Dictionary<constraints.D>
                            
                            export type node = Node_
                            
                        }
                        
                        export type D = {
                            readonly 'constraints': D.constraints
                            readonly 'node': D.node
                        }
                        
                    }
                    
                    export type states = _pi.Dictionary<states.D>
                    
                }
                
                export type state_group = {
                    readonly 'states': state_group.states
                }
                
            }
            
            export type type_ = 
                | readonly ['collection', type_.collection]
                | readonly ['group', type_.group]
                | readonly ['text', type_.text]
                | readonly ['state group', type_.state_group]
            
        }
        
        export type D = {
            readonly 'type': D.type_
        }
        
    }
    
    export type properties = _pi.Dictionary<properties.D>
    
}

export type Node_ = {
    readonly 'properties': Node_.properties
}

export namespace Root_ {
    
    export namespace numerical_types {
        
        export namespace D {
            
        }
        
        export type D = null
        
    }
    
    export type numerical_types = _pi.Dictionary<numerical_types.D>
    
    export type root = Node_
    
}

export type Root_ = {
    readonly 'numerical types': Root_.numerical_types
    readonly 'root': Root_.root
}

export { 
    Identifier_ as Identifier, 
    Path_ as Path, 
    Node_ as Node, 
    Root_ as Root, 
}
