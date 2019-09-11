import React, {Component} from 'react'
import { defaultBreakpoints, generateMedia } from "styled-media-query";
import ReactSVG from 'react-svg'
import WebFont from 'webfontloader'

import { Container, Sidebar, RouterLink, ProfilePic, SidebarSvgContainer } from './Components'
import { Images, Svgs } from './Theme'
import Navigator from './Navigation/Navigator'
import VerticalGroup from './Components/VerticalGroup';

const media = generateMedia(defaultBreakpoints);


class App extends Component
{
  
  UNSAFE_componentWillMount(){

    document.body.style.margin = 0;

    WebFont.load({
      google: {
        families: ['Montserrat:400,900']
      }
    });
  }

  render(){
    return (
      <Container>
        <Sidebar>

          <VerticalGroup>
            <ProfilePic src={Images.profile} />
          </VerticalGroup>

          <VerticalGroup>
            <RouterLink to='/'>Home</RouterLink>
            <RouterLink to='about'>About</RouterLink>
          </VerticalGroup>

          <VerticalGroup>
            <RouterLink to='login'>Login</RouterLink>
          </VerticalGroup>

        </Sidebar>

        <Navigator />

        <Sidebar>
          <SidebarSvgContainer>
            <ReactSVG style={{height: '100vh'}} src={Svgs.motive}/>
          </SidebarSvgContainer>
        </Sidebar>
        
      </Container>
    );
  }

}

export default App;
