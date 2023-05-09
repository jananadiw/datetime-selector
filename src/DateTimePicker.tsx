import React from 'react';
import Button from './components/Button';
import { Calendar } from './components/Calendar';

import './styles/layout.scss';
import './styles/common/_button.scss';

export default function DateTimePicker() {
  return (
    <div className='date-time-selector'>
      <Calendar />
      {/* <StartTimeInput />
      <EndTimeInput /> */}
      <div className='date-time-selector__actions'>
        <Button className='button__set-up' text={'Set up'} />
        <Button className='button__cancel' text={'Cancel'} />
      </div>
    </div>
  );
}
