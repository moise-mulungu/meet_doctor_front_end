import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { updateStorage } from '../storage/storage';

const SidebarCtn = styled.div`
  @media (min-width: 768px) {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 150px;
    background: var(--white-sobber);

    .logo{
      display: flex;
      justify-content: center;
      h5{
        align-self: center;
        color: var(--green);
        font-size: 2rem;
        font-style: italic;
      }
    }
    
    .links{
      display: flex;
      flex-direction: column;
      a{
        color: var(--text-black);
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 10px;
        margin-left: 20px;
        transition: all 100ms ease-in 0ms;
        
        &:hover {
          background: var(--green);
          border-radius: 5px 0 0 5px;
          color: white;
        }
      }
    }
    .logout {
      display: flex;
      justify-content: center;
    }
    .logout > button{
      text-align: center;
      color: var(--red);
      cursor: pointer;
      border: none;
      background: var(--white-sobber);
    }
  }
`;

function Sidebar() {
  const navigate = useNavigate();

  const disconnect = () => {
    updateStorage(null);
    navigate('/login');
  };

  return (
    <SidebarCtn>
      <div className="logo">
        <h5>meet_doctor</h5>
      </div>
      <div className="links">
        <Link to="/">Doctors</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/reservations">Add Reservations</Link>
        <Link to="/add_doctor">Add Doctor</Link>
        <Link to="/delete_doctor">Delete Doctor</Link>
      </div>
      <div className="logout">
        <button type="button" onKeyDown={disconnect} onClick={disconnect}>disconnect</button>
      </div>
    </SidebarCtn>
  );
}

export default Sidebar;
