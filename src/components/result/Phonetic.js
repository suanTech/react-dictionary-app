import playIcon from "../../assets/images/icon-play.svg?url";
import { PlayBtn } from "../../styles/buttons.styled";

// style
import { PhoneticWrapper } from "../../styles/result.styled";
import { PronunciationText } from "../../styles/text.styled";

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
          <PronunciationText>
            {result.phonetic ? result.phonetic : result.phonetics[1].text}
          </PronunciationText>
        </div>
        <PlayBtn onClick={playAudio}>
          <audio src={result.phonetics.filter((p, i) => i < 1)} />
          <img src={playIcon} alt="play icon" />
        </PlayBtn>
      </PhoneticWrapper>
    </>
  );
};
