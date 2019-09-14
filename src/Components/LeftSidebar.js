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

    Media.greaterThan('lg')({
        minWidth: '13%',
        width: '13%',
        maxWidth: '13%',
    }),

    Media.between('md','lg')({
        minWidth: '15%',
        width: '15%',
        maxWidth: '15%',
    }),


    Media.lessThan('md')({
        display: 'none'
    }),

)

export default LeftSidebar

