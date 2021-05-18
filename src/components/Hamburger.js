import React, { useState } from 'react';
import styled from 'styled-components';

export const StyledSVG = styled.svg`
  /* background: green; */
  margin: 0;
  padding: 0;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  #top,
  #bottom {
    transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #middle {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #bf0010;
    stroke-miterlimit: 10;
    stroke-width: 3px;
  }
  path {
    stroke-dasharray: 25 41;
    stroke-dashoffset: 0;
  }
  .x#middle {
    opacity: 0;
  }
  .x#top,
  .x#bottom {
    stroke-dashoffset: -41;
  }
`;

function Hamburger() {
  const [isActive, setActive] = useState('false');

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <StyledSVG
        onClick={handleClick}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 32 25"
      >
        <path
          id="top"
          className={`line ${!isActive ? 'x' : ''}`}
          d="M219.11,177.53l25,.16c1.3.15,6.24-1.72,3.49-4.66s-7.13,2.13-7.13,2.13l-17.79,17.56"
          transform="translate(-219.06 -171.65)"
        />
        <path
          id="bottom"
          className={`line ${!isActive ? 'x' : ''}`}
          d="M219.11,190.37l25-.16c1.3-.16,6.24,1.71,3.49,4.65s-7.13-2.12-7.13-2.12l-17.79-17.57"
          transform="translate(-219.06 -171.65)"
        />
        <line
          id="middle"
          className={`line ${!isActive ? 'x' : ''}`}
          y1="12.21"
          x2="25"
          y2="12.37"
        />
      </StyledSVG>
    </>
  );
}

export default Hamburger;
