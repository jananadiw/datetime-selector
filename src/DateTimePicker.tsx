import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { Clock } from './components/Clock';

import './styles/layout.scss';
import './styles/button.scss';

// Props
type DateTimePickerProps = {
  date?: number;
  range?: boolean;
  startDate?: number;
  endDate?: number;
  disabled?: boolean;
  startTimeCap?: number;
};

export const DateTimePicker: React.FC<DateTimePickerProps> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className='date-time-selector'>
      <Calendar value={currentDate} onChange={setCurrentDate} />
      <Clock value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};
