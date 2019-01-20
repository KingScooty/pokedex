// doczrc.js
import { css } from 'docz-plugin-css'

export default {
    plugins: [
        css({
            preprocessor: 'postcss',
            cssmodules: false,
            loaderOpts: {
                /* whatever your preprocessor loader accept */
            }
        })
    ]
}
