import styled from "styled-components";
import { MyComponents } from "./Mycomponents";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  div {
    display: flex;
    flex-direction: column;
    button,
    svg,
    span {
      max-width: 50%;
      margin: 0 auto;
    }
  }
`;
const StyledTitle = styled.h1`
  text-decoration: underline;
  align-self: center;
`;

function App() {
  return (
    <StyledMain>
      {MyComponents.map((elements, index) => (
        <div key={index}>
          <StyledTitle>{elements.title}</StyledTitle>
          {elements.component}
        </div>
      ))}
    </StyledMain>
  );
}

export default App;
