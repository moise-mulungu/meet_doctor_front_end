import React, { useState } from 'react';
import styled from 'styled-components';

const AddDoctorCtn = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(161, 233, 175);
  display: flex;
  justify-content: center;

  .form-ctn {
    width: 50%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
    margin: 25px 0;
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all 0.3s;
  }

  .remove-img {
    width: fit-content;
    text-align: center;
    padding: 3px;
    margin-top: 5px;
    border: none;
    border-radius: 3px;
    background: var(--red);
    color: white;
    cursor: pointer;
  }

  .doc-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  form {
    margin-top: 15px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #2c2a2a;
    font-size: 1rem;

  }

  label input {
    height: 50px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
  }

  .create-button {
    width: fit-content;
    text-align: center;
    padding: 12px;
    margin-top: 15px;
    border: none;
    border-radius: 10px;
    background: #64ac66;
    color: white;
    cursor: pointer;
    transition: all 300ms linear 0s;

    :hover {
      background-color: var(--green-darker);
      color: var(--white-sobber);
    }
  }
`;
function AddDoctor() {
  const [selectedImage, setSelectedImage] = useState(null);

  const submitLogin = (e) => {
    e.preventDefault();
  };

  const updateInput = () => {
    // console.log(e);
  };

  const checkImage = () => {
    // const image = document.getElementById('doc-image');
    // const base64 = getBase
    // console.log(e.currentTarget);
  };

  return (
    <AddDoctorCtn>
      <div className="form-ctn">
        {selectedImage && (
        <div>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <img id="doc-image" className="doc-image" alt="not fount" onKeyDown={checkImage} onClick={checkImage} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button className="remove-img" type="button" onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
        )}
        <br />
        <input
          className="add-img"
          type="file"
          name="myImage"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
          }}
        />
        <form onSubmit={submitLogin}>
          <label htmlFor="name">
            Name:
            <input className="username_field" id="username" placeholder="Name" name="username" onChange={updateInput} />
          </label>
          <label htmlFor="speciality">
            Speciality:
            <input className="username_field" id="username" placeholder="Speciality" name="username" onChange={updateInput} />
          </label>
          <label htmlFor="cost">
            Cost:
            <input className="username_field" type="number" id="username" placeholder="Cost/h" name="username" onChange={updateInput} />
          </label>
          <label htmlFor="location">
            Location:
            <input className="username_field" id="username" placeholder="Location" name="username" onChange={updateInput} />
          </label>
          <input className="create-button" type="submit" value="Create doctor" />
        </form>
      </div>
    </AddDoctorCtn>
  );
}

export default AddDoctor;
