import React, { useEffect, useState } from 'react';
import './Bookingdata.css';
import Head from '../Common/Head';
import Foot from '../Common/Foot';

const Bookingdata = () => {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('bookingData');
    if (data) {
      setBookingData(JSON.parse(data));
    }
  }, []);

  if (!bookingData) {
    return <div>No booking data found.</div>;
  }

  return (
    <div className="bookingdata-container">
      <div className="dataheader">
        <Head />
      </div>

      <div className="table-container">
        <h2>Booking Data</h2>
        <table className="bookingdata-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              {/* <th>Coupon Code</th>
              <th>Gift Card Code</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bookingData.firstName}</td>
              <td>{bookingData.lastName}</td>
              <td>{bookingData.email}</td>
              <td>{bookingData.countryCode} {bookingData.phoneNumber}</td>
              <td>{`${bookingData.dob.month}/${bookingData.dob.day}/${bookingData.dob.year}`}</td>
              {/* <td>{bookingData.coupon}</td>
              <td>{bookingData.giftCard}</td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="datafoot">
        <Foot />
      </div>
    </div>
  );
};

export default Bookingdata;
