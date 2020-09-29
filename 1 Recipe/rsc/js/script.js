const get_meal = document.getElementById("get_meal");
const meal = document.getElementById("meal");
const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
var createMeal;

get_meal.addEventListener('click', () => {
    fetch(api_url)
        .then(res => res.json())
        .then(res => {
            console.log(res.meals[0]);
            createMeal(res.meals[0]);
    })
    .catch (e => {
        console.warn(e);
    });









})