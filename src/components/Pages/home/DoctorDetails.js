import styled from 'styled-components';
import PropTypes from 'prop-types';

const DoctorDetailsCtn = styled.div`
  @media (min-width: 768px) {
    height: 100%;
    width: 400px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--white-sobber);
    z-index: 1;
    transform: translateX(${(props) => (props.detailsOpen ? 0 : 400)}px);
    visibility: ${(props) => (props.detailsOpen ? 'visible' : 'hidden')};
    transition: 200ms ease-in-out 0s;

    .doc-info-ctn {
      display: flex;
      justify-content: center;
    }

    .doc-info-tbl {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .doc-info-row {
      display: flex;
      justify-content: space-between;
      background: var(--white-sobber);
      padding: 0 30px;
      font-family: "Ubuntu Light";
      color: var(--text-black);
      font-size: 1rem;
    }

    .white {
      background: rgb(249, 255, 247);
    }
  }
`;

const DoctorDetails = (props) => {
  const { detailsOpen } = props;
  const { doctor } = props;
  const docDetails = JSON.parse(doctor);

  return (
    <DoctorDetailsCtn
      detailsOpen={detailsOpen}
    >
      {
        docDetails
        && (
        <div className="doc-info-ctn">
          {/* Image part */}

          <div className="doc-info-tbl">
            <div className="doc-info-row">
              <h5>Speciality </h5>
              <h5>{docDetails.speciality}</h5>
            </div>
            <div className="doc-info-row white">
              <h5>Cost </h5>
              <h5>
                {docDetails.bill}
                {' '}
                $/h
              </h5>
            </div>
            <div className="doc-info-row">
              <h5>Location </h5>
              <h5>{docDetails.location}</h5>
            </div>
            <div className="doc-info-row white">
              <h5>Email </h5>
              <h5>{docDetails.email}</h5>
            </div>
          </div>
        </div>
        )
        }

    </DoctorDetailsCtn>
  );
};

DoctorDetails.propTypes = {
  detailsOpen: PropTypes.bool.isRequired,
  doctor: PropTypes.shape({
    name: PropTypes.string,
    speciality: PropTypes.string,
    bill: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default DoctorDetails;
