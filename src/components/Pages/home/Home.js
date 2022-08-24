import React from 'react';
import styled from 'styled-components';
import Doctors from './Doctors';
import DoctorDetails from '../../DoctorDetails';

const HomeCtn = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
`;

const Home = () => (
  <HomeCtn>
    <Doctors />
    <DoctorDetails />
  </HomeCtn>
);

export default Home;
