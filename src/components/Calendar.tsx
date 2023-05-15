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
  selectedDate: Date | null;
  setSelectedDate: (value: Date | null) => void;
};

export const Calendar = (props: CalendarProps) => {
  const { value = new Date(), onChange, selectedDate, setSelectedDate } = props;
  const startDate = dateFns.startOfMonth(value);
  const endDate = dateFns.endOfMonth(value);
  const numDays = dateFns.differenceInDays(endDate, startDate) + 1;
  const totalDates = dateFns.eachDayOfInterval({ start: startDate, end: endDate });
  const prefixDays = startDate.getDay(); // get the starting day of the month
  const prevMonth = () => onChange && onChange(dateFns.sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(dateFns.add(value, { months: 1 }));
  const today = new Date();

  const handleClickDate = (index: number) => {
    const date = dateFns.setDate(value, index);
    setSelectedDate && setSelectedDate(date);
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
        {totalDates.map((date) => {
          if (date.getMonth() !== value.getMonth()) {
            return <Cell key={date.toString()} />;
          }

          const isSelectedDate = selectedDate ? dateFns.isSameDay(date, selectedDate) : false;
          const isToday = dateFns.isToday(date);
          const isDisabled = isBeforeToday(date);

          return (
            <Cell
              isActive={isSelectedDate}
              isToday={isToday}
              className={`cell ${isDisabled ? 'cell__disabled' : ''}`}
              key={date.toString()}
              onClick={isDisabled ? undefined : () => handleClickDate(date.getDate())}
            >
              {dateFns.format(date, 'd')}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};
