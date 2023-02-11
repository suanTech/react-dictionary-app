import { SynonymContainer, SynonymWrapper } from "../../styles/result";
import { HeadingTextS } from "../../styles/text";

export const Synonym = ({ synonyms }) => {
  return (
    <>
      {synonyms.length ? (
        <SynonymWrapper>
          <HeadingTextS className="muted">Synonyms</HeadingTextS>
          <SynonymContainer>
            {synonyms.map((synonym, i) => (
              <HeadingTextS key={i} className="accent">
                {synonym}
              </HeadingTextS>
            ))}
          </SynonymContainer>
        </SynonymWrapper>
      ) : (
        ""
      )}
    </>
  );
};
