import { css } from 'styled-components/native'
import colors from './colors'

export interface ButtonStyle {
    container: any,
    button: any,
    text: any,
}

export const container = css`
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`

export const button = css`
    border-radius: 100px; 
    background-color: ${colors.active};
    padding: 12px;
    width: 200px;
`

export const text = css`
    font-size: 20px;
    color: #fff;
    text-align: center;
`

export default {
    default: {
        container,
        button,
        text
    }
}
