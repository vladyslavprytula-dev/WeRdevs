import { useState, useEffect } from "react";
import moment from "moment";
import buildCalendar from "./build";
import PopUp from "../PopUp/popUp";
import Form from "../Form/form";
import Banner from "../Banner/banner";
import styles from "./calendar.module.scss";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [calendar, setCalendar] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [month, setMonth] = useState("");
  useEffect(() => {
    setCalendar(buildCalendar(selectedDate));
  }, [selectedDate]);

  const dateClickHandler = (date) => {
    setSelectedDate(date);

    let day = date.format("Do");
    let month = date.format("MMMM");
    let weekDay = date.format("dddd");

    setDayOfWeek(`${day} ${weekDay}`);
    setMonth(month);
    setShowPopUp(true);
  };

  const togglePopUp = () => {
    setShowPopUp((prevPopUp) => !prevPopUp);
    setSelectedDate(moment());
  };

  ////////////Calendar title////////////////////////////////////////////

  function currMonthName() {
    return selectedDate.format("MMMM");
  }
  function currYear() {
    return selectedDate.format("YYYY");
  }
  function prevMonth() {
    return selectedDate.clone().subtract(1, "month");
  }
  function nextMonth() {
    return selectedDate.clone().add(1, "month");
  }
  ////////////////////////////////////////////////////////////////////////

  ///////////////Day Styles///////////////////////////////////////////////

  function isSelected(day) {
    return selectedDate.isSame(day, "day");
  }
  function lastMonthDay(day) {
    return moment(day).isBefore(selectedDate, "month");
  }
  function nextMonthDay(day) {
    return moment(day).isAfter(selectedDate, "month");
  }
  /////////////////////////////////////////////////////////////////////

  function dayStyles(day) {
    if (lastMonthDay(day)) return styles.innextmonthday;
    if (nextMonthDay(day)) return styles.inprevmonthday;
    if (isSelected(day)) return styles.today;
    return styles.day;
  }
  return (
    <section className={styles.calendar}>
      <Banner />
      <div className={styles.calendar__main}>
        <div className={styles.calendar__container}>
          <div className={styles.calendar__box}>
            <button
              type="button"
              className={styles.iconButton__left}
              onClick={() => setSelectedDate(prevMonth())}
            ></button>
            <h3 className={styles.calendar__title}>
              {currMonthName()} {currYear()}
            </h3>
            <button
              type="button"
              className={styles.iconButton__right}
              onClick={() => setSelectedDate(nextMonth())}
            ></button>
          </div>
          <div className={styles.calendar__line}></div>
          <table className={styles.table}>
            <tbody>
              {calendar.map((week, wi) => (
                <tr key={wi} className={styles.calendar__row}>
                  {week.map((day, di) => (
                    <td
                      key={di}
                      className={`${dayStyles(day)} `}
                      onClick={() => {
                        // if (day < moment(new Date()).startOf("day")) return;

                        dateClickHandler(day);
                      }}
                    >
                      <div>{day.format("D").toString()}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.calendar__line}></div>
          <ul className={styles.week}>
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <li className={styles.week__day}>{d}</li>
            ))}
          </ul>
          <div className={styles.calendar__line}></div>
        </div>
        {showPopUp && (
          <PopUp onClose={togglePopUp}>
            <Form
              onClose={togglePopUp}
              newMonth={month}
              newDayOfWeek={dayOfWeek}
            />
          </PopUp>
        )}
      </div>
    </section>
  );
}
