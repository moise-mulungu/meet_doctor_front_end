import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from "react";
import './doctor.css';

// const DoctorCtn = styled.div`
//   width: 350px;
//   height: 350px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   transition: all 100ms ease-in 0ms;

//   .img-ctn {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 350px;
//     height: 350px;
//   }

//   .doc-img {
//     width: 150px;
//     height: 150px;
//     margin: auto;
//     border-radius: 100%;
//   }

//   .img-bg {
//     width: 150px;
//     height: 150px;
//     margin: auto;
//     border-radius: 100%;
//     background: var(--img-background);
//   }

//   .doc-name {
//     text-align: center;
//     font-family: "Ubuntu Light";
//     margin: 10px 0 0 0;
//     font-size: 1.2rem;
//   }

//   .doc-speciality {
//     text-align: center;
//     font-family: "Ubuntu Thin";
//     margin: 20px 0 0 0;
//     color: var(--text-black);
//   }

//   .doc-cost {
//     text-align: center;
//     font-family: "Ubuntu Thin";
//     margin: 10px 0 0 0;
//     color: var(--text-black);
//   }

//   :hover {
//     cursor: pointer;
//     background-color: rgba(227, 228, 227, 0.51);
//     border-radius: 10px;
//   }
// `;

const Doctor = (props) => {
  const { name, speciality, cost, image } = props;
  return (
    <div className="DoctorCtn">
      <div className="img-ctn">
        {
          image === "" && <div className="img-bg" />
        }
        {
          image !== "" && <img className="doc-img" src={image} alt="doctor"/>
        }
      </div>
      <h5 className="doc-name">{name}</h5>
      <h5 className="doc-speciality">{speciality}</h5>
      <h5 className="doc-cost">
        {' '}
        {cost}
        {' '}
        $/h
      </h5>
    </div>
  );
};

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Doctor;
