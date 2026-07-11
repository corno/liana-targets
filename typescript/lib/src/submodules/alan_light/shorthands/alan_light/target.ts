import * as p_ from 'pareto-core-shorthands/unconstrained_target'


import type * as s_target from "../../../../interface/schemas/alan_light.js"

export const root = (
    numerical_types: p_.Normal_Dictionary<s_target.Root.numerical_types.D>,
    root: s_target.Node
): s_target.Root => ({
    'numerical types': p_.dictionary(numerical_types),
    'root': root
})

export const numerical_type = (
): s_target.Root.numerical_types.D => (p_.nothing())

export namespace prop {

    export const collection = (
        node: s_target.Node,
        key: s_target.Identifier,
    ): s_target.Node.properties.D => ({
        'type': ['collection', {
            'node': node,
            'key': key
        }]
    })

    export const group = (
        node: s_target.Node,
    ): s_target.Node.properties.D => ({
        'type': ['group', {
            'node': node,
        }]
    })

    export const text = (
    ): s_target.Node.properties.D => ({
        'type': ['text', {
            'constraint': p_.optional.not_set(),
        }]
    })

    export const text_constrained = (
        path: s_target.Path,
        dictionary: s_target.Identifier,
    ): s_target.Node.properties.D => ({
        'type': ['text', {
            'constraint': p_.optional.set({
                'path': path,
                'dictionary': dictionary,
            }),
        }]
    })

    export const state_group = (
        states: p_.Normal_Dictionary<s_target.Node.properties.D.type_.state_group.states.D>,
    ): s_target.Node.properties.D => ({
        'type': ['state group', {
            'states': p_.dictionary(states),
        }]
    })

}

export const state = (
    constraints: p_.Normal_Dictionary<s_target.Node.properties.D.type_.state_group.states.D.constraints.D>,
    node: s_target.Node,
): s_target.Node.properties.D.type_.state_group.states.D => ({
    'constraints': p_.dictionary(constraints),
    'node': node,
})

export const constraint = (
    up_steps: p_.Normal_List<s_target.Path.up_steps.L>,
    selection_steps: p_.Normal_List<s_target.Path.selection_steps.L>,
): s_target.Node.properties.D.type_.state_group.states.D.constraints.D => ({
    'path': {
        'up steps': p_.list(up_steps),
        'context': ['sibling', p_.nothing()],
        'selection steps': p_.list(selection_steps),
    }
})

export const path = (
    up_steps: p_.Normal_List<s_target.Path.up_steps.L>,
    context: s_target.Path.context,
    selection_steps: p_.Normal_List<s_target.Path.selection_steps.L>,
): s_target.Path => ({
    'up steps': p_.list(up_steps),
    'context': context,
    'selection steps': p_.list(selection_steps),
})

export const node = (
    properties: p_.Normal_Dictionary<s_target.Node.properties.D>,
): s_target.Node => ({
    'properties': p_.dictionary(properties),
})


// export namespace step {

//     export const group = (


//     ): s_target.Path.selection_steps.L => ['group', {}]
// }