import React, { useState, useEffect } from 'react';
import { Clock } from './Clock';
import { ActionBar } from './ActionBar';

import '../styles/layout.scss';

type TimePickerProps = {
  value: Date;
  onChange: (value: Date) => void;
  range?: boolean;
};

export const TimePicker: React.FC<TimePickerProps> = ({ value, onChange, range }) => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const setSelectedDateTime = () => {
    console.log('selected time', value);
    return value;
  };

  const initSelection = () => {
    console.log('empty selected date');
  };

  useEffect(() => {
    setSelectedDateTime();
  }, [value]);

  return (
    <>
      {range ? (
        <div>
          <Clock
            value={value}
            onChange={setStartTime}
            range={true}
            text={'Start time'}
            time={startTime}
          />
          <Clock
            value={value}
            onChange={setEndTime}
            range={true}
            text={'End time'}
            time={endTime}
          />
        </div>
      ) : (
        <Clock value={value} onChange={setStartTime} time={startTime} />
      )}

      <ActionBar onClick={setSelectedDateTime} onReset={initSelection} />
    </>
  );
};
