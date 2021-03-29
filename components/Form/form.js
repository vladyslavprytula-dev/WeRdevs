import styles from "./form.module.scss";

export default function Form({ onClose, newMonth, newDayOfWeek }) {
  return (
    <>
      <button type="button" onClick={onClose} className={styles.form__btn}>
        Х
      </button>
      <div className={styles.form__box}>
        <div className={(styles.input__box, styles.input__left)}>
          <label htmlFor="month" className={styles.input__label}>
            Month
          </label>
          <br />
          <input
            className={styles.form__input}
            placeholder={newMonth}
            id="month"
            disabled
          />
        </div>
        <div className={(styles.input__box, styles.input__right)}>
          <label htmlFor="day" className={styles.input__label}>
            Day
          </label>
          <br />
          <input
            className={styles.form__input}
            placeholder={newDayOfWeek}
            id="day"
            disabled
          />
        </div>
      </div>
    </>
  );
}
