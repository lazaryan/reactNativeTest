import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

import theme, { Theme } from '@theme'

export interface Props {
    theme?: Theme,
    style?: any,
    styles?: Theme['Image'],
    type: 'image' | 'svg'
    url: string
}

const defaultProps = {
    styles: theme.image.default,
    type: 'image'
}

const context = { styles: defaultProps.styles }

export const Component = (props: Props) => {
    props.styles && (context.styles = props.styles)

    return (
        <View style={props.style}>
            ${props.type == 'image' && <Image source={{ uri: props.url }} />}
        </View>
    )
}

Component.defaultProps = defaultProps

export const Container = styled.View`${() => context.styles.container}`
export const Image = styled.Image`${() => context.styles.image}`
