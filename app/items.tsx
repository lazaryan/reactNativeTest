import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { View, ScrollView } from 'react-native'

import { actionHook } from '@store'
import { Text, Load, Image } from '@ui'
import { Props } from './utils'
import theme from '@theme'

export const Component = (props: Props) => {
    const state = useSelector(state => state['store'])
    const actionStore = actionHook('store')
    
    const [progressLoad, setProgressLoad] = useState(true)

    useEffect(() => {
        actionStore({ type: 'getState' })
            .then(() => setProgressLoad(false))
    }, [])

    return (
        progressLoad && <Load /> ||
            <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }}>
                {state.map((item, index: number) =>
                    <View key={index} style={{ marginTop: 20, borderRadius: 20, backgroundColor: '#fff', overflow: 'hidden', flexDirection: 'row' }}>
                        <View>
                            <Image url={item.image} style={{ width: 110, height: 110 }} />
                        </View>
                        <View style={{ paddingHorizontal: 10, width: 250 }}>
                            <Text styles={theme.text.title}>{ item.title }</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{ color: '#3290FF', marginTop: 15 }}>{ item.description }</Text>
                        </View>
                    </View>
                )}
            </ScrollView>
    )
}

export default Component
