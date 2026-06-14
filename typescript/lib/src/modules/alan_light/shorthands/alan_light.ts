import * as pt from 'pareto-core-shorthands/dist/unconstrained'
import p_create_symbol from 'pareto-core/dist/specials/create_symbol'

import * as d_target from "../../../interface/generated/liana/schemas/alan_light/data"

export const root = (
    numerical_types: pt.Raw_Or_Normal_Dictionary<d_target.Root.numerical_types.D>,
    root: d_target.Node
): d_target.Root => ({
    'numerical types': pt.dictionary.literal(numerical_types),
    'root': root
})

export const numerical_type = (
): d_target.Root.numerical_types.D => (p_create_symbol())

export namespace prop {

    export const collection = (
        node: d_target.Node,
        key: d_target.Identifier,
    ): d_target.Node.properties.D => ({
        'type': ['collection', {
            'node': node,
            'key': key
        }]
    })

    export const group = (
        node: d_target.Node,
    ): d_target.Node.properties.D => ({
        'type': ['group', {
            'node': node,
        }]
    })

    export const text = (
    ): d_target.Node.properties.D => ({
        'type': ['text', {
            'constraint': pt.optional.literal.not_set(),
        }]
    })

    export const text_constrained = (
        path: d_target.Path,
        dictionary: d_target.Identifier,
    ): d_target.Node.properties.D => ({
        'type': ['text', {
            'constraint': pt.optional.literal.set({
                'path': path,
                'dictionary': dictionary,
            }),
        }]
    })

    export const state_group = (
        states: pt.Raw_Or_Normal_Dictionary<d_target.Node.properties.D.type_.state_group.states.D>,
    ): d_target.Node.properties.D => ({
        'type': ['state group', {
            'states': pt.dictionary.literal(states),
        }]
    })

}

export const state = (
    constraints: pt.Raw_Or_Normal_Dictionary<d_target.Node.properties.D.type_.state_group.states.D.constraints.D>,
    node: d_target.Node,
): d_target.Node.properties.D.type_.state_group.states.D => ({
    'constraints': pt.dictionary.literal(constraints),
    'node': node,
})

export const constraint = (
    up_steps: pt.Raw_Or_Normal_List<d_target.Path.up_steps.L>,
    selection_steps: pt.Raw_Or_Normal_List<d_target.Path.selection_steps.L>,
): d_target.Node.properties.D.type_.state_group.states.D.constraints.D => ({
    'path': {
        'up steps': pt.list.literal(up_steps),
        'context': ['sibling', p_create_symbol()],
        'selection steps': pt.list.literal(selection_steps),
    }
})

export const path = (
    up_steps: pt.Raw_Or_Normal_List<d_target.Path.up_steps.L>,
    context: d_target.Path.context,
    selection_steps: pt.Raw_Or_Normal_List<d_target.Path.selection_steps.L>,
): d_target.Path => ({
    'up steps': pt.list.literal(up_steps),
    'context': context,
    'selection steps': pt.list.literal(selection_steps),
})

export const node = (
    properties: pt.Raw_Or_Normal_Dictionary<d_target.Node.properties.D>,
): d_target.Node => ({
    'properties': pt.dictionary.literal(properties),
})


// export namespace step {

//     export const group = (


//     ): d_target.Path.selection_steps.L => ['group', {}]
// }