
import * as d_in from "../../../../../interface/generated/liana/schemas/graphviz_high_level/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

import * as t_1 from "../../lowlevel/transformers/fountain_pen"
import * as t_2 from "./graphviz_low_level"


export const Graph = ($: d_in.Graph): d_out.Paragraph => t_1.Graph(t_2.Graph(($)))
