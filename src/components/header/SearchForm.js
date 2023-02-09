import { useContext, useEffect, useState } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

// styles
import { StyledForm } from "../../styles/form.styled";
import { BodyTextM, SearchInput } from "../../styles/text.styled";
import { AppContext } from "../../context/Context";

export const SearchForm = () => {
  const [searchWord, setSearchWord] = useState("Hello");
  const { setWord } = useContext(AppContext);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setSearchWord(e.target.value);
    setError(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchWord) {
      await setWord(searchWord);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <StyledForm onSubmit={handleSubmit} className={error ? "error" : ""}>
        <SearchInput
          placeholder="Search..."
          value={searchWord}
          onClick={(e) => setSearchWord("")}
          onChange={handleInputChange}
        />
        <button type="submit">
          <SearchIcon />
        </button>
        {error ? <BodyTextM className="error">Whoops, can't be empty...</BodyTextM> : ""}
      </StyledForm>
    </>
  );
};
