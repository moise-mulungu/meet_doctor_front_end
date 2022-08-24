import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Doctor from './Doctor';
import { getDoctors } from '../../../redux/doctors/doctor';

const DoctorsCtn = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  .doc-ctn{
    width: fit-content;
  }
`;

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor);

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <DoctorsCtn>
      {
        doctors.map((doctor) => (
          <div key={doctor.id} className="doc-ctn">
            <Doctor name={doctor.name} speciality={doctor.speciality} cost={doctor.bill} />
          </div>
        ))
      }
    </DoctorsCtn>
  );
};

export default Doctors;
