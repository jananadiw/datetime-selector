import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { TimePicker } from './components/TimePicker';

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

export const DateTimePicker: React.FC<DateTimePickerProps> = ({ range, date }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className='date-time-selector'>
      <Calendar
        value={currentDate}
        onChange={setCurrentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedEndDate={endDate}
        setSelectedEndDate={setEndDate}
        range={true}
      />
      <TimePicker range={true} value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};
