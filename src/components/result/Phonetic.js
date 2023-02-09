import playIcon from "../../assets/images/icon-play.svg?url";
import { PlayBtn } from "../../styles/buttons.styled";

// style
import { PhoneticWrapper } from "../../styles/result.styled";
import { HeadingTextM } from "../../styles/text.styled";

export const Phonetic = ({ result }) => {
  const playAudio = () => {
    const audio = new Audio(result.phonetics[0].audio);
    audio.play();
  };
  return (
    <>
      <PhoneticWrapper>
        <div>
          <h1>{result.word}</h1>
          {console.log(result.word)}
          <HeadingTextM className="accent">
            {(result.phonetic || result.phonetics.length>1) ? (result.phonetic || result.phonetics[1].text) : ''}
          </HeadingTextM>
        </div>
        <PlayBtn onClick={playAudio}>
          <audio src={result.phonetics.filter((p, i) => i < 1)} />
          <img src={playIcon} alt="play icon" />
        </PlayBtn>
      </PhoneticWrapper>
    </>
  );
};
