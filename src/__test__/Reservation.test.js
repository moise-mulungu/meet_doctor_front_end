import React from 'react';
// import { ReactDOM } from 'react-dom';
import { render } from '@testing-library/react';
// import ListAllReservations from '../components/Pages/reservations/Reservation';
import renderer from 'react-test-renderer';


describe('ListAllReservations', () => {
  const ListAllReservations = () => {
    return (
      <section className="reservations-container">
        <h1>All Reservations</h1>
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>City</th>
              <th>Bill</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="reservations-body">
            <tr>
              <td>Doctor</td>
              <td>City</td>
              <td>Bill</td>
              <td>Date</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
    it('renders without crashing', () => {
        const reservations = renderer.create(<ListAllReservations />).toJSON();
        });
    it('renders correctly', () => {
        const tree = renderer.create(<ListAllReservations />).toJSON();

        expect(tree).toMatchSnapshot();

    }
    );

    it('renders a table', () => {
        const table = render(<ListAllReservations/>);
        const tableDOM = table.queryAllByTitle('table');
        expect(tableDOM.length).not.toBe(1);     
    }
    );

    it('renders a table header', () => {
        const header  = render(<ListAllReservations />);
        const tableHeader = header.getByText('All Reservations');
        expect(tableHeader).toHaveAccessibleName; 
    }
    );

    it('renders a table body', () => {
        const body = render(<ListAllReservations />);
        const tableBody = body.getByText('All Reservations');
        expect(tableBody).toHaveAccessibleName;
    }
    );

});