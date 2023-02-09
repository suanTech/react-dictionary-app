import { CenteredContainer } from "../../styles/layout";
import { BodyTextM } from "../../styles/text";

export const NotFound = () => {
  return (
    <CenteredContainer>
      <h1>😕</h1>
      <br/>
      {/* <Heading>No Definitions Found</h2> */}
      <br/>
      <BodyTextM className="muted">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</BodyTextM>
    </CenteredContainer>
  );
};
