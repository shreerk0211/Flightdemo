import React, { useState } from 'react';
import './Bookingform.css';
import Head from '../Common/Head';
import Foot from '../Common/Foot';
import { useNavigate } from 'react-router-dom';

const Bookingform = () => {
  const [showCouponField, setShowCouponField] = useState(false);
  const [showGiftCardField, setShowGiftCardField] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: { month: '', day: '', year: '' },
    coupon: '',
    giftCard: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDobChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dob: {
        ...prevData.dob,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in localStorage
    localStorage.setItem('bookingData', JSON.stringify(formData));
    navigate('/Bookingdata');
  };

  const countryCodes = [
    { code: '+971', name: 'UAE', flag: '🇦🇪' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    { code: '+44', name: 'UK', flag: '🇬🇧' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+27', name: 'South Africa', flag: '🇿🇦' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+47', name: 'Norway', flag: '🇳🇴' },
    { code: '+46', name: 'Sweden', flag: '🇸🇪' },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  ];

  return (
    <div className="bookingform-container">
      <div className='bookformhead'>
        <Head />
      </div>
      <h2 className="bookingform-title">June 28th, 2024 @ 8.45 AM</h2>
      <p className="bookingform-subtitle">Adding participant 1</p>
      
      <form className="bookingform" onSubmit={handleSubmit}>
        <label>
          First Name *
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        
        <label>
          Last Name *
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        
        <label>
          Email *
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        
        <label>
          Phone Number *
          <div className="phone-input">
            <select 
              className="country-code" 
              name="countryCode"
              value={selectedCountryCode}
              onChange={(e) => {
                setSelectedCountryCode(e.target.value);
                handleChange(e);
              }}
              required
            >
              <option value="" disabled>Select Country Code</option>
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input 
              type="tel" 
              name="phoneNumber" 
              value={formData.phoneNumber}
              onChange={handleChange}
              required 
              placeholder={selectedCountryCode ? `Enter your phone number (e.g., ${selectedCountryCode} 1234567890)` : 'Enter your phone number'} 
            />
          </div>
        </label>
        
        <label>
          Date Of Birth
          <div className="dob-input">
            <select className="month" name="month" value={formData.dob.month} onChange={handleDobChange} required>
              <option value="" disabled>Select Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select className="day" name="day" value={formData.dob.day} onChange={handleDobChange} required>
              <option value="" disabled>Select Day</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <input type="number" name="year" value={formData.dob.year} onChange={handleDobChange} placeholder="Year" min="1900" max="2024" required />
          </div>
        </label>
        
        {/* <div className="buttons">
          <button type="button" className="coupon-button" onClick={() => setShowCouponField(true)}>
            I HAVE A COUPON
          </button>
          {showCouponField && (
            <div className="coupon-input">
              <label>
                Coupon Code
                <input type="text" name="coupon" value={formData.coupon} onChange={handleChange} placeholder="Enter coupon code" />
              </label>
            </div>
          )}
          <button type="button" className="giftcard-button" onClick={() => setShowGiftCardField(true)}>
            I HAVE A GIFT CARD
          </button>
          {showGiftCardField && (
            <div className="giftcard-input">
              <label>
                Gift Card Code
                <input type="text" name="giftCard" value={formData.giftCard} onChange={handleChange} placeholder="Enter gift card code" />
              </label>
            </div>
          )}
        </div> */}
        
        <div className="form-buttons">
          <button type="button" className="back-button">BACK</button>
          <button type="submit" className="save-button">SAVE PARTICIPANT</button>
        </div>
      </form>

      <div className='bookformfoot'>
        <Foot />
      </div>
    </div>
  );
}

export default Bookingform;
