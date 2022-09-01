import React, {useState} from 'react';
import styled from 'styled-components';
import {postDoctor} from "../../../redux/doctors/doctor";
import {useDispatch} from "react-redux";

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
    padding: 10px 55px 45px 55px;
    border-radius: 15px;
    transition: all 0.3s;
  }

  .img-select-ctn {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .img-select-ctn button {
    height: fit-content;
    margin: auto auto auto 10px;
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
    width: 80px;
    height: 80px;
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
  const dispatch = useDispatch()
  const [imageBase64, setImageBase64] = useState('')
  const [inputValues, setInputValues] = useState({
    name: '',
    speciality: '',
    cost: '',
    location: '',
    email: '',
    image: imageBase64,
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const submitLogin = (e) => {
    e.preventDefault();
    setInputValues({
      ...inputValues,
      image: imageBase64
    })
    if (inputValues.image === ""){
      return
    }
    console.log(inputValues)
    dispatch(postDoctor(inputValues))
    setImageBase64('')
    setInputValues({
      name: '',
      speciality: '',
      cost: '',
      location: '',
      email: '',
      image: imageBase64,
    })
    setSelectedImage('')
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    console.log(file)
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(reader.result)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
  }

  const updateInput = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AddDoctorCtn>
      <div className="form-ctn">
        {selectedImage && (
          <div className="img-select-ctn">
            <img id="doc-image" className="doc-image" alt="not fount"
                 src={URL.createObjectURL(selectedImage)}/>
            <br/>
            <button className="remove-img" type="button" onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br/>
        <input
          className="add-img"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
            getBase64(event.target.files[0], (result) => {
              console.log(result)
              setImageBase64(result)
            })
          }}
        />
        <form onSubmit={(e) => submitLogin(e)}>
          <label htmlFor="name">
            Name:
            <input className="username_field" id="username" required={true} placeholder="Name" name="name"
                   value={inputValues.name} onChange={updateInput}/>
          </label>
          <label htmlFor="email">
            Email:
            <input className="username_field" type="email" id="username" required={true} placeholder="Email"
                   value={inputValues.email} name="email" onChange={updateInput}/>
          </label>
          <label htmlFor="speciality">
            Speciality:
            <input className="username_field" id="username" required={true} placeholder="Speciality"
                   value={inputValues.speciality} name="speciality" onChange={updateInput}/>
          </label>
          <label htmlFor="cost">
            Cost:
            <input className="username_field" type="number" id="username" required={true} placeholder="Cost/h"
                   value={inputValues.cost} name="cost" onChange={updateInput}/>
          </label>
          <label htmlFor="location">
            Location:
            <input className="username_field" id="username" required={true} placeholder="Location"
                   value={inputValues.location} name="location" onChange={updateInput}/>
          </label>
          <input className="create-button" type="submit" value="Create doctor"/>
        </form>
      </div>
    </AddDoctorCtn>
  );
}

export default AddDoctor;
