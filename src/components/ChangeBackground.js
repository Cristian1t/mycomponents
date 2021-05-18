import React, { useState } from 'react';
import styled from 'styled-components';

function ChangeBackground() {
  const [color, setColor] = useState('');

  const change = () => {
    setColor(Math.random().toString(16).substr(-6));
  };

  const StyledDiv = styled.div`
    display: flex;
    width: 50rem;
    height: 5rem;
    background-color: #${color};
    justify-content: center;
  `;

  return (
    <StyledDiv>
      <button onClick={change}>Change Background</button>
    </StyledDiv>
  );
}

export default ChangeBackground;
