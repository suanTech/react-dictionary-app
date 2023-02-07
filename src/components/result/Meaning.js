export const Meaning = ({ result }) => {
  return (
    <>
      { result.meanings.map((meaning, i) => {
        if (i < 2) {
          return (
            <div key={i} className="meaningWrapper">
              <h3>{meaning.partOfSpeech}</h3>
              <p className="muted">Meaning</p>
              <MeaningList definitions={meaning.definitions} />
              {meaning.synonyms && (
                <div className="synonymWrapper">
                  <p className="muted">Synonyms</p>
                  <p className="accent">{meaning.synonyms.slice(0, 1)}</p>
                </div>
              )}
            </div>
          );
        } else return null;
      })}
    </>
  );
};

const MeaningList = ({ definitions }) => {
  return (
    <>
      <ul>
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>
    </>
  );
};
