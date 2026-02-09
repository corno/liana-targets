
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_graphviz from "../graphviz_high_level/data"

export namespace Graphviz_Directory_ {
    
    export namespace D {
        
        export type file = i__imports_graphviz.Graph
        
        export type directory = Graphviz_Directory_
        
    }
    
    export type D = 
        | readonly ['file', D.file]
        | readonly ['directory', D.directory]
    
}

export type Graphviz_Directory_ = _pi.Dictionary<Graphviz_Directory_.D>

export { 
    Graphviz_Directory_ as Graphviz_Directory, 
}
