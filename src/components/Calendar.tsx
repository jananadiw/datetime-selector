import React from 'react';
import { startOfMonth, endOfMonth, differenceInDays } from 'date-fns';
import '../styles/layout.scss';
import { Cell } from '../components/Cell';
import { daysOfWeek } from '../DateUtils';
import calender_Forward_icon from '../assets/calender_Forward_icon.svg';
import calender_back_icon from '../assets/calender_back_icon.svg';

type CalendarProps = {
  value?: Date;
  onChange?: (value: Date) => void;
};

export const Calendar = (props: CalendarProps) => {
  const { value = new Date(), onChange } = props;
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay(); // get the starting day of the month
  return (
    <div className='calendar'>
      <div className='calendar__header'>
        <div className='calendar__header__navigation'>
          <img src={calender_back_icon}></img>
        </div>
        <div className='calendar__header__middle'>{'May 2023'}</div>
        <div className='calendar__header__navigation'>
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
            <Cell className='calendar__body cell__date' key={date}>
              {date}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};
