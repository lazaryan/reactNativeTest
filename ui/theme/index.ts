import { default as button, ButtonStyle } from './button'
import { default as text, TextStyle } from './text'
import { default as image, ImageStyle } from './image'

export interface Theme {
    Button: ButtonStyle,
    Text: TextStyle,
    Image: ImageStyle,
}

export default {
    button,
    text,
    image,
}
