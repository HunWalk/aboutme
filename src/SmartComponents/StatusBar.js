import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors } from '../Theme'

const BarContainer = styled.div.attrs({
    className: 'BarContainer'
})({
    height: '3em',
    width: '70%',
    backgroundColor: Colors.lightGrey
})

const Fill = styled.div.attrs({
    className: 'Fill'
})( props => ({
    height: '100%',
    width: props.percentage + '%',
    backgroundColor: Colors.blue
}))

class StatusBar extends Component
{
    render(){
        return(
            <BarContainer>
                <Fill percentage={'22'}/>
            </BarContainer>
        )
    }
}

export default StatusBar

export {
    BarContainer,
    Fill
}