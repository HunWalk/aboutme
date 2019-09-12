import styled from 'styled-components';

import { Fonts, Media } from '../Theme'

const SubTitle = styled.h1.attrs({
  className: 'Title'
})({
  ...Fonts.style.subTitle
},

  Media.lessThan('lg')({
    fontSize: '1.5em'
  }),

  Media.lessThan('md')({
    fontSize: '1em'
  }),
);

export default SubTitle;

