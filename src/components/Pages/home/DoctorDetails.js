import styled from 'styled-components';

const DoctorDetailsCtn = styled.div`
  @media (min-width: 768px) {
    height: 100%;
    width: 400px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.17);
    z-index: 1;
    border: 3px solid #73AD21
  }
`;

const DoctorDetails = () => (
  <DoctorDetailsCtn>
    Details
  </DoctorDetailsCtn>
);

export default DoctorDetails;
