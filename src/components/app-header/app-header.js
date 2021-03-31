import React from 'react';
import styled from 'styled-components';

import './app-header.css';

const HeaderBlock = styled.div`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
      }
      h2 {
        font-size: 1.2rem;
        color: grey;
        :hover {
          color: blue;
        }
      }`

const AppHeader = ({liked, allPosts}) => {
    return (
        <HeaderBlock>
            <h1>Igor Kravchenko</h1>
            <h2>{allPosts} listings, liked {liked}</h2>
        </HeaderBlock>

    )

}

export default AppHeader;