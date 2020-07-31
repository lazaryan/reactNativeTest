import React from 'react'
import styled from 'styled-components/native'

import theme, { Theme } from '@theme'
import Text from './text'

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

const context = { styles: defaultProps.styles }

export const Component: React.SFC<ButtonProps> = (props = defaultProps) => {
    props.styles && (context.styles = props.styles)
    
    return (
        <Container>
            <Button {...props}>
                <ButtonText>{ props.title }</ButtonText>
            </Button>
        </Container>
    )
}

Component.defaultProps = defaultProps

export const Container = styled.View`${(props: Props) => context.styles.container}`;
export const Button = styled.TouchableOpacity`${(props: ButtonProps) => context.styles.button}`;
export const ButtonText = styled(Text)`${(props: Props) => context.styles.text}`;

export default Component
