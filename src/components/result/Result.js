import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Context";
import axios from "axios";
import { Phonetic } from "./Phonetic";
import { Meaning } from "./Meaning";
import newWindowIcon from "./../../assets/images/icon-new-window.svg?url";

// style
import { SmallText } from "../../styles/text";
import { LinkContainer, SourceWrapper } from "../../styles/result";
import { NotFound } from "./NotFound";
import { CenteredContainer } from "../../styles/layout";

export const Result = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { word } = useContext(AppContext);
  const [results, setResults] = useState(null);

  const fetchDefinitions = async (word) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = res.data[0];
      console.log(data);
      setResults(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (word.length) {
      fetchDefinitions(word);
    }
  }, [word]);

  if (error) {
    return <NotFound />;
  }
  return (
    <>
      {!isLoading && results ? (
        <main>
          <Phonetic result={results} />
          <Meaning result={results} />
          <Source result={results} />
        </main>
      ) : (
        <CenteredContainer>
          <h1>⌛</h1>
          <h1>Please wait...</h1>
        </CenteredContainer>
      )}
    </>
  );
};

const Source = ({ result }) => {
  return (
    <SourceWrapper>
      <SmallText className="muted">Source</SmallText>
      <LinkContainer>
        <SmallText>
          <a href={result.sourceUrls[0]} target="_blank" rel="noreferrer">
            {result.sourceUrls[0]}
          </a>
        </SmallText>
        <img src={newWindowIcon} alt="new window icon" />
      </LinkContainer>
    </SourceWrapper>
  );
};
