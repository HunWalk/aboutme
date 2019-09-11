import styled from 'styled-components';

import { Fonts, Media } from '../Theme'

const Title = styled.h1({
  ...Fonts.style.title
},
  Media.lessThan('md')({
    fontSize: '2em'
  }),
);

export default Title;

