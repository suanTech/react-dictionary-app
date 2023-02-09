import styled from "styled-components";
import { colors, margin } from "./Theme";

// wrapper
const PhoneticWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${margin.l};
  @media(min-width: 768px) {
    margin-bottom: ${margin.xl};
  }
`;
const MeaningWrapper = styled.div`
  margin-top: ${margin.m};
`;
const ListContainer = styled.ul`
  width: 100%;
  @media (min-width: 768px) {
    padding: 10px 0 0 20px;
  }
`;
const SynonymWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 25px;
`;
const SourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${({ theme }) => theme.line};
  margin-top: 35px;
  padding: 25px 0;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & a {
    font-size: 15px;
    border-bottom: 0.5px solid ${({ theme }) => theme.text};
    &:hover {
      color: ${colors.primary};
    }
  }
`;

export {
  PhoneticWrapper,
  ListContainer,
  MeaningWrapper,
  SynonymWrapper,
  SourceWrapper,
  LinkContainer,
};
