import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'

import { Button, Text } from '@ui'
import { actionHook } from '@store'

export const Component = () => {
    const state = useSelector(state => state['store'])
    const actionStore = actionHook('store')

    useEffect(() => {
        actionStore({ type: 'setState', payload: [1, 2, 3] })
    }, [])

    console.log(state)

    return (
        <View style={{ justifyContent: 'center', height: '100%' }}>
            <Text style={{ textAlign: 'center' }}>Найти экскурсию</Text>
            <Button title="Поиск" onPress={() => {} } />
        </View>
    )
}

export default Component
