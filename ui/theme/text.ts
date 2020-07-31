import { css } from 'styled-components/native'


export interface TextStyle {
    container: any,
    text: any,
}

export const container = css`
    padding: 5px 0;
`

export const text = css`
    font-family: Roboto;
    color: #808080;
    font-size: 16px;
`

export default {
    default: {
        container,
        text
    },
    title: {
        container: css`
            ${container}

            flex: 1;
            justify-content: center;
        `,
        text: css`
            ${text}

            color: #292929;
            font-weight: bold;
        `
    }
}