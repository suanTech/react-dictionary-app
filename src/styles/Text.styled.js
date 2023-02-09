import styled from "styled-components";
import { colors, fontSize, margin } from "./Theme";

// responsive font sizes
const SmallText = styled.p`
  font-size: ${fontSize.bodyS};
  display: inline-block;
  border-bottom: 0.5px solid ${colors.grey};
  &.muted {
    color: ${colors.grey};
  }
`;
const BodyTextS = styled.p`
  font-size: ${fontSize.bodyS};
  &.selected {
    font-weight: bold;
    padding: 8px;
    &:hover {
      color: ${colors.primary};
    }
  }
  @media (min-width: 768px) {
    font-size: ${fontSize.bodyM};
  }
`;
const BodyTextM = styled.p`
  font-size: 15px;
  &.muted {
    color: ${colors.grey};
  }
  &.error {
    position: absolute;
    top: 50px;
    left: 0;
    color: ${colors.accent};
  }
  @media (min-width: 768px) {
    font-size: ${fontSize.bodyM};
    &.error {
      top: 70px;
    }
`;
const HeadingTextS = styled.p`
  font-size: 16px;
  margin: ${margin.m} 0 ${margin.s} 0;
  &.muted {
    color: ${colors.grey};
  }
  &.accent {
    color: ${colors.primary};
    font-weight: bold;
  }
  @media (min-width: 768px) {
    font-size: ${fontSize.headingS};
    margin: ${margin.xl} 0 ${margin.s} 0;
  }
`;
const HeadingTextM = styled.p`
  font-size: ${fontSize.bodyM};
  &.accent {
    color: ${colors.primary};
  }
  @media (min-width: 768px) {
    font-size: ${fontSize.headingM};
  }
`;

// input text style
const SearchInput = styled.input`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.grey};
  }
  @media (min-width: 768px) {
    font-size: ${fontSize.headingS};
  }
`;

const PartOfSpeech = styled(HeadingTextM)`
  display: flex;
  align-items: center;
  margin-bottom: ${margin.l};
  font-weight: bold;
  &:after {
    content: "";
    flex: 1;
    margin-left: 1rem;
    height: 1px;
    background: ${({ theme }) => theme.line};
  }
`;

const StyledList = styled.li`
  display: flex;
  position: relative;
  margin-bottom: ${margin.s};
  line-height: 24px;
`;
const StyledBullet = styled.span`
  display: block;
  align-self: flex-start;
  content: "";
  min-width: 5px;
  min-height: 5px;
  margin: 10px 20px 10px 0;
  border-radius: 50%;
  background-color: ${colors.primary};
`;


export { SmallText, BodyTextS, BodyTextM, HeadingTextS, HeadingTextM, SearchInput, StyledList, StyledBullet, PartOfSpeech };
