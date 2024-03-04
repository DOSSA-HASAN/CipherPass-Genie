let calculateButton = document.querySelector('#calculate')


calculateButton.addEventListener('click', ()=>{
    let inputDate = document.querySelector('#dob').value

    let dob = new Date(inputDate)
    
    let year = dob.getFullYear();

    let month = dob.getMonth();

    let day = dob.getDate();

    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let userYear = currentYear - year;
    let userMonth = currentMonth - month;
    let userDay = currentDay - day;

    if(userMonth < 0){
        userYear = userYear - 1
        userMonth = 12 - month;
    }

    if (userDay < 0) {
        // Get days in the previous month
        let daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();
        //we pass 0 as the day because js interprets it as the last day of the previous month
        userDay += daysInLastMonth; // Adding the days from the previous month

        //so what we are doing here is:
        //getting how many days are there in the previous month
        // thats achieved using the .getDate()
        // add it to the days
    }



    console.log(userYear)
    console.log(userMonth)
    console.log(userDay)
    
    console.log(`Age: ${userYear} years, ${userMonth} months, ${userDay} days`);
})