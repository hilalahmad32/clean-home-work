import React, { useState } from 'react';
import OtpInput from 'react18-input-otp';
import "./LoginModal.css"
export default function FromtOtpInput() {
  const [otp, setOtp] = useState('');
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return <OtpInput className='check' value={otp} onChange={handleChange} numInputs={6} separator={<span>-</span>} />;
}

