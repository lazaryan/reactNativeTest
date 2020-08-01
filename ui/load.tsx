import React from 'react'
import styled from 'styled-components/native'

import { Theme } from '@theme'
import UIImage from './image'
import LoadSVG from '@assets/img/load.svg'


export interface Props {
    theme?: Theme,
    styles?: Theme['load']
}

export const Component = (props: Props) => {
    return (
        <Container>
            <Image type="svg" url={LoadSVG} />
        </Container>
    )
}

export const Container = styled.View`${(props: Props) => props.theme?.load.default.container}`
export const Image = styled(UIImage)`${(props: Props) => props.theme?.load.default.image}`

export default Component
