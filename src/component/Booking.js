import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import Head from '../Common/Head';
import Foot from '../Common/Foot';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [participants, setParticipants] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setStartDate(date);
    setSelectedSlot(null); // Reset the slot selection when the date changes
    setParticipants(''); // Reset the participants when the date changes
  };

  const handleSlotChange = (slot) => {
    setSelectedSlot(slot);
    setParticipants(''); // Reset the participants when slot changes
  };

  const handleParticipantsChange = (e) => {
    setParticipants(e.target.value);
  };

  const timeSlots = [
    { id: 1, time: '6:00 AM - 8:00 AM' },
    { id: 2, time: '8:00 AM - 10:00 AM' },
    { id: 3, time: '10:00 AM - 12:00 AM' },
    { id: 4, time: '12:00 AM - 2:00 AM' },
    { id: 5, time: '2:00 AM - 4:00 AM' },
  
  ];

  return (
    <div className="booking-page">
      <div className="header">
        <Head />
      </div>
      <div className="content">
        <div className="container1">
          <h1>Skydiving Booking</h1>
          <div className="date-picker-container">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
              calendarClassName="custom-calendar"
              dayClassName={(date) => date.getDay() === 0 || date.getDay() === 6 ? 'weekend-day' : undefined}
            />
          </div>
          {selectedDate && (
            <div className="selected-date">
              <div>Selected Date: {selectedDate.toDateString()}</div>
              <div className="time-slots">
                <h2>Select a Time Slot:</h2>
                {timeSlots.map(slot => (
                  <button
                    key={slot.id}
                    className={`slot-button ${selectedSlot === slot.id ? 'selected' : ''}`}
                    onClick={() => handleSlotChange(slot.id)}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}
          {selectedSlot && (
            <div className="participants">
              <h2>Select Number of Participants:</h2>
              <input
                type="number"
                min="1"
                max="10"
                value={participants}
                onChange={handleParticipantsChange}
                placeholder="Enter number of members" />
            </div>
          )}
          <div className='nxtbtn'>
            <Link to={'/bookingform'}>
            <button
              className="next-button"
              disabled={!selectedSlot || !participants}
            >
              Next Page
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='footbooking'>
        <Foot />
      </div>
    </div>
  );
};

export default Booking;
