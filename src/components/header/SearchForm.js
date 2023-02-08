import { useContext, useState } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

// styles
import {
  StyledForm,
  SearchInput,
} from "../../styles/form.styled";
import { SearchBtn } from "../../styles/buttons.styled";
import { AppContext } from "../../context/Context";

export const SearchForm = () => {
  const [searchWord, setSearchWord] = useState("Hello");
  const { setWord } = useContext(AppContext);

  const handleInputChange = (e) => {
    setSearchWord(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWord(searchWord);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
        <SearchInput
          placeholder="Search..."
          value={searchWord}
          onClick={() => setSearchWord('')}
          onChange={handleInputChange}
        />
        <SearchBtn type="submit">
          <SearchIcon />
        </SearchBtn>
    </StyledForm>
  );
};
