import React from 'react'
import { View } from 'react-native'

import { Button, Text, Image } from '@ui'
import HomeLogo from '@assets/img/home.svg'
import theme from '@theme'
import { Props } from './utils'

export const Component = (props: Props) => {

    return (
        <View style={{ justifyContent: 'center', height: '100%', alignItems: 'center', backgroundColor: theme.colors.main }}>
            <Image type="svg" url={HomeLogo} style={{ width: 100, height: 100, backgroundColor: '#fff', padding: 30, borderRadius: 100, borderColor: theme.colors.border, borderWidth: 1 }} />
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Найти экскурсию</Text>
            <Button title="Поиск" onPress={() => props.navigation.navigate('Items')} />
        </View>
    )
}

export default Component
