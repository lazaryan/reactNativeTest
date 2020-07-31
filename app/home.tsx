import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'

import { Button, Text, Image } from '@ui'
import { actionHook } from '@store'
import HomeLogo from '@assets/img/home.svg'
import theme from '@theme'

export const Component = () => {
    const state = useSelector(state => state['store'])
    const actionStore = actionHook('store')

    useEffect(() => {
        actionStore({ type: 'setState', payload: [1, 2, 3] })
    }, [])

    console.log(state)

    return (
        <View style={{ justifyContent: 'center', height: '100%', alignItems: 'center', backgroundColor: theme.colors.main }}>
            <Image type="svg" url={HomeLogo} style={{ width: 100, height: 100, backgroundColor: '#fff', padding: 30, borderRadius: 100, borderColor: theme.colors.border, borderWidth: 1 }} />
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Найти экскурсию</Text>
            <Button title="Поиск" onPress={() => {} } />
        </View>
    )
}

export default Component
