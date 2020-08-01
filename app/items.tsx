import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'

import { actionHook } from '@store'
import { Text, Load } from '@ui'
import { Props } from './utils'

export const Component = (props: Props) => {
    const [progressLoad, setProgressLoad] = useState(true)
    const state = useSelector(state => state['store'])
    const actionStore = actionHook('store')

    useEffect(() => {
        actionStore({ type: 'getState' })
            .then(() => setProgressLoad(false))
    }, [])

    return (
        <View>
            {progressLoad && <Load /> ||
                <View>
                    <Text>List list</Text>
                </View>
            }
        </View>
    )
}

export default Component
