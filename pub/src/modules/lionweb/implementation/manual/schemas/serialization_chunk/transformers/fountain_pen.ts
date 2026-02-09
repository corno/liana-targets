import * as d_in from "../../../../../../../interface/generated/liana/schemas/lionweb/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as t_json_to_fountain_pen_block from "pareto-json/dist/implementation/manual/schemas/json/transformers/fountain_pen"
import * as t_lionweb_to_json from "./json"


export const SerializationChunks = ($: d_in.SerializationChunks): d_out.Paragraph => t_json_to_fountain_pen_block.Document(t_lionweb_to_json.SerializationChunks($))