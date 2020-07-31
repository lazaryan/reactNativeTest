import { css } from 'styled-components/native'

export interface ImageStyle {
    container: any,
    image: any,
}

export const container = css``

export const image = css`
    width: 100%;
`

export default {
    default: {
        container,
        image
    }    
}
