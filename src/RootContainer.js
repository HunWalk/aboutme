import React, {Component} from 'react'
import ReactSVG from 'react-svg'
import WebFont from 'webfontloader'

import { Container, LeftSidebar, RightSidebar, RouterLink, ProfilePic, Colorbox, VerticalContainer, Title, SmallTitle, Group } from './Components'
import { Images, Svgs, Colors } from './Theme'
import Navigator from './Navigation/Navigator'
import VerticalGroup from './Components/VerticalGroup';
import StatusBar from './SmartComponents/StatusBar'


class RootContainer extends Component
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
        <LeftSidebar>

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

        </LeftSidebar>

        <Navigator />

        <RightSidebar>
          <VerticalContainer>

            <Title>éppen ezen dolgozom</Title>
            <Colorbox padding={'1em'} color={Colors.green}>
              <Title style={{fontSize: '1em'}}>Ez az oldal</Title>  
            </Colorbox>
            
            <Group>
              <SmallTitle>Folyamatban</SmallTitle>
              <StatusBar />
            </Group>
          </VerticalContainer>
          
        </RightSidebar>
        
      </Container>
    );
  }

}

export default RootContainer;
