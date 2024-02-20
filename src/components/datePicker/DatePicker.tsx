"use client";
import {
  faCalendarDays,
  faCaretDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useState } from "react";

const daysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

const DatePicker = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(today);
  const [date, setDate] = useState<string>(
    moment(currentDate).format("m/DD/YYYY")
  );

  //   console.log(date)

  const [isPickDate, setIsPickDate] = useState<boolean>(false);

  /**
   * @param {int} The month number, 0 based
   * @param {int} The year, not zero based, required to account for leap years
   * @return {Date[]} List with date objects for each day of the month
   */
  function getDaysInMonth(month: any, year: any) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleSelectDate = (value: any) => {
    console.log(value);
    setDate(moment(value).format("MM/DD/YYYY"));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendar: JSX.Element[] = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week: JSX.Element[] = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<></>);
        } else if (day <= days) {
          const date = new Date(year, month, day);
          //   const dayEvents = events[date.toISOString().split("T")[0]] || [];

          week.push(
            // <CalendarDay
            //   key={j}
            //   date={date}
            //   // onClick={() => addEvent(date)}
            //   onClick={() => {
            //     handleCreateEvent(date, dayEvents);
            //   }}
            //   events={
            //     <EventList
            //       dayEvents={dayEvents}
            //       events={events}
            //       date={date}
            //       setEvents={setEvents}
            //     />
            //   }
            // />

            <td
              className=" w-[250px] align-top cursor-pointer text-center "
              onClick={() => handleSelectDate(date)}
            >
              <div
                className={`h-10 w-10 flex justify-center items-center hover:bg-slate-200 rounded-full`}
              >
                <p>{date.getDate()}</p>
              </div>
              {/* <div onClick={(e) => e.stopPropagation()}>{events}</div> */}
            </td>
          );
          day++;
        }
      }

      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div className="relative">
      <div className={`min-w-[200px] w-[250px] border flex justify-between px-3 py-1 rounded  ${isPickDate ? ' outline outline-2' :''}`}>
        <div>
            <input value={date} className="" type="text"  />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCalendarDays}
            className=" cursor-pointer"
            onClick={() => setIsPickDate((prev) => !prev)}
          />
        </div>
      </div>
      <div
        className={`absolute w-[350px] h-auto bg-slate-500 top-full left-0 ${
          isPickDate ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-2">
          <div className="flex justify-between mb-4">
            <div className="flex gap-4 py-2">
              <h1>February 2024</h1>
              <div>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="flex">
              <div
                className="h-10 w-10 flex justify-center items-center hover:bg-slate-200 rounded-full"
                onClick={() => prevMonth()}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div
                className="h-10 w-10 flex justify-center items-center hover:bg-slate-200 rounded-full"
                onClick={() => nextMonth()}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </div>
          <div>
            <table className="table-auto w-full">
              <thead className=" text-black">
                <tr>
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>{renderCalendar()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
