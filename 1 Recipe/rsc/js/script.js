const get_meal = document.getElementById("get_meal");
const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';

get_meal.addEventListener('click', () => {
    fetch(api_url)
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
    })
    .catch (e => {
        console.warn(e);
    });
});

const createMeal = meal => {
    
    let ingredients = "";
    let ingredientsCount = 0;

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredientsCount++;
            ingredients = ingredients+ "<li>" + meal[`strIngredient${i}`] + "</li>";
        }
        else {
            break;
        }
    };

    const newDishHtml =`
        <img class="col-5 mb-2" src="${meal.strMealThumb}"/>
        <div class="col-7 mb-2"><h1>${meal.strMeal}</h1><br>${meal.strInstructions}</div>
        <div class="col-5 pt-2 border-top">
        <h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="445" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
            </div>
        </div>
        <div class="col-7 pt-2 text-left border-top">
            <div><b>Category: </b>${meal.strCategory}</div>
            <div><b>Area: </b>${meal.strArea}</div>
            <div><h4> ${ingredientsCount} Indergredients: </h4><ul class="ml-5" style="column-count: 3;"> ${ingredients} </ul></div>
        </div>
        `;

    meal_container.innerHTML=newDishHtml;
};