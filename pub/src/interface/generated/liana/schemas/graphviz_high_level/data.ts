
import * as _pi from 'pareto-core/dist/interface'

export namespace Graph_ {
    
    export namespace name {
        
        export type O = string
        
    }
    
    export type name = _pi.Optional_Value<name.O>
    
    export type tree = Tree_
    
    export namespace type_ {
        
        export namespace undirected {
            
            export namespace edges {
                
                export namespace L {
                    
                    export type yin = End_Point_Specification_
                    
                    export type yang = End_Point_Specification_
                    
                    export type attributes = Edge_Attributes_
                    
                }
                
                export type L = {
                    readonly 'yin': L.yin
                    readonly 'yang': L.yang
                    readonly 'attributes': L.attributes
                }
                
            }
            
            export type edges = _pi.List<edges.L>
            
        }
        
        export type undirected = {
            readonly 'edges': undirected.edges
        }
        
        export namespace directed {
            
            export namespace edges {
                
                export namespace L {
                    
                    export type from_ = End_Point_Specification_
                    
                    export type to = End_Point_Specification_
                    
                    export type attributes = Edge_Attributes_
                    
                }
                
                export type L = {
                    readonly 'from': L.from_
                    readonly 'to': L.to
                    readonly 'attributes': L.attributes
                }
                
            }
            
            export type edges = _pi.List<edges.L>
            
        }
        
        export type directed = {
            readonly 'edges': directed.edges
        }
        
    }
    
    export type type_ = 
        | readonly ['undirected', type_.undirected]
        | readonly ['directed', type_.directed]
    
}

export type Graph_ = {
    readonly 'name': Graph_.name
    readonly 'tree': Graph_.tree
    readonly 'type': Graph_.type_
}

export namespace Tree_ {
    
    export type attributes = Graph_Attributes_
    
    export namespace elements {
        
        export namespace D {
            
            export namespace node {
                
                export type attributes = Node_Attributes_
                
            }
            
            export type node = {
                readonly 'attributes': node.attributes
            }
            
            export namespace sub {
                
                export namespace type_ {
                    
                    export type group = null
                    
                    export type cluster = null
                    
                    export type subgraph = null
                    
                }
                
                export type type_ = 
                    | readonly ['group', type_.group]
                    | readonly ['cluster', type_.cluster]
                    | readonly ['subgraph', type_.subgraph]
                
                export type tree = Tree_
                
            }
            
            export type sub = {
                readonly 'type': sub.type_
                readonly 'tree': sub.tree
            }
            
        }
        
        export type D = 
            | readonly ['node', D.node]
            | readonly ['sub', D.sub]
        
    }
    
    export type elements = _pi.Dictionary<elements.D>
    
}

export type Tree_ = {
    readonly 'attributes': Tree_.attributes
    readonly 'elements': Tree_.elements
}

export namespace End_Point_Specification_ {
    
    export type start = string
    
    export namespace tail {
        
        export type L = string
        
    }
    
    export type tail = _pi.List<tail.L>
    
    export namespace port_data {
        
        export namespace O {
            
            export type port = string
            
            export namespace compass_direction {
                
                export type O = string
                
            }
            
            export type compass_direction = _pi.Optional_Value<compass_direction.O>
            
        }
        
        export type O = {
            readonly 'port': O.port
            readonly 'compass direction': O.compass_direction
        }
        
    }
    
    export type port_data = _pi.Optional_Value<port_data.O>
    
}

export type End_Point_Specification_ = {
    readonly 'start': End_Point_Specification_.start
    readonly 'tail': End_Point_Specification_.tail
    readonly 'port data': End_Point_Specification_.port_data
}

export namespace Graph_Attributes_ {
    
    export namespace L {
        
        export type concentrate = boolean
        
        export type charset = string
        
        export namespace clusterrank {
            
            export type none = null
            
            export type local = null
            
            export type global = null
            
        }
        
        export type clusterrank = 
            | readonly ['none', clusterrank.none]
            | readonly ['local', clusterrank.local]
            | readonly ['global', clusterrank.global]
        
        export type color = string
        
        export type color_scheme = string
        
        export type comment = string
        
        export type compound = boolean
        
        export type dpi = number
        
        export type font_color = string
        
        export type font_name = string
        
        export type font_path = string
        
        export type font_size = number
        
        export type label = string
        
        export type label_distance = number
        
        export type label_scheme = number
        
        export namespace label_location {
            
            export type top = null
            
            export type bottom = null
            
        }
        
        export type label_location = 
            | readonly ['top', label_location.top]
            | readonly ['bottom', label_location.bottom]
        
        export type landscape = boolean
        
        export type layer_list = string
        
        export type layer_separator = string
        
        export type layers = string
        
        export type margin = string
        
        export type max_iteration = number
        
        export type mclimit = number
        
        export type mindist = number
        
        export namespace mode {
            
            export type no_output = null
            
            export type out = null
            
            export type in_ = null
            
            export type in_out = null
            
        }
        
        export type mode = 
            | readonly ['no output', mode.no_output]
            | readonly ['out', mode.out]
            | readonly ['in', mode.in_]
            | readonly ['in out', mode.in_out]
        
        export type newrank = boolean
        
        export type no_loop = boolean
        
        export type normalize = boolean
        
        export namespace ordering {
            
            export type out = null
            
            export type in_ = null
            
            export type in_out = null
            
        }
        
        export type ordering = 
            | readonly ['out', ordering.out]
            | readonly ['in', ordering.in_]
            | readonly ['in out', ordering.in_out]
        
        export type orientation = number
        
        export namespace output_order {
            
            export type breadth_first = null
            
            export type dfs = null
            
        }
        
        export type output_order = 
            | readonly ['breadth first', output_order.breadth_first]
            | readonly ['dfs', output_order.dfs]
        
        export type overlap = string
        
        export namespace output_mode {
            
            export type edges_first = null
            
            export type nodes_first = null
            
        }
        
        export type output_mode = 
            | readonly ['edges first', output_mode.edges_first]
            | readonly ['nodes first', output_mode.nodes_first]
        
        export type pack = boolean
        
        export namespace pack_mode {
            
            export type node = null
            
            export type graph = null
            
        }
        
        export type pack_mode = 
            | readonly ['node', pack_mode.node]
            | readonly ['graph', pack_mode.graph]
        
        export type pad = number
        
        export type page = string
        
        export type quadtree = boolean
        
        export type quantum = number
        
        export namespace rankdir {
            
            export type top_bottom = null
            
            export type bottom_top = null
            
            export type left_right = null
            
            export type right_left = null
            
        }
        
        export type rankdir = 
            | readonly ['top bottom', rankdir.top_bottom]
            | readonly ['bottom top', rankdir.bottom_top]
            | readonly ['left right', rankdir.left_right]
            | readonly ['right left', rankdir.right_left]
        
        export type ranksep = string
        
        export type ratio = string
        
        export type remincross = boolean
        
        export type rotate = number
        
        export type scale = string
        
        export type searchsize = number
        
        export type sep = string
        
        export type showboxes = boolean
        
        export type size = string
        
        export namespace smoothing {
            
            export type none = null
            
            export type spring = null
            
            export type triangle = null
            
        }
        
        export type smoothing = 
            | readonly ['none', smoothing.none]
            | readonly ['spring', smoothing.spring]
            | readonly ['triangle', smoothing.triangle]
        
        export type sortv = boolean
        
        export type splines = string
        
        export type start = number
        
        export type style = string
        
        export type stylesheet = string
        
        export type target = string
        
        export type tooltip = string
        
        export type truecolor = boolean
        
        export type viewport = string
        
        export type width = number
        
        export type xdotversion = number
        
        export type xlabel = string
        
    }
    
    export type L = 
        | readonly ['concentrate', L.concentrate]
        | readonly ['charset', L.charset]
        | readonly ['clusterrank', L.clusterrank]
        | readonly ['color', L.color]
        | readonly ['color scheme', L.color_scheme]
        | readonly ['comment', L.comment]
        | readonly ['compound', L.compound]
        | readonly ['dpi', L.dpi]
        | readonly ['font color', L.font_color]
        | readonly ['font name', L.font_name]
        | readonly ['font path', L.font_path]
        | readonly ['font size', L.font_size]
        | readonly ['label', L.label]
        | readonly ['label distance', L.label_distance]
        | readonly ['label scheme', L.label_scheme]
        | readonly ['label location', L.label_location]
        | readonly ['landscape', L.landscape]
        | readonly ['layer list', L.layer_list]
        | readonly ['layer separator', L.layer_separator]
        | readonly ['layers', L.layers]
        | readonly ['margin', L.margin]
        | readonly ['max iteration', L.max_iteration]
        | readonly ['mclimit', L.mclimit]
        | readonly ['mindist', L.mindist]
        | readonly ['mode', L.mode]
        | readonly ['newrank', L.newrank]
        | readonly ['no loop', L.no_loop]
        | readonly ['normalize', L.normalize]
        | readonly ['ordering', L.ordering]
        | readonly ['orientation', L.orientation]
        | readonly ['output order', L.output_order]
        | readonly ['overlap', L.overlap]
        | readonly ['output mode', L.output_mode]
        | readonly ['pack', L.pack]
        | readonly ['pack mode', L.pack_mode]
        | readonly ['pad', L.pad]
        | readonly ['page', L.page]
        | readonly ['quadtree', L.quadtree]
        | readonly ['quantum', L.quantum]
        | readonly ['rankdir', L.rankdir]
        | readonly ['ranksep', L.ranksep]
        | readonly ['ratio', L.ratio]
        | readonly ['remincross', L.remincross]
        | readonly ['rotate', L.rotate]
        | readonly ['scale', L.scale]
        | readonly ['searchsize', L.searchsize]
        | readonly ['sep', L.sep]
        | readonly ['showboxes', L.showboxes]
        | readonly ['size', L.size]
        | readonly ['smoothing', L.smoothing]
        | readonly ['sortv', L.sortv]
        | readonly ['splines', L.splines]
        | readonly ['start', L.start]
        | readonly ['style', L.style]
        | readonly ['stylesheet', L.stylesheet]
        | readonly ['target', L.target]
        | readonly ['tooltip', L.tooltip]
        | readonly ['truecolor', L.truecolor]
        | readonly ['viewport', L.viewport]
        | readonly ['width', L.width]
        | readonly ['xdotversion', L.xdotversion]
        | readonly ['xlabel', L.xlabel]
    
}

export type Graph_Attributes_ = _pi.List<Graph_Attributes_.L>

export namespace Node_Attributes_ {
    
    export namespace L {
        
        export type color = string
        
        export type colorscheme = string
        
        export type comment = string
        
        export type concentrate = boolean
        
        export type fill_color = string
        
        export type fixed_size = boolean
        
        export type font_color = string
        
        export type font_name = string
        
        export type font_size = number
        
        export type group = string
        
        export type height = number
        
        export type image = string
        
        export type label = string
        
        export namespace labelloc {
            
            export type top = null
            
            export type center = null
            
            export type bottom = null
            
        }
        
        export type labelloc = 
            | readonly ['top', labelloc.top]
            | readonly ['center', labelloc.center]
            | readonly ['bottom', labelloc.bottom]
        
        export type layers = string
        
        export type margin = string
        
        export type nojustify = boolean
        
        export type orientation = number
        
        export type pen_width = number
        
        export type peripheries = number
        
        export type pos = string
        
        export type rects = string
        
        export type regular = boolean
        
        export type root = boolean
        
        export type shape = string
        
        export type showboxes = boolean
        
        export type sides = number
        
        export type skew = number
        
        export type style = string
        
        export type target = string
        
        export type tooltip = string
        
        export type width = number
        
        export type xlabel = string
        
        export type xlp = string
        
    }
    
    export type L = 
        | readonly ['color', L.color]
        | readonly ['colorscheme', L.colorscheme]
        | readonly ['comment', L.comment]
        | readonly ['concentrate', L.concentrate]
        | readonly ['fill color', L.fill_color]
        | readonly ['fixed size', L.fixed_size]
        | readonly ['font color', L.font_color]
        | readonly ['font name', L.font_name]
        | readonly ['font size', L.font_size]
        | readonly ['group', L.group]
        | readonly ['height', L.height]
        | readonly ['image', L.image]
        | readonly ['label', L.label]
        | readonly ['labelloc', L.labelloc]
        | readonly ['layers', L.layers]
        | readonly ['margin', L.margin]
        | readonly ['nojustify', L.nojustify]
        | readonly ['orientation', L.orientation]
        | readonly ['pen width', L.pen_width]
        | readonly ['peripheries', L.peripheries]
        | readonly ['pos', L.pos]
        | readonly ['rects', L.rects]
        | readonly ['regular', L.regular]
        | readonly ['root', L.root]
        | readonly ['shape', L.shape]
        | readonly ['showboxes', L.showboxes]
        | readonly ['sides', L.sides]
        | readonly ['skew', L.skew]
        | readonly ['style', L.style]
        | readonly ['target', L.target]
        | readonly ['tooltip', L.tooltip]
        | readonly ['width', L.width]
        | readonly ['xlabel', L.xlabel]
        | readonly ['xlp', L.xlp]
    
}

export type Node_Attributes_ = _pi.List<Node_Attributes_.L>

export namespace Edge_Attributes_ {
    
    export namespace L {
        
        export type arrowhead = string
        
        export type arrowsize = number
        
        export type arrowtail = string
        
        export type bgcolor = string
        
        export type color = string
        
        export type colorscheme = string
        
        export type comment = string
        
        export type constraint = boolean
        
        export type decorate = boolean
        
        export namespace dir {
            
            export type forward = null
            
            export type back = null
            
            export type both = null
            
            export type none = null
            
        }
        
        export type dir = 
            | readonly ['forward', dir.forward]
            | readonly ['back', dir.back]
            | readonly ['both', dir.both]
            | readonly ['none', dir.none]
        
        export type edge_url = string
        
        export type edge_lp = string
        
        export type edge_target = string
        
        export type edge_tooltip = string
        
        export type head_lp = string
        
        export type headclip = boolean
        
        export type headlabel = string
        
        export type headport = string
        
        export type height = number
        
        export type id = string
        
        export type label = string
        
        export type label_distance = number
        
        export type label_angle = number
        
        export type label_float = boolean
        
        export type labelfloat = boolean
        
        export type labelhref = string
        
        export type label_lp = string
        
        export type layer = string
        
        export type len = number
        
        export type lhead = string
        
        export type lp = string
        
        export type ltail = string
        
        export type minlen = number
        
        export type pen_width = number
        
        export type pos = string
        
        export type same_head = boolean
        
        export type same_tail = boolean
        
        export type showboxes = boolean
        
        export type style = string
        
        export type tail_lp = string
        
        export type tailclip = boolean
        
        export type taillabel = string
        
        export type tailport = string
        
        export type tooltip = string
        
        export type weight = number
        
        export type xlabel = string
        
        export type xlp = string
        
    }
    
    export type L = 
        | readonly ['arrowhead', L.arrowhead]
        | readonly ['arrowsize', L.arrowsize]
        | readonly ['arrowtail', L.arrowtail]
        | readonly ['bgcolor', L.bgcolor]
        | readonly ['color', L.color]
        | readonly ['colorscheme', L.colorscheme]
        | readonly ['comment', L.comment]
        | readonly ['constraint', L.constraint]
        | readonly ['decorate', L.decorate]
        | readonly ['dir', L.dir]
        | readonly ['edge url', L.edge_url]
        | readonly ['edge lp', L.edge_lp]
        | readonly ['edge target', L.edge_target]
        | readonly ['edge tooltip', L.edge_tooltip]
        | readonly ['head lp', L.head_lp]
        | readonly ['headclip', L.headclip]
        | readonly ['headlabel', L.headlabel]
        | readonly ['headport', L.headport]
        | readonly ['height', L.height]
        | readonly ['id', L.id]
        | readonly ['label', L.label]
        | readonly ['label distance', L.label_distance]
        | readonly ['label angle', L.label_angle]
        | readonly ['label float', L.label_float]
        | readonly ['labelfloat', L.labelfloat]
        | readonly ['labelhref', L.labelhref]
        | readonly ['label lp', L.label_lp]
        | readonly ['layer', L.layer]
        | readonly ['len', L.len]
        | readonly ['lhead', L.lhead]
        | readonly ['lp', L.lp]
        | readonly ['ltail', L.ltail]
        | readonly ['minlen', L.minlen]
        | readonly ['pen width', L.pen_width]
        | readonly ['pos', L.pos]
        | readonly ['same head', L.same_head]
        | readonly ['same tail', L.same_tail]
        | readonly ['showboxes', L.showboxes]
        | readonly ['style', L.style]
        | readonly ['tail lp', L.tail_lp]
        | readonly ['tailclip', L.tailclip]
        | readonly ['taillabel', L.taillabel]
        | readonly ['tailport', L.tailport]
        | readonly ['tooltip', L.tooltip]
        | readonly ['weight', L.weight]
        | readonly ['xlabel', L.xlabel]
        | readonly ['xlp', L.xlp]
    
}

export type Edge_Attributes_ = _pi.List<Edge_Attributes_.L>

export namespace Attribute_Value_ {
    
    export type number_ = string
    
    export type string_ = string
    
    export type html_string = string
    
}

export type Attribute_Value_ = 
    | readonly ['number', Attribute_Value_.number_]
    | readonly ['string', Attribute_Value_.string_]
    | readonly ['html string', Attribute_Value_.html_string]

export { 
    Graph_ as Graph, 
    Tree_ as Tree, 
    End_Point_Specification_ as End_Point_Specification, 
    Graph_Attributes_ as Graph_Attributes, 
    Node_Attributes_ as Node_Attributes, 
    Edge_Attributes_ as Edge_Attributes, 
    Attribute_Value_ as Attribute_Value, 
}
