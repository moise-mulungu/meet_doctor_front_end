import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import { getDoctors } from '../../../redux/doctors/doctor';
import DoctorDetails from './DoctorDetails';
import './doctors.css';

// const DoctorsCtn = styled.div`
//   width: 100%;
//   margin-top: 30px;
//   display: flex;
//   flex-direction: row;
//   gap: 20px;
//   justify-content: center;
//   flex-wrap: wrap;
//   .doc-ctn{
//     width: fit-content;
//   }
// `;

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [doctor, setDoctor] = useState(null);
  const [lastId, setLastId] = useState(null);

  const detailsWindow = (e) => {
    console.log(e.currentTarget.dataset.doctor);
    if (lastId === null) {
      setLastId(e.currentTarget.dataset.index);
      setDetailsOpen(true);
      setDoctor(e.currentTarget.dataset.doctor);
      return;
    }

    if (detailsOpen && lastId !== e.currentTarget.dataset.index) {
      setLastId(e.currentTarget.dataset.index);
      setDoctor(e.currentTarget.dataset.doctor);
    } else if (!detailsOpen && lastId === e.currentTarget.dataset.index) {
      setDetailsOpen(true);
      setDoctor(e.currentTarget.dataset.doctor);
    } else if (lastId === e.currentTarget.dataset.index) {
      setDetailsOpen(false);
    } else {
      setDetailsOpen(true);
      setDoctor(e.currentTarget.dataset.doctor);
    }
    setLastId(e.currentTarget.dataset.index);
  };

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <div className="DoctorsCtn">
      {
        doctors.length !== 0 ? doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doc-ctn"
            onClick={detailsWindow}
            data-index={doctor.id}
            data-doctor={JSON.stringify(doctor)}
            onKeyDown={detailsWindow}
            role="presentation"
          >
            <Doctor
              image={doctor.image}
              name={doctor.name}
              speciality={doctor.speciality}
              cost={doctor.bill}
            />
          </div>
        )) : <div>
          <h5>No doctor !</h5>
        </div>
      }
      {
        doctor && <DoctorDetails detailsOpen={detailsOpen} doctor={doctor} />

      }
    </div>
  );
};

export default Doctors;
