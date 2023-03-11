/* this js file contains 3 functions - to insert, backspace and calculate the operation */

// insert() function to insert the number  or operand in textview 
function insert(num) {
  
    document.form1.textview.value = document.form1.textview.value + num;
    }

//  equal() function to return the result based on passed values.
function equal() {
    var exp = document.form1.textview.value;
    if (exp) {
        document.form1.textview.value = eval(exp)
    }
}

/* backspace() function to remove the number at the end of the numeric series in textview. */
/* Backspace is referred to as CE - Clear Element as specified in the assignment statement */
function backspace() {
    var exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}





