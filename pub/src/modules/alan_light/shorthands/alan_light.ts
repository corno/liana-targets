import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../../../interface/generated/liana/schemas/alan_light/data"

export const root = (
    numerical_types: _p.Raw_Or_Normal_Dictionary<d_target.Root.numerical_types.D>,
    root: d_target.Node
): d_target.Root => ({
    'numerical types': _p.dictionary.literal(numerical_types),
    'root': root
})

export const numerical_type = (
): d_target.Root.numerical_types.D => (null)

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
            'constraint': _p.optional.literal.not_set(),
        }]
    })

    export const text_constrained = (
        path: d_target.Path,
        dictionary: d_target.Identifier,
    ): d_target.Node.properties.D => ({
        'type': ['text', {
            'constraint': _p.optional.literal.set({
                'path': path,
                'dictionary': dictionary,
            }),
        }]
    })

    export const state_group = (
        states: _p.Raw_Or_Normal_Dictionary<d_target.Node.properties.D.type_.state_group.states.D>,
    ): d_target.Node.properties.D => ({
        'type': ['state group', {
            'states': _p.dictionary.literal(states),
        }]
    })

}

export const state = (
    constraints: _p.Raw_Or_Normal_Dictionary<d_target.Node.properties.D.type_.state_group.states.D.constraints.D>,
    node: d_target.Node,
): d_target.Node.properties.D.type_.state_group.states.D => ({
    'constraints': _p.dictionary.literal(constraints),
    'node': node,
})

export const constraint = (
    up_steps: _p.Raw_Or_Normal_List<d_target.Path.up_steps.L>,
    selection_steps: _p.Raw_Or_Normal_List<d_target.Path.selection_steps.L>,
): d_target.Node.properties.D.type_.state_group.states.D.constraints.D => ({
    'path': {
        'up steps': _p.list.literal(up_steps),
        'context': {
            'sibling': null,
            'state constraint': {   
                'name': "FIXME",
            },
        },
        'selection steps': _p.list.literal(selection_steps),
    }
})

export const path = (
    up_steps: _p.Raw_Or_Normal_List<d_target.Path.up_steps.L>,
    context: d_target.Path.context,
    selection_steps: _p.Raw_Or_Normal_List<d_target.Path.selection_steps.L>,
): d_target.Path => ({
    'up steps': _p.list.literal(up_steps),
    'context': context,
    'selection steps': _p.list.literal(selection_steps),
})

export const node = (
    properties: _p.Raw_Or_Normal_Dictionary<d_target.Node.properties.D>,
): d_target.Node => ({
    'properties': _p.dictionary.literal(properties),
})


// export namespace step {

//     export const group = (


//     ): d_target.Path.selection_steps.L => ['group', {}]
// }