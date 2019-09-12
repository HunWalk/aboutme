import styled from 'styled-components'

const PageContainer = styled.div.attrs({
    className: 'PageContainer'
})({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '2em',
    minHeight: '100vh'
})

export default PageContainer