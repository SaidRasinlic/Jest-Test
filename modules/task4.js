export default class TaskFour {

  /**
   * @param {String} str 
   */
  capitalize(str) {
    if(typeof str !== 'string')
    throw new Error('Expected argument to be a String');
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
  }
}

/* SOLUTION 2: return string[0].toUpperCase() + string.slice(1); */