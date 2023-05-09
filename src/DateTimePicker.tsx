import React, { useState } from 'react';
import { Button } from './components/Button';
import { Calendar } from './components/Calendar';
import { Clock } from './components/Clock';

import './styles/layout.scss';
import './styles/common/_button.scss';

export default function DateTimePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const setSelectedDate = () => {
    console.log('selected date', currentDate);
    return currentDate;
  };
  const initSelection = () => {
    console.log('empty selected date');
  };
  return (
    <div className='date-time-selector'>
      <Calendar value={currentDate} onChange={setCurrentDate} />
      <Clock />
      {/* <StartTimeInput />
      <EndTimeInput /> */}
      <div className='date-time-selector__actions'>
        <Button className='button__set-up' text={'Set up'} onClick={setSelectedDate} />
        <Button className='button__cancel' text={'Cancel'} onClick={initSelection} />
      </div>
    </div>
  );
}
