import { Field } from 'redux-form';

export const TextField = ({input, label, meta, elem, className, styles, ...props}) => {
  const {touched, error} = meta;
  const {tagName, type} = elem;
  const forSpread = (tagName == 'input' && type) ? {type: type} : {};
  const tagClass = `${elem.tagName === 'textarea' ? styles.textarea : styles.input}`;
  const errorClass = `${touched && error ? styles.error : ''}`;
  return <div className={className}>
    <label className={styles.fieldDescrip}>
      <span>{label}</span>
      {touched && error ? <span>&emsp;&emsp;{`( error: ${error} )`}</span> : null}
    </label>
    <Field  component={tagName} {...input}  {...forSpread} 
            className={`${tagClass} ${errorClass}`}
    />
  </div>
};