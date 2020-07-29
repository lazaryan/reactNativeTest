import { css } from 'styled-components/native'


export interface ButtonStyle {
    container: any,
    button: any,
}

export const container = css``

export const button = css`
    background-color: #fff;
    color: red;
`

export default {
    default: {
        container,
        button,
    }
}
