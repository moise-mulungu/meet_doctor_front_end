import React from 'react';
import styled from 'styled-components';
import Doctors from './Doctors';

const HomeCtn = styled.div`
  width: max-content;
`;

const Home = () => (
  <HomeCtn>
    <Doctors />
  </HomeCtn>
);

export default Home;
