import styled from "styled-components";
import { colors } from "./Theme";

// wrapper
const PhoneticWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const MeaningWrapper = styled.div`
  margin: 30px 0;
`;
const ListContainer = styled.ul`
  @media (min-width: 768px) {
    padding-left: 20px;
  }
`;
const SynonymWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  & p {
    margin-right: 25px;
  }
`;
const SourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${({ theme }) => theme.line};
  padding: 20px 0;
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
