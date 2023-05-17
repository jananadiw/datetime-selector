declare module 'datetime-selector-react' {
  import React from 'react';

  export type DateTimePickerProps = {
    date?: Date | null;
    range?: boolean;
    startDate?: number;
    endDate?: number;
    disabled?: boolean;
    startTimeCap?: number;
  };

  const DateTimePicker: React.FC<DateTimePickerProps>;

  export default DateTimePicker;
}
