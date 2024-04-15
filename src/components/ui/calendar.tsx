import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { DatePicker } from '../interface/interface-day-picker';

function Calendar({ onDateSelect }: DatePicker) {
  // const [selected, setSelected] = useState<new Date().toISOString().split("T")[0] | undefined>();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  
  // const handleDateChange = (newDate: Date) => {
  //   setSelected(newDate.toISOString().split("T")[0]);
  //   onDateChange(newDate.toISOString().split("T")[0]);
  // };


  const handleDateChange = (date: Date) => {
    setSelectedDay(date);
    onDateSelect(date);
  };

  return (
    <div>
      <DayPicker 
      className='flex justify-center text-black'
      onDayClick = {handleDateChange} 
      selected = {selectedDay} />
      {selectedDay && (
        <p className='text-center justify-center items-top text-black'>Has seleccionado: {selectedDay.toLocaleDateString()}</p>
      )}
    </div>
  );
}

export default Calendar;