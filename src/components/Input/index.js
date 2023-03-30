import styles from './Input.module.css';

export const Input = (props) => {
  return (
    <div className={styles.form__control}>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        className={`${styles.input} ${styles[`${props.class}`]}`}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
        placeholder={0}
      />
    </div>
  );
};
