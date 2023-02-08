import { ListContainer, MeaningWrapper, SynonymWrapper } from "../../styles/result.styled";
import { AccentText, ExampleText, Heading2, PartOfSpeech, StyledList } from "../../styles/text.styled";

export const Meaning = ({ result }) => {
  return (
    <>
      {result.meanings.map((meaning, i) => {
        if (i < 2) {
          return (
            <MeaningWrapper key={i}>
              <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
              <Heading2>Meaning</Heading2>
              <MeaningList definitions={meaning.definitions} />
              {meaning.synonyms.length ? (
                <SynonymWrapper>
                  <Heading2>Synonyms</Heading2>
                  <AccentText>{meaning.synonyms.slice(0, 1)}</AccentText>
                </SynonymWrapper>
              ) : (
                ""
              )}
            </MeaningWrapper>
          );
        } else return null;
      })}
    </>
  );
};

const MeaningList = ({ definitions }) => {
  return (
    <>
      <ListContainer>
        {definitions.map((def, index) => (
          <div key={index}>
            <StyledList>{def.definition}</StyledList>
            {def.example ? (
              <ExampleText>"{def.example}"</ExampleText>
            ) : (
              ""
            )}
          </div>
        ))}
      </ListContainer>
    </>
  );
};
