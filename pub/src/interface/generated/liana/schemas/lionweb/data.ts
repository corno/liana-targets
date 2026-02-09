
import * as _pi from 'pareto-core/dist/interface'

export namespace SerializationChunk_ {
    
    export type serializationFormatVersion = string
    
    export namespace languages {
        
        export namespace L {
            
            export type key = string
            
            export type version = string
            
        }
        
        export type L = {
            readonly 'key': L.key
            readonly 'version': L.version
        }
        
    }
    
    export type languages = _pi.List<languages.L>
    
    export namespace nodes {
        
        export namespace L {
            
            export type id = string
            
            export namespace parent {
                
                export type O = string
                
            }
            
            export type parent = _pi.Optional_Value<parent.O>
            
            export namespace annotations {
                
                export type L = string
                
            }
            
            export type annotations = _pi.List<annotations.L>
            
            export type classifier = MetaPointer_
            
            export namespace containments {
                
                export namespace L {
                    
                    export type containment = MetaPointer_
                    
                    export namespace children {
                        
                        export type L = string
                        
                    }
                    
                    export type children = _pi.List<children.L>
                    
                }
                
                export type L = {
                    readonly 'containment': L.containment
                    readonly 'children': L.children
                }
                
            }
            
            export type containments = _pi.List<containments.L>
            
            export namespace properties {
                
                export namespace L {
                    
                    export type value = string
                    
                    export type property = MetaPointer_
                    
                }
                
                export type L = {
                    readonly 'value': L.value
                    readonly 'property': L.property
                }
                
            }
            
            export type properties = _pi.List<properties.L>
            
            export namespace references {
                
                export namespace L {
                    
                    export namespace targets {
                        
                        export namespace L {
                            
                            export type reference = string
                            
                            export type resolveInfo = string
                            
                        }
                        
                        export type L = {
                            readonly 'reference': L.reference
                            readonly 'resolveInfo': L.resolveInfo
                        }
                        
                    }
                    
                    export type targets = _pi.List<targets.L>
                    
                    export type reference = MetaPointer_
                    
                }
                
                export type L = {
                    readonly 'targets': L.targets
                    readonly 'reference': L.reference
                }
                
            }
            
            export type references = _pi.List<references.L>
            
        }
        
        export type L = {
            readonly 'id': L.id
            readonly 'parent': L.parent
            readonly 'annotations': L.annotations
            readonly 'classifier': L.classifier
            readonly 'containments': L.containments
            readonly 'properties': L.properties
            readonly 'references': L.references
        }
        
    }
    
    export type nodes = _pi.List<nodes.L>
    
}

export type SerializationChunk_ = {
    readonly 'serializationFormatVersion': SerializationChunk_.serializationFormatVersion
    readonly 'languages': SerializationChunk_.languages
    readonly 'nodes': SerializationChunk_.nodes
}

export namespace MetaPointer_ {
    
    export type language = string
    
    export type version = string
    
    export type key = string
    
}

export type MetaPointer_ = {
    readonly 'language': MetaPointer_.language
    readonly 'version': MetaPointer_.version
    readonly 'key': MetaPointer_.key
}

export namespace SerializationChunks_ {
    
    export type D = SerializationChunk_
    
}

export type SerializationChunks_ = _pi.Dictionary<SerializationChunks_.D>

export { 
    SerializationChunk_ as SerializationChunk, 
    MetaPointer_ as MetaPointer, 
    SerializationChunks_ as SerializationChunks, 
}
