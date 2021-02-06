import { Field } from 'redux-form';

export const TextField = ({input, label, meta, elem, className, styles, ...props}) => {
  const {touched, error} = meta;
  const {tagName, type} = elem;
  const forSpread = (tagName == 'input' && type) ? {type: type} : {};
  const tagClass = `${elem.tagName === 'textarea' ? styles.textarea : styles.input}`;
  const errorClass = `${touched && error ? styles.error : ''}`;

  return <div className={className}>
    <label className={`unselectable ${styles.fieldDescrip}`}>
      <span className={styles.label}>{label}</span>
      {touched && error ? <span>{`( error: ${error} )`}</span> : null}
    </label>
    <Field  component={tagName} {...input}  {...forSpread} 
            className={`${tagClass} ${errorClass}`} 
    />
  </div>
};

export const CheckBox = ({input, label, className, styles, ...props}) => {
  return <div className={className}>
    <Field  component={'input'} type={'checkbox'} id={input.name} {...input}
            className={styles.checkbox} 
    />
    <label htmlFor={input.name} className={styles.fieldDescrip}>{label}</label>
  </div>
};