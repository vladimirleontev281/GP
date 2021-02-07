const emailRegexpString_v1 = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
const emailRegexpString_v2 = "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";

export const required = value => value ? undefined : 'Field is required!';
export const afterTrim = value => !value ? undefined : value.trim() ?
  undefined : 'The data can\'t consist only of whitespace characters!';
export const email = value => value.match(new RegExp(emailRegexpString_v1)) ? 
  undefined : 'Not a valid value!';
export const englishLetters = value => /^[a-zA-Z]*$/.test(value) ? 
  undefined : 'Sorry, but only Latin characters are allowed.';
