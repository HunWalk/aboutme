import styled from 'styled-components'

import { Media } from '../Theme'

const CardImageContainer = styled.div.attrs({
    className: 'CardImageContainer'
})({
    maxHeight: '20em',
    overflow: 'hidden',
},
    Media.lessThan('md')({
        maxHeight: '8em'
    }),
)

export default CardImageContainer