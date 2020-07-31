export const store = {
    state: [],
    reducers: {
        setState: (state: any[], payload: any) => state = payload
    },
    effects: dispatch => ({
        async getState() {
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.store.setState([1, 2, 3])
        }
    })
}

export default store
