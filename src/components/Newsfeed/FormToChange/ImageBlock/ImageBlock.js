import React from 'react';
import { Field } from 'redux-form';
import {TextField} from '../fields';
import {afterTrim} from '../../../../validators';

import styles from '../styles.module.css';

const ImageBlock = props => {
  return <div className={styles.imageBlock} >
    <Field  name={'smallImage'} component={TextField} label={'Path of small image of News'} 
            elem={{tagName: 'input'}} validate={[afterTrim]}
    />
    <Field  name={'largeImage'} component={TextField} label={'Path of large image of News'} 
            elem={{tagName: 'input'}} validate={[afterTrim]}
    />
  </div>
};

export default ImageBlock;
