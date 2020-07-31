import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { View } from 'react-native'
import { Button } from '@ui'
import { actionHook } from '@store'

export const Component = () => {
    const state = useSelector(state => state['store'])
    const actionStore = actionHook('store')

    useEffect(() => {
        actionStore({ type: 'setState', payload: [1, 2, 3] })
    }, [])

    console.log(state)

    return (
        <View>
            <Button title="Поиск" onPress={() => {} } />
        </View>
    )
}

export default Component
