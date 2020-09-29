const get_meal = document.getElementById("get_meal");
const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';

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
});

const createMeal = meal => {
	const ingredients = [];

	for (let i = 1; i <= 20; i++) {
		if (meal['strIngredient${i}']) {
            console.log[meal['strIngredient${i}']];
		} else {
			break;
		}
	}
};