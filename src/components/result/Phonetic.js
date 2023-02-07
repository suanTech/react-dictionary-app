import playIcon from "../../assets/images/icon-play.svg?url";
import { PlayBtn } from "../../styles/Buttons.styled";

// style
import { PhoneticWrapper } from "../../styles/Result.styled";
import { PronunciationText } from "../../styles/Text.styled";

export const Phonetic = ({ result }) => {
  const playAudio = () => {
    const audio = new Audio(result.phonetics[0].audio);
    audio.play();
  };
  return (
    <>
      {result ? (
        <PhoneticWrapper>
          <div className="PronunciationBox">
            <h1>{result.word}</h1>
            {console.log(result.word)}
            <PronunciationText>{result.phonetic ? result.phonetic : result.phonetics[1].text}</PronunciationText>
          </div>
          <PlayBtn onClick={playAudio}>
            <audio src={result.phonetics.filter((p, i) => i < 1)} />
            <img src={playIcon} alt="play icon" />
          </PlayBtn>
        </PhoneticWrapper>
      ) : (
        ""
      )}
    </>
  );
};
