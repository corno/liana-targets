
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace SerializationChunk_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.SerializationChunk
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type SerializationChunk_ = (
    context: SerializationChunk_.I,
    abort: _pi.Abort<SerializationChunk_.E>,
    parameters: {
        readonly 'document resource identifier': SerializationChunk_.P.document_resource_identifier
        readonly 'tab size': SerializationChunk_.P.tab_size
    },
) => SerializationChunk_.O

export namespace MetaPointer_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.MetaPointer
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type MetaPointer_ = (
    context: MetaPointer_.I,
    abort: _pi.Abort<MetaPointer_.E>,
    parameters: {
        readonly 'document resource identifier': MetaPointer_.P.document_resource_identifier
        readonly 'tab size': MetaPointer_.P.tab_size
    },
) => MetaPointer_.O

export namespace SerializationChunks_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.SerializationChunks
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type SerializationChunks_ = (
    context: SerializationChunks_.I,
    abort: _pi.Abort<SerializationChunks_.E>,
    parameters: {
        readonly 'document resource identifier': SerializationChunks_.P.document_resource_identifier
        readonly 'tab size': SerializationChunks_.P.tab_size
    },
) => SerializationChunks_.O

export { 
    SerializationChunk_ as SerializationChunk, 
    MetaPointer_ as MetaPointer, 
    SerializationChunks_ as SerializationChunks, 
}
