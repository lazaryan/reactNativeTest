import { default as button, ButtonStyle } from './button'
import { default as text, TextStyle } from './text'
import { default as image, ImageStyle } from './image'
import { default as load, LoadStyle } from './load'

import colors from './colors'

export interface Theme {
    button: ButtonStyle,
    text: TextStyle,
    image: ImageStyle,
    load: LoadStyle,
}

export default {
    button,
    text,
    image,
    load,
    colors,
}
