import React from 'react'
import styled from "@emotion/styled";
import focusOutlineCss from "../utils/focusOutlineCss";
import TextContext from "./TextContext";
import { useTheme } from '@emotion/react';

const LinkNode = styled.a`
  display: block;
  font-weight: bold;
  text-decoration: none;
  color: ${(p) => p.theme.link};
  &:focus {
    ${(p) => focusOutlineCss(p.theme.focus)}
    outline-offset: 0;
  }
`;

export default (props) => {
  const theme = useTheme()

  return <TextContext attrs={{
    color: theme.link
  }}>
    <LinkNode {...props} />
  </TextContext>
}
