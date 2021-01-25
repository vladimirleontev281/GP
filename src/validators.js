export const required = value => value ? undefined : 'Field is required!';
export const afterTrim = value => !value ? undefined : value.trim() ?
  undefined : 'The data can\'t consist only of whitespace characters!';