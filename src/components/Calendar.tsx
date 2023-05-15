import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import '../styles/calendar.scss';
import '../styles/cell.scss';
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
  const startDate = dateFns.startOfMonth(value);
  const endDate = dateFns.endOfMonth(value);
  const numDays = dateFns.differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay(); // get the starting day of the month
  const prevMonth = () => onChange && onChange(dateFns.sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(dateFns.add(value, { months: 1 }));
  const today = new Date();

  const handleClickDate = (index: number) => {
    const date = dateFns.setDate(value, index);
    onChange && onChange(date);
  };

  const isBeforeToday = (date: Date) => {
    return dateFns.isBefore(date, dateFns.startOfDay(today));
  };

  return (
    <div className='calendar'>
      <div className='calendar__header'>
        <div className='calendar__header__navigation' onClick={prevMonth}>
          <img src={calender_back_icon}></img>
        </div>
        <div className='calendar__header__middle'>{dateFns.format(value, 'LLLL yyyy')}</div>
        <div className='calendar__header__navigation' onClick={nextMonth}>
          <img src={calender_Forward_icon}></img>
        </div>
      </div>
      <div className='calendar__body'>
        {daysOfWeek.map((day) => (
          <Cell className='cell__days' key={day}>
            {day}
          </Cell>
        ))}
        {/* prefix days */}
        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isSelectedDate = date === value.getDate();
          const isDisabled = isBeforeToday(dateFns.setDate(value, date));
          return (
            <Cell
              isActive={isSelectedDate}
              className={`cell ${isDisabled ? 'cell__disabled' : ''}`}
              key={date}
              onClick={isDisabled ? undefined : () => handleClickDate(date)}
            >
              {date}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};
