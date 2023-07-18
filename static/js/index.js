const display = document.querySelectorAll('.display');

// Main function that updates date, weekday and time to their respective display elements every second
setInterval(function() {
    show_date(display[0]);
    show_week_day(display[1]);
    show_time(display[2]);
}, 1000);


// Function to get current date and set it to an element
function show_date(element) {
    const date = new Date().toLocaleString('default', {day: 'numeric', month: 'long', year: 'numeric'});

    element.textContent = date;
}

// Function to get current weekday and set it to an element
function show_week_day(element) {
    const week_day = new Date().toLocaleString('default', {weekday: 'long'});

    element.textContent = week_day;
}

// Function to get current time and set it to an element
function show_time(element) {
    const time = new Date();
    const hour = x(time.getHours());
    const minute = x(time.getMinutes());
    const second = x(time.getSeconds());
  
    element.textContent = hour + ':' + minute + ':' + second;

    // Function to convert single digit time element to double digit
    function x(time_element) {
        if (time_element < 10) {
          return "0" + time_element.toString();
        }
        return time_element;
    }
}
