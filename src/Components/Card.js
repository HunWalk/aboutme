import styled from 'styled-components'
import { Colors } from '../Theme'

const Card = styled.div({
    display: 'flex',
    backgroundColor: Colors.light,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
    height: 'auto',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'
})

export default Card