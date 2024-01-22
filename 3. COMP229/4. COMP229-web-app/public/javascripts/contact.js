/* @author:     Armando Lima  */
/* @studentid:  301235438     */
/* @date:       June 20, 2023 */
/* @filename:   contact.js    */

function submitForm(event) {
    event.preventDefault();
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contactNumber = document.getElementById("contactNumber").value;
    let message = document.getElementById("message").value;
    
    window.location.href = "home";
} 