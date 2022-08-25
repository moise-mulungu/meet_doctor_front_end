import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserDoctors, removeDoctor } from '../../../redux/doctors/doctor';

const DeleteDoctorCtn = styled.div`
  .rem-ctn{
    visibility: visible;
  }
  .conf-ctn{
    visibility: hidden;
  }
`;

function DeleteDoctor() {
  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  let removeButton = null;
  let confirmDiv = null;

  const toggleVisibility = (e) => {
    removeButton = document.getElementById(`remove${e.currentTarget.dataset.index}`);
    confirmDiv = document.getElementById(`but-confirm${e.currentTarget.dataset.index}`);
    if (removeButton.style.visibility === 'visible') {
      console.log('visible');
      removeButton.style.visibility = 'hidden';
      confirmDiv.style.visibility = 'visible';
    } else {
      console.log(removeButton.style.visibility);
      console.log('invisible');
      removeButton.style.visibility = 'visible';
      confirmDiv.style.visibility = 'hidden';
    }
  };

  const removeDoc = (e) => {
    toggleVisibility(e);
  };

  const cancelDoc = (e) => {
    toggleVisibility(e);
  };

  // const confirmDoc = (e) => {
  //   const id = e.currentTarget.dataset.index;
  //   dispatch(removeDoctor(id));
  // };

  useEffect(() => {
    dispatch(getUserDoctors());
  }, []);

  return (
    <DeleteDoctorCtn>
      {
        doctors && (
        <div className="doc-list-ctn">
          {
            doctors.map((doc) => (
              <div className="doc-ctn" key={doc.id}>
                <div className="doc-img-ctn">
                  <div className="img-bg" />
                  {/* <img /> */}
                </div>
                <h5>{doc.name}</h5>
                <h5>{doc.speciality}</h5>
                <div className="but-action-ctn">
                  <button id={`remove${doc.id}`} data-index={doc.id} className="rem-ctn" type="button" onClick={removeDoc}>Remove</button>
                  <div id={`but-confirm${doc.id}`} data-index={doc.id} className="conf-ctn">
                    <button id={`cancel${doc.id}`} data-index={doc.id} type="button" onClick={cancelDoc}>Cancel</button>
                    <button id={`confirm${doc.id}`} data-index={doc.id} type="button" onClick={() => dispatch(removeDoctor(doc.id))}>Confirm</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        )
      }
    </DeleteDoctorCtn>
  );
}

export default DeleteDoctor;
