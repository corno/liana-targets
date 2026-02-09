
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace SerializationChunk_ {
    
    export type I = i_in.Value
    
    export type O = i_out.SerializationChunk
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type SerializationChunk_ = (
    context: SerializationChunk_.I,
    abort: _pi.Abort<SerializationChunk_.E>,
) => SerializationChunk_.O

export namespace MetaPointer_ {
    
    export type I = i_in.Value
    
    export type O = i_out.MetaPointer
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type MetaPointer_ = (
    context: MetaPointer_.I,
    abort: _pi.Abort<MetaPointer_.E>,
) => MetaPointer_.O

export namespace SerializationChunks_ {
    
    export type I = i_in.Value
    
    export type O = i_out.SerializationChunks
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type SerializationChunks_ = (
    context: SerializationChunks_.I,
    abort: _pi.Abort<SerializationChunks_.E>,
) => SerializationChunks_.O

export { 
    SerializationChunk_ as SerializationChunk, 
    MetaPointer_ as MetaPointer, 
    SerializationChunks_ as SerializationChunks, 
}
