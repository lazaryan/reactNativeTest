import { css } from 'styled-components/native'

export interface ImageStyle {
    container: any,
    image: any,
}

export const container = css`
    align-items: center;
    justify-content: center;
`

export const image = css`
    width: 100%;
    height: 100%;
`

export default {
    default: {
        container,
        image
    }    
}
