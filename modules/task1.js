export default class TaskOne {
  
  stringLength(str) {
    if (str.length < 1 || str.length > 10)
    throw new Error('String must be longer than 1 and less than 10 characters.');
    return str.length;
  }
}
