import styled from 'styled-components';

import { Fonts, Media } from '../Theme'

const Title = styled.h1.attrs({
  className: 'Title'
})({
  ...Fonts.style.smallTitle
},

  Media.lessThan('lg')({
    fontSize: '1em'
  }),

  Media.lessThan('md')({
    fontSize: '1em'
  }),
);

export default Title;

