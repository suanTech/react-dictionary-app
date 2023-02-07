import { useContext, useState } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

// styles
import { SearchInput, SearchInputWrapper } from "../../styles/Form.styled";
import { SearchBtn } from "../../styles/Buttons.styled";
import { AppContext } from "../../context/Context";

export const SearchForm = ({ fetchDefinitions }) => {
  const [searchWord, setSearchWord] = useState("Hello");
  const {setWord} = useContext(AppContext);
  
  const handleInputChange = (e) => {
    setSearchWord(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWord(searchWord);
  };

  return (
      <form onSubmit={handleSubmit}>
        <SearchInputWrapper>
          <SearchInput
            placeholder="Search..."
            value={searchWord}
            onChange={handleInputChange}
          />
          <SearchBtn type="submit">
            <SearchIcon />
          </SearchBtn>
        </SearchInputWrapper>
      </form>
  );
};
