import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserDoctors, removeDoctor } from '../../../redux/doctors/doctorDelete';
import './deleteDoctor.css';

// const DeleteDoctorCtn = styled.div`

//   .doc-list-ctn {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     padding: 15px;
//     gap: 30px;
//   }

//   .doc-ctn {
//     display: flex;
//     padding: 10px;
//     flex-direction: column;
//     justify-content: center;
//   }

//   .doc-name {
//     margin: 10px 0;
//     text-align: center;
//     font-family: "Ubuntu Light";
//     font-size: 1rem;
//   }

//   .doc-speciality {
//     margin: 10px 0;
//     text-align: center;
//     font-family: "Ubuntu Thin";
//     font-size: 1rem;
//   }

//   .img-ctn {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-top: 50px;
//     align-self: center;
//     width: 150px;
//     height: 150px;
//   }

//   .doc-img {
//     width: 150px;
//     height: 150px;
//     position: absolute;
//   }

//   .img-bg {
//     width: 150px;
//     height: 150px;
//     margin: auto;
//     border-radius: 100%;
//     background: var(--img-background);
//   }
  
//   .doc-img{
//     width: 150px;
//     height: 150px;
//     margin: auto;
//     border-radius: 100%;
//   }

//   .but-action-ctn {
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//   }

//   .conf-ctn {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     gap: 10px;
//   }

//   .rem-ctn {
//     display: block;
//     width: 100px;
//     height: 100%;
//     color: white;
//     background: var(--red);
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     padding: 5px;
//     transition: all 300ms linear 0s;
//     :hover{
//       background: var(--red-darker);
//     }
//   }

//   .cancel-but {
//     margin-right: 5px;
//     color: white;
//     background: var(--gray-simple);
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     padding: 5px;
//     transition: all 300ms linear 0s;
//     :hover{
//       background: var(--gray-darker);
//     }
//   }

//   .confirm-but {
//     margin-left: 5px;
//     color: white;
//     background: #f44d4d;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     padding: 5px;
//     transition: all 300ms linear 0s;
//     :hover{
//       background: var(--red-darker);
//     }
//   }

//   .conf-ctn {
//     display: none;
//   }
//   .no-doc-ctn{
//     display: flex;
//     justify-content: center;
//   }
//   .no-doc{
//     align-content: center;
//   }
// `;

function DeleteDoctor() {
  const doctors = useSelector((state) => state.deleteDoctor);
  const dispatch = useDispatch();

  let removeButton = null;
  let confirmDiv = null;

  const toggleVisibility = (e) => {
    removeButton = document.getElementById(`remove${e.currentTarget.dataset.index}`);
    confirmDiv = document.getElementById(`but-confirm${e.currentTarget.dataset.index}`);
    if (removeButton.style.display === 'block') {
      removeButton.style.display = 'none';
      confirmDiv.style.display = 'block';
    } else {
      removeButton.style.display = 'block';
      confirmDiv.style.display = 'none';
    }
  };

  const removeDoc = (e) => {
    toggleVisibility(e);
  };

  const cancelDoc = (e) => {
    toggleVisibility(e);
  };

  useEffect(() => {
    dispatch(getUserDoctors());
  }, []);

  return (
    <div className="DeleteDoctorCtn">
      {
        doctors.length !== 0 ? (
        <div className="doc-list-ctn">
          {
            doctors.map((doc) => (
              <div className="doc-ctn" key={doc.id}>
                <div className="img-ctn">
                  {
                    doc.image === "" && <div className="img-bg" />
                  }
                  {
                    doc.image !== "" && <img className="doc-img" src={doc.image} alt="doctor"/>
                  }
                </div>
                <h5 className="doc-name">{doc.name}</h5>
                <h5 className="doc-speciality">{doc.speciality}</h5>
                <div className="but-action-ctn">
                  <button id={`remove${doc.id}`} data-index={doc.id} className="rem-ctn" type="button" onClick={(e) => removeDoc(e)}>Remove</button>
                  <div id={`but-confirm${doc.id}`} data-index={doc.id} className="conf-ctn">
                    <button id={`cancel${doc.id}`} data-index={doc.id} className="cancel-but" type="button" onClick={cancelDoc}>Cancel</button>
                    <button id={`confirm${doc.id}`} data-index={doc.id} className="confirm-but" type="button" onClick={() => dispatch(removeDoctor(doc.id))}>Confirm</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        ) : <div className="no-doc-ctn">
          <h5 className="no-doc">No doctor !</h5>
        </div>
      }
    </div>
  );
}

export default DeleteDoctor;
