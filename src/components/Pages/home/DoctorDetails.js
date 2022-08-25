import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { useState } from 'react';

const DoctorDetailsCtn = styled.div`
  @media (min-width: 768px) {
    height: 100%;
    width: 400px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.17);
    z-index: 1;
    border: 3px solid #73AD21;
    transform: translateX(${(props) => (props.detailsOpen ? 0 : 400)}px);
    visibility: ${(props) => (props.detailsOpen ? 'visible' : 'hidden')};
    transition: 200ms ease-in-out 0s;
  }
`;

const DoctorDetails = (props) => {
  const { detailsOpen } = props;
  const { doctor } = props;
  const docDetails = JSON.parse(doctor);
  // const [detailsWin] = useState(detailsOpen);

  return (
    <DoctorDetailsCtn
      detailsOpen={detailsOpen}
    >

      <img alt="doctor" className="doc-img" />
      <div className="doc-info-ctn">
        <h5>
          {
            docDetails && docDetails.name
          }
        </h5>
      </div>
    </DoctorDetailsCtn>
  );
};

DoctorDetails.propTypes = {
  detailsOpen: PropTypes.bool.isRequired,
  doctor: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default DoctorDetails;
