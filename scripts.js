

const button = document.querySelector(".button")
button.addEventListener("click", () => {
    try {                                                                   //Delete errors messages (and red borders) if any already displayed
        const error_tag = document.querySelectorAll("p")                    //Would have loved to make it a function but got trouble (see function.js)
        for (let i=0 ; i<error_tag.length ; i++){
            error_tag.item(i).remove()
        }
        const error_border = document.querySelectorAll("div div input")
        for (let i = 0 ; i<error_border.length; i++) {
            error_border.item(i).removeAttribute("style")
        }
    } catch {}


    const zone_input_day = document.querySelector(".day_input input")
    const zone_input_month = document.querySelector(".month_input input")
    const zone_input_year = document.querySelector(".year_input input")
    const inputed_date = moment(zone_input_day.value + "-" + zone_input_month.value + "-" + zone_input_year.value.toString(), "DD-MM-YYYY")

    let not_enough_numbers = 0
    if (zone_input_day.value.length < 2) {
        display_error_message("Need 2 numbers", ".day_input")
        not_enough_numbers++
    }
    if (zone_input_month.value.length < 2) {
        display_error_message("Need 2 numbers", ".month_input")
        not_enough_numbers++
    }
    if (zone_input_year.value.length < 4) {
        display_error_message("Need 4 numbers", ".year_input")
        not_enough_numbers++
    }
    if (not_enough_numbers > 0) {
        return
    }




    if (inputed_date.isValid() === true) {                                  //Verification valid format
        if (inputed_date.isBefore(moment())) {                              //Verification date inputed is in the past            
            const display_days = document.querySelector(".display_days")
            let counts_days = setInterval(counter_days, 50)                                  
            let i_days = 0                                                            
            function counter_days() {                                                 
                display_days.innerHTML = ++i_days
                if (i_days === moment().subtract(zone_input_day.value, "days").get("date")) {
                    clearInterval(counts_days)
                }
            } 


            const display_months = document.querySelector(".display_months")
            let counts_months = setInterval(counter_months, 50)                                  
            let i_months = 0                                                            
            function counter_months() {                                                 
                display_months.innerHTML = ++i_months
                if (i_months === moment().subtract(zone_input_month.value, "months").get("month")) {
                    clearInterval(counts_months)
                }
            }


            const display_years = document.querySelector(".display_years")      //Tried to make a function out of this mess but couldn't figure out how since
            let counts_years = setInterval(counter_years, 50)                                  //it seems like that setInterval will run ITSELF again and again rather than running 
            let i_years = 0                                                           //the function we give it, meaning that the value of the parameters you gives it will 
            function counter_years() {                                                //stay the same even if your function is supposed to change them. 
                display_years.innerHTML = ++i_years
                if (i_years === moment().get("year") - zone_input_year.value) {
                    clearInterval(counts_years)
                }
            }


        } else {                                                            //Display error messages if not in the past
            if (zone_input_year.value > moment().year()) {
                display_error_message("Must be in the past", ".year_input")
            } else if (zone_input_year.value == moment().year() && zone_input_month.value > moment().month()+1) {
                display_error_message("Must be in the past", ".month_input")
            } else if (zone_input_year.value == moment().year() && zone_input_month.value == moment().month()+1 && zone_input_day.value > moment().date()) {
                display_error_message("Must be in the past", ".day_input")
            }
        }

    } else {                                                                //Checking where the format error is
        if (zone_input_year.value <= moment().year() && zone_input_month.value == 2 && zone_input_day.value == 29) {
            display_error_message("There was no 29/02 this year", ".day_input")
        }
        if (RegExp("^(0?[1-9]|[12][0-9]|3[01])$").test(zone_input_day.value) === false) {
            display_error_message("Must be a valid day", ".day_input")
        }
        if (RegExp("^(0?[1-9]|1[012])$").test(zone_input_month.value) === false) {
            display_error_message("Must be a valid month", ".month_input")
        }
        if (zone_input_year.value > moment().year()) {
            display_error_message("Must be in the past", ".year_input")
        }
    }

})
