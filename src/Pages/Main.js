import React, { Component } from 'react'
import { Card, CardImage, PageContainer, CardContent, Title, SubTitle } from '../Components'
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
                    </CardContent>
                </Card>
           </PageContainer>
        )
    }
}

export default Main