import styled from 'styled-components'
import { Media, Colors } from '../Theme'

const LeftSidebar = styled.div.attrs({
    className: 'LeftSidebar'
})({
    display: 'flex',
    minWidth: '17%',
    width: '17%',
    maxWidth: '17%',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: Colors.grey,
    borderRightStyle: 'solid',
},

    Media.lessThan('md')({
        display: 'none'
    }),

)

export default LeftSidebar

