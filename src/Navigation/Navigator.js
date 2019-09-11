import { Router } from "@reach/router"
import React, { Component } from 'react'

import Main from '../Pages/Main'
import About from '../Pages/About'

class Navigator extends Component
{

    render(){
        return(
            <Router style={{width: '100%'}}>
                <Main path='/'/>
                <About path='/about' />
            </Router>
        )
    }
}

export default Navigator