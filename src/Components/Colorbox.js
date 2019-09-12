import styled from 'styled-components'

const Colorbox = styled.div.attrs({
    className: 'Colorbox',
})( props => ({
    display: 'flex',
    backgroundColor: typeof props.color === 'string' ? props.color : '#ffffff',
    width: typeof props.width !== 'undefined' ? props.width : 'auto',
    height: typeof props.height !== 'undefined' ? props.height : 'auto',
    padding: typeof props.padding !== 'undefined' ? props.padding: null,
    paddingLeft: typeof props.paddingLeft !== 'undefined' ? props.padding: null,
    paddingRight: typeof props.paddingRight !== 'undefined' ? props.padding: null,
    paddingTop: typeof props.paddingTop !== 'undefined' ? props.padding: null,
    paddingBottom: typeof props.paddingBottom !== 'undefined' ? props.padding: null,
}))

export default Colorbox