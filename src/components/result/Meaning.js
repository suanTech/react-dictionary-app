import { ListContainer, MeaningWrapper } from "../../styles/result";
import {
  BodyTextM,
  HeadingTextS,
  PartOfSpeech,
  StyledBullet,
  StyledList,
} from "../../styles/text";
import { Synonym } from "./Synonym";

export const Meaning = ({ result }) => {
  return (
    <>
      {result.meanings.map((meaning, i) => {
        return (
          <MeaningWrapper key={i}>
            <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
            <HeadingTextS className="muted">Meaning</HeadingTextS>
            <MeaningList definitions={meaning.definitions} />
            <Synonym synonyms={meaning.synonyms} />
          </MeaningWrapper>
        );
      })}
    </>
  );
};

const MeaningList = ({ definitions }) => {
  return (
    <ListContainer>
      {definitions.map((def, index) => (
        <ul key={index}>
          <StyledList className="main">
            <StyledBullet />
            <BodyTextM>{def.definition}</BodyTextM>
          </StyledList>
          {def.example && (
            <StyledList className="sub">
              <BodyTextM className="muted">"{def.example}"</BodyTextM>
            </StyledList>
          )}
        </ul>
      ))}
    </ListContainer>
  );
};
