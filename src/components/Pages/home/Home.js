import React from 'react';
import styled from 'styled-components';
import Doctors from './Doctors';

const HomeCtn = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
`;

const Home = () => (
  <HomeCtn>
    <Doctors />
  </HomeCtn>
);

export default Home;
