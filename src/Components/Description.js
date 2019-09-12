import styled from 'styled-components'
import { Fonts } from '../Theme'

const Description = styled.p.attrs({
    className: 'Description'
})({
    ...Fonts.style.description,
    width: '100%'
})

export default Description