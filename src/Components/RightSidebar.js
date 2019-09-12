import styled from 'styled-components'
import { Media, Colors } from '../Theme'

const RightSidebar = styled.div.attrs({
    className: 'RightSidebar'
})({
    display: 'flex',
    minWidth: '25%',
    width: '25%',
    maxWidth: '20%',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: Colors.grey,
    borderRightStyle: 'solid',
    paddingRight: '2em'
},

    Media.lessThan('md')({
        display: 'none'
    }),

)

export default RightSidebar

