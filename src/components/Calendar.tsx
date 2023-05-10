import React from 'react';
import { startOfMonth, endOfMonth, differenceInDays, sub, add, format, setDate } from 'date-fns';
import '../styles/calendar.scss';
import { Cell } from '../components/Cell';
import { daysOfWeek } from '../DateUtils';
import calender_Forward_icon from '../assets/calender_Forward_icon.svg';
import calender_back_icon from '../assets/calender_back_icon.svg';

type CalendarProps = {
  value?: Date;
  onChange: (value: Date) => void;
};

export const Calendar = (props: CalendarProps) => {
  const { value = new Date(), onChange } = props;
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay(); // get the starting day of the month
  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(add(value, { months: 1 }));

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange && onChange(date);
  };

  return (
    <div className='calendar'>
      <div className='calendar__header'>
        <div className='calendar__header__navigation' onClick={prevMonth}>
          <img src={calender_back_icon}></img>
        </div>
        <div className='calendar__header__middle'>{format(value, 'LLLL yyyy')}</div>
        <div className='calendar__header__navigation' onClick={nextMonth}>
          <img src={calender_Forward_icon}></img>
        </div>
      </div>
      <div className='calendar__body'>
        {daysOfWeek.map((day) => (
          <Cell className='calendar__body cell__days' key={day}>
            {day}
          </Cell>
        ))}
        {/* prefix days */}
        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          return (
            <Cell
              className='calendar__body cell__date'
              key={date}
              onClick={() => handleClickDate(date)}
            >
              {date}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};
