import styled from "@emotion/styled";
import focusOutlineCss from "../utils/focusOutlineCss";

const BlockLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  &:focus {
    ${(p) => focusOutlineCss(p.theme.focus)}
    outline-offset: 0;
  }
`;

export default BlockLink
