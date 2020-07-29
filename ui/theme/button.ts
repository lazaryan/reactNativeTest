import { css } from 'styled-components/native'


export interface ButtonStyle {
    container: any,
    button: any,
    text: any,
}

export const container = css`
    justify-content: center;
    align-items: center;
`

export const button = css`
    border-radius: 25px; 
    background-color: #2ED514;
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
