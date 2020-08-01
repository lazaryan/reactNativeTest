import { mockResponseStore } from './mock'

export const store = {
    state: [],
    reducers: {
        setState: (state: any[], payload: any) => state = payload
    },
    effects: dispatch => ({
        async getState() {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return dispatch.store.setState(mockResponseStore.data)
        }
    })
}

export default store
