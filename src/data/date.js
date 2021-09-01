
function createDate() {

    // creates date object
    const DATE = new Date();

    // Array of days
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    // Array of month
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    var day = weekday[DATE.getDay()];
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var dayChar = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = dayChar + " " + monthNames[month] + " " + year;
    var date = day + " " + newdate
return date;
}

export {
    createDate
}