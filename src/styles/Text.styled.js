import styled, { css } from "styled-components";
import { colors, fontSize } from "./Theme";

const BodyTextS = css`
  font-size: ${fontSize.bodyS};
  @media (min-width: 768px) {
    font-size: ${fontSize.bodyM};
  }
`;
const HeadingTextM = css`
  font-size: ${fontSize.bodyM};
  @media (min-width: 768px) {
    font-size: ${fontSize.headingM};
  }
`;
const HeadingTextS = css`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: ${fontSize.headingS};
  }
`;

const MutedText = styled.p`
  color: ${colors.grey};
`;
const SelectedFont = styled.span`
  ${BodyTextS};
  font-weight: bold;
  margin-right: 15px;
  min-width: 70px;
  text-align: right;
  display: inline-block;
`;

const PronunciationText = styled.p`
  ${HeadingTextM};
  color: ${colors.primary};
`;

const PartOfSpeech = styled.h2`
  ${HeadingTextM};
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  &:after {
    content: "";
    flex: 1;
    margin-left: 1rem;
    height: 1px;
    background: ${({ theme }) => theme.line};
  }
`;
const Heading2 = styled(MutedText)`
  ${HeadingTextS};
  margin: 20px 0;
`;

const StyledList = styled.li`
  ${BodyTextS};
  display: flex;
  position: relative;
  margin-bottom: 15px;
  line-height: 24px;
  &::before {
    content: "\\2022";
    color: ${colors.primary};
    margin-right: 20px;
  }
`;
const AccentText = styled.p`
  ${HeadingTextS};
  color: ${colors.primary};
  font-weight: bold;
`;
const ExampleText = styled(MutedText)`
  ${BodyTextS};
  margin: 0 0 20px 30px;
  font-size: 15px;
`;
const SourceText = styled(MutedText)`
  font-size: 15px;
  display: inline-block;
  border-bottom: .5px solid ${colors.grey};
`;

export {
  MutedText,
  SelectedFont,
  StyledList,
  PronunciationText,
  PartOfSpeech,
  Heading2,
  AccentText,
  ExampleText,
  SourceText,
};
