import styled from 'styled-components'

import { Media } from '../Theme'

const CardImageContainer = styled.div.attrs({
    className: 'CardImageContainer'
})({
    overflow: 'hidden',
},

    Media.greaterThan('lg')({
        height: '18em',
        maxHeight: '18em',
    }),

    Media.between('md','lg')({
        height: '14em',
        maxHeight: '14em',
    }),

    Media.lessThan('md')({
        height: '8em',
        maxHeight: '8em',
    }),
)

export default CardImageContainer