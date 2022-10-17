import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import React from "react";
import './doctor_details.css'

// const DoctorDetailsCtn = styled.div`
//   @media (min-width: 768px) {
//     height: 100%;
//     width: 400px;
//     position: fixed;
//     top: 0;
//     right: 0;
//     background-color: var(--white-sobber);
//     z-index: 1;
//     transform: translateX(${(props) => (props.detailsOpen ? 0 : 400)}px);
//     visibility: ${(props) => (props.detailsOpen ? 'visible' : 'hidden')};
//     transition: 200ms ease-in-out 0s;

//     .doc-info-ctn {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//     }

//     .img-ctn {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       margin-top: 50px;
//       align-self: center;
//       width: 150px;
//       height: 150px;
//     }

//     .img-bg {
//       width: 150px;
//       height: 150px;
//       margin: auto;
//       border-radius: 100%;
//       background: var(--img-background);
//     }

//     .doc-img {
//       width: 150px;
//       height: 150px;
//       margin: auto;
//       border-radius: 100%;
//     }

//     .doc-name {
//       align-self: center;
//     }

//     .doc-info-tbl {
//       width: 100%;
//       display: flex;
//       justify-content: center;
//       flex-direction: column;
//     }

//     .doc-info-row {
//       display: flex;
//       justify-content: space-between;
//       background: var(--white-sobber);
//       padding: 0 30px;
//       font-family: "Ubuntu Light";
//       color: var(--text-black);
//       font-size: 1rem;
//     }

//     .white {
//       background: rgb(249, 255, 247);
//     }

//     .reserve-btn {
//       background-color: var(--green);
//       color: white;
//       align-self: center;
//       padding: 14px 20px;
//       width: 200px;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       transition: all 300ms linear 0s;
//       margin-top: 50px;

//       :hover {
//         background-color: var(--green-darker);
//       }
//     }
//   }
// `;

const DoctorDetails = (props) => {
  const {detailsOpen} = props;
  const navigate = useNavigate();
  const {doctor} = props;
  const docDetails = JSON.parse(doctor);

  const openReserve = () => {
    navigate('/reserve');
  };

  return (
    <div className="DoctorDetailsCtn"
      detailsOpen={detailsOpen}
    >
      {
        docDetails
        && (
          <div className="doc-info-ctn">
            {/* Image part */}
            <div className="img-ctn">
              {
                docDetails.image === "" && <div className="img-bg" />
              }
              {
                docDetails.image !== "" && <img className="doc-img" src={docDetails.image} alt="doctor"/>
              }
            </div>
            <h5 className="doc-name">{docDetails.name}</h5>
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
            <button className="reserve-btn" type="button" onClick={openReserve}>Reserve</button>
          </div>
        )
      }

    </div>
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
