import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Context";
import axios from "axios";
import { Phonetic } from "./Phonetic";
import { Meaning } from "./Meaning";
import newWindowIcon from "./../../assets/images/icon-new-window.svg?url";

// style
import { SourceText } from "../../styles/text.styled";
import { LinkContainer, SourceWrapper } from "../../styles/result.styled";

export const Result = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (word.length) {
      fetchDefinitions(word);
    }
  }, [word]);

  return (
    <>
      {!isLoading ? (
        results && (
          <div>
            <Phonetic result={results} />
            <Meaning result={results} />
            <Source result={results} />
          </div>
        )
      ) : (
        <div className="loadingOverlay">please wait...</div>
      )}
    </>
  );
};

const Source = ({ result }) => {
  return (
    <SourceWrapper>
      <SourceText>Source</SourceText>
      <LinkContainer>
        <p><a href={result.sourceUrls[0]} target="_blank" rel="noreferrer">
          {result.sourceUrls[0]}
        </a></p>
        <img src={newWindowIcon} alt="new window icon"/>
      </LinkContainer>
    </SourceWrapper>
  );
};
