import styled from 'styled-components'
import { Link } from '@reach/router'

import { Fonts } from '../Theme'

const RouterLink = styled(Link).attrs({
    className: 'RouterLink'
})({
    ...Fonts.style.sidebarLink,
    paddingBottom: '1em'
})

export default RouterLink