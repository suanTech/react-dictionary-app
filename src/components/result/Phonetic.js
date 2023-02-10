import playIcon from "../../assets/images/icon-play.svg?url";
import { PlayBtn } from "../../styles/button";

// style
import { PhoneticWrapper } from "../../styles/result";
import { HeadingTextM } from "../../styles/text";

export const Phonetic = ({ result }) => {
  const playAudio = () => {
    const audio = new Audio(result.phonetics.find(phonetic => phonetic.audio.length > 0)?.audio);
    audio.play()
  };
  const phonetic = result.phonetic || result.phonetics.find(phonetic => phonetic.text)?.text;
  return (
    <>
      <PhoneticWrapper>
        <div>
          <h1>{result.word}</h1>
          <HeadingTextM className="accent">
            {phonetic}
          </HeadingTextM>
        </div>
        <PlayBtn onClick={playAudio}>
          <img src={playIcon} alt="play icon" />
        </PlayBtn>
      </PhoneticWrapper>
    </>
  );
};
