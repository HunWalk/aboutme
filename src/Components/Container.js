import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'container'
})({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden'
})

export default Container

