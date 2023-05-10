import React, { useEffect, useState } from 'react';
import { Calendar } from './components/Calendar';
import { Clock } from './components/Clock';

import './styles/layout.scss';
import './styles/common/_button.scss';

export default function DateTimePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className='date-time-selector'>
      <Calendar value={currentDate} onChange={setCurrentDate} />
      <Clock value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}
