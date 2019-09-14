import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardImage, PageContainer, CardContent, Title, SubTitle, Description } from '../Components'
import { Images } from '../Theme'
import CardImageContainer from '../Components/CardImageContainer'

import ArticleActions from '../Redux/ArticleRedux'

class Main extends Component
{

    componentDidMount(){
        console.tron.log(this.props.article)
        
        this.props.getArticles()
    }

    renderCard(article){
        return(
            <Card key={article.id}>
                <CardImageContainer>
                    <CardImage key={article.id} src={article.imageUrl} />
                </CardImageContainer>
                <CardContent>
                    <Title>{article.title}</Title>
                    <SubTitle>{article.subtitle}</SubTitle>
                    <Description>
                        {article.description} 
                    </Description>
                </CardContent>
            </Card>
        )
    }

    render(){
        return(
            <PageContainer>
                {
                    this.props.article.payload !== null ? this.props.article.payload.map(article => this.renderCard(article)) : null
                }
           </PageContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    article: state.article
})

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(ArticleActions.articleRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)