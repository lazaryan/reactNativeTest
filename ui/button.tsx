import React from 'react'
import styled from 'styled-components/native'
import theme, { Theme } from '@theme'

export interface Props {
    theme?: Theme,
    styles?: Theme['Button']
}

export interface ButtonProps extends Props {
    title: string,
    onPress: any,
    disabled?: boolean
}

const defaultProps = {
    title: '',
    onPress: () => {},
    styles: theme.button.default,
    disabled: false
}

export const Component: React.SFC<ButtonProps> = (props = defaultProps) => {
    return (
        <Container>
            <Button {...props} />
        </Container>
    )
}

Component.defaultProps = defaultProps

export const Container = styled.View`${(props: Props) => props.styles?.container}`;
export const Button = styled.Button`${(props: ButtonProps) => props.styles?.button}`;

export default Component
