import { init } from '@rematch/core'
import models from './models'

export interface Action {
    type: string,
    payload?: any | undefined
}

const store = init({
    models,
})

export const actionHook = (model: string) => async (action: Action) => new Promise((res, rej) => {
    const result = store.dispatch[model][action.type](action.payload)

    return result && result.then && result.then(res).catch(rej) || res(result)
})

export default store
