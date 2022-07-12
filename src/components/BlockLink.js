import React from 'react'
import styled from "@emotion/styled";
import focusOutlineCss from "../utils/focusOutlineCss";
import TextContext from "./TextContext";
import { useTheme } from '@emotion/react';

const LinkNode = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  &:focus {
    ${(p) => focusOutlineCss(p.theme.focus)}
    outline-offset: 0;
  }
`;

const BlockLink = (props) =>
  <TextContext attrs={{
    color: 'link'
  }}>
    <LinkNode {...props} />
  </TextContext>


export default BlockLink
