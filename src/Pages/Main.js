import React, { Component } from 'react'
import { Card, CardImage, PageContainer, CardContent, Title, SubTitle, Description } from '../Components'
import { Images } from '../Theme'
import CardImageContainer from '../Components/CardImageContainer'

class Main extends Component
{
    render(){
        return(
            <PageContainer>
                <Card>
                    <CardImageContainer>
                        <CardImage src={Images.lightbulb} />
                    </CardImageContainer>
                    <CardContent>
                        <Title>BUILD SOMETHING AMAZING</Title>
                        <SubTitle>A regular old blog article</SubTitle>
                        <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        </Description>
                    </CardContent>
                </Card>
           </PageContainer>
        )
    }
}

export default Main