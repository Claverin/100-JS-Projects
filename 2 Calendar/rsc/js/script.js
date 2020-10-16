const moods = document.querySelectorAll(".mood");
const calendarContainer = document.getElementsByClassName("calendarContainer");
const defaultColor = '#888';
let activeColor = '';
const months = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];

moods.forEach(mood => {
    mood.addEventListener('click', () => {
        if( mood.classList.contains('selected') ) {
            mood.classList.remove('selected');
            activeColor = defaultColor;
        }
        else {

            moods.forEach(mood => {
                mood.classList.remove('selected');
            });

            mood.classList.add('selected');
            activeColor = getComputedStyle(mood).getPropertyValue('color');
        }
        console.log(activeColor);
    });
});

let calendarMonths = '';

months.forEach(month => {
    calendarMonths += '<div></div>'
});

const colorDays = document.querySelectorAll('.calendarDay');

colorDays.forEach(days => {
    days.addEventListener('click',() =>{
        days.style.color = activeColor;
    })
})