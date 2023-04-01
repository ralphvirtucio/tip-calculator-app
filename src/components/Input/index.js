import styles from './Input.module.css';

export const Input = (props) => {
  const validation = props.validate ? 'validate' : '';

  return (
    <div className={styles.form__control}>
      <div className={styles[validation]}>
        <label htmlFor={props.name} className={styles.label}>
          {props.label}
        </label>
        {props.validate && <p>Can't be zero</p>}
      </div>
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
