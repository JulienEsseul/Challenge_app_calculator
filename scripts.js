// const zone_input_day = document.querySelector(".day_input input")
// zone_input_day.addEventListener("change", ()=> {
    
// })




const button = document.querySelector(".button")
button.addEventListener("click", () => {
    const zone_input_day = document.querySelector(".day_input input")
    let day = zone_input_day
    const zone_input_month = document.querySelector(".month_input input")
    let month = zone_input_month
    const zone_input_year = document.querySelector(".year_input input")
    let year = zone_input_year
    const today = new Date()
    const date_user_input = new Date(year.value, month.value, day.value)
    const result = new Date(today-date_user_input)
    const display_days = document.querySelector(".display_days")
    display_days.innerHTML = result.getDate()-2 //I decided to substract 2 because it seems that the current day and the inputed day count as a day, and it feels strange to me.
    const display_months = document.querySelector(".display_months")
    display_months.innerHTML = result.getMonth()+1 //+1 cause of index starting at 0 for months
    const display_years = document.querySelector(".display_years")
    display_years.innerHTML = result.getFullYear()-1970 // -1970 because the start of time is in 1970 in JS but I needed a base of 0. 
})