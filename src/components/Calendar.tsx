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
  selectedStartDate?: Date | null;
  selectedEndDate?: Date | null;
  setSelectedDate: (value: Date | null) => void;
  setSelectedStartDate?: (value: Date | null) => void;
  setSelectedEndDate?: (value: Date | null) => void;
  range: boolean;
};

export const Calendar = (props: CalendarProps) => {
  const {
    value = new Date(),
    onChange,
    selectedDate,
    setSelectedDate,
    selectedStartDate,
    selectedEndDate,
    setSelectedStartDate,
    setSelectedEndDate,
    range,
  } = props;
  const startDate = dateFns.startOfMonth(value);
  const endDate = dateFns.endOfMonth(value);
  const totalDates = dateFns.eachDayOfInterval({ start: startDate, end: endDate });
  const prefixDays = startDate.getDay(); // get the starting day of the month
  const prevMonth = () => onChange && onChange(dateFns.sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(dateFns.add(value, { months: 1 }));
  const today = new Date();
  const dateRange = [selectedStartDate?.toString(), selectedEndDate?.toString()];

  // const handleClickDate = (index: number) => {
  //   const date = dateFns.setDate(value, index);
  //   setSelectedDate && setSelectedDate(date);
  //   onChange && onChange(date);
  // };

  const handleClickDate = (index: number) => {
    const date = dateFns.setDate(value, index);
    if (range) {
      if (selectedStartDate && !selectedEndDate) {
        if (dateFns.isBefore(date, selectedStartDate)) {
          setSelectedStartDate && setSelectedStartDate(date);
          setSelectedEndDate && setSelectedEndDate(selectedStartDate);
        } else {
          setSelectedEndDate && setSelectedEndDate(date);
        }
      } else {
        setSelectedStartDate && setSelectedStartDate(date);
        setSelectedEndDate && setSelectedEndDate(null);
      }
    } else {
      setSelectedDate && setSelectedDate(date);
    }
    onChange && onChange(date);
  };

  const isBeforeToday = (date: Date) => {
    return dateFns.isBefore(date, dateFns.startOfDay(today));
  };

  return (
    <div className='calendar'>
      <div className='calendar__header'>
        <div className='calendar__header__navigation' onClick={prevMonth}>
          <img src={calender_back_icon} alt='Previous Month' />
        </div>
        <div className='calendar__header__middle'>{dateFns.format(value, 'LLLL yyyy')}</div>
        <div className='calendar__header__navigation' onClick={nextMonth}>
          <img src={calender_Forward_icon} alt='Next Month' />
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
          const isSelectedRange =
            selectedStartDate &&
            selectedEndDate &&
            dateFns.isSameDay(date, selectedStartDate) &&
            dateFns.isSameDay(date, selectedEndDate);
          const isToday = dateFns.isToday(date);
          const isDisabled = isBeforeToday(date);

          const isActive = isSelectedDate || isSelectedRange || false;

          const dateRange: Date[] = [];
          if (selectedStartDate && selectedEndDate) {
            const currentDate = new Date(selectedStartDate);
            while (currentDate <= selectedEndDate) {
              dateRange.push(new Date(currentDate));
              currentDate.setDate(currentDate.getDate() + 1);
            }
          }
          console.log('dateRange', dateRange);

          return (
            <Cell
              isActive={isActive}
              isToday={isToday}
              isRange={range && dateRange.some((d) => dateFns.isSameDay(d, date))}
              isStart={range && selectedStartDate && dateFns.isSameDay(date, selectedStartDate)}
              isEnd={range && selectedEndDate && dateFns.isSameDay(date, selectedEndDate)}
              startDate={selectedStartDate}
              endDate={selectedEndDate}
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
