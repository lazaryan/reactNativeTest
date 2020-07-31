import React from 'react'
import styled from 'styled-components/native'
import theme, { Theme } from '@theme'

export interface Props {
    theme?: Theme,
    style?: any,
    styles?: Theme['Text'],
    children: string
}

const defaultProps = {
    styles: theme.text.default
}

const context = { styles: defaultProps.styles }

export const Component = (props: Props) => {
    props.styles && (context.styles = props.styles)

    return (
        <Container>
            <Text {...props}></Text>
        </Container>
    )
}

Component.defaultProps = defaultProps

export const Container = styled.View`${() => context.styles.container}`
export const Text = styled.Text`${() => context.styles.text}`

export default Component
