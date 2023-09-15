function display_error_message(message, tag) {
// message : Error message to be displayed. Need a string
// tag : html tag under which the message will be displayed. Need a CSS selector string (Exemple : ".input"). 

    const error_tag = document.createElement("p")
    error_tag.innerHTML = message
    error_tag.setAttribute("style", "color: hsl(0, 100%, 67%); font-weight: 400; font-style: italic;")
    const tag_var = document.querySelector(tag)
    tag_var.appendChild(error_tag)  

    const error_border = document.querySelector(tag + " input")
    error_border.setAttribute("style", "border-color: hsl(0, 100%, 67%);")
}





// function counter(start_number, stop_number, tag_variable) {
// // start_number : Number at which the counter start
// // stop_number : Number to which the counter must stop
// // tag_variable : Variable capturing the HTML tag where the counter must be displayed.
// tag_variable.innerHTML = start_number
// ++start_number
// console.log(start_number)
// if (start_number === stop_number) {
//     clearInterval()
//     return
// }

    
// }







// function refreshing_errors (selector, element_removed) {                         //Function I tried to use to refresh errors messages/borders
// //selector : Selector of the element to be removed                               //but the differences of method to use had me in trouble. 
// //element_removed : method needed to remove the desired element. 
//             const error = document.querySelectorAll(selector)
//             for (let i=0; i<error.length ; i++) {
//                 error.item(i).element_removed
//             }
//         }
