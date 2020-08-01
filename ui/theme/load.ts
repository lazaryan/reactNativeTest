import { css } from 'styled-components/native'
import colors from './colors'

export interface LoadStyle {
    container: any,
    image: any
}

export const container = css`
    width: 100%;
    height: 100%;
    background-color: ${colors.light};
    align-items: center;
    justify-content: center;
`

export const image = css`
    width: 40px;
    height: 40px;
`

export default {
    default: {
        container,
        image
    }
}