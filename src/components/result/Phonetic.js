import playIcon from "../../assets/images/icon-play.svg?url";
import { PlayBtn } from "../../styles/button";

// style
import { PhoneticWrapper } from "../../styles/result";
import { HeadingTextM } from "../../styles/text";

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
          <audio src={result.phonetics.slice(0,1).audio}/>
          <img src={playIcon} alt="play icon" />
        </PlayBtn>
      </PhoneticWrapper>
    </>
  );
};
