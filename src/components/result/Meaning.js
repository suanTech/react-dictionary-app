import {
  ListContainer,
  MeaningWrapper,
  SynonymWrapper,
} from "../../styles/result";
import {
  BodyTextM,
  HeadingTextS,
  PartOfSpeech,
  StyledBullet,
  StyledList,
} from "../../styles/text";

export const Meaning = ({ result }) => {
  return (
    <>
      {result.meanings.map((meaning, i) => {
        if (i > 1) {
          return null;
        }
        return (
          <MeaningWrapper key={i}>
            <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
            <HeadingTextS className="muted">Meaning</HeadingTextS>
            <MeaningList definitions={meaning.definitions} />
            {meaning.synonyms.length ? (
              <SynonymWrapper>
                <HeadingTextS className="muted">Synonyms</HeadingTextS>
                <HeadingTextS className="accent">
                  {meaning.synonyms.slice(0, 1)}
                </HeadingTextS>
              </SynonymWrapper>
            ) : (
              ""
            )}
          </MeaningWrapper>
        );
      })}
    </>
  );
};

const MeaningList = ({ definitions }) => {
  return (
    <>
      {definitions.map((def, index) => (
        <ListContainer key={index}>
          <StyledList className="main">
            <StyledBullet />
            <BodyTextM>{def.definition}</BodyTextM>
          </StyledList>
          {def.example && (
            <StyledList className="sub">
              <BodyTextM className="muted">"{def.example}"</BodyTextM>
            </StyledList>
          )}
        </ListContainer>
      ))}
    </>
  );
};
