import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Context";
import axios from "axios";
import { Phonetic } from "./Phonetic";
import { Meaning } from "./Meaning";

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
      {!isLoading ? results && (
        <div>
          <Phonetic result={results} />
          <Meaning result={results} />
        </div>
      ) : <div className="loadingOverlay">please wait...</div>}
    </>
  );
};
