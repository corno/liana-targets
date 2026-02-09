
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "./data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export namespace SerializationChunk_ {
    
    export type I = i_in.SerializationChunk
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type SerializationChunk_ = (
    context: SerializationChunk_.I,
) => SerializationChunk_.O

export namespace MetaPointer_ {
    
    export type I = i_in.MetaPointer
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type MetaPointer_ = (
    context: MetaPointer_.I,
) => MetaPointer_.O

export namespace SerializationChunks_ {
    
    export type I = i_in.SerializationChunks
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type SerializationChunks_ = (
    context: SerializationChunks_.I,
) => SerializationChunks_.O

export { 
    SerializationChunk_ as SerializationChunk, 
    MetaPointer_ as MetaPointer, 
    SerializationChunks_ as SerializationChunks, 
}
