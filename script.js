const recipes = [
    { name: "Pasta", category: "veg", time: 15 },
    { name: "Chicken Curry", category: "non-veg", time: 30 },
    { name: "Egg Fried Rice", category: "veg-egg", time: 20 },
    { name: "Paneer Tikka", category: "veg", time: 25 },
    { name: "Fish Fry", category: "non-veg", time: 20 }
];

function searchRecipes() {
    const time = document.getElementById("time").value;
    const category = document.getElementById("category").value;
    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = "";

    if (!time) {
        alert("Please enter a cooking time.");
        return;
    }

    const filteredRecipes = recipes.filter(r => r.category === category && r.time <= time);

    if (filteredRecipes.length === 0) {
        recipeList.innerHTML = "<p>No recipes found.</p>";
    } else {
        filteredRecipes.forEach(recipe => {
            const recipeItem = document.createElement("div");
            recipeItem.innerHTML = `<button onclick="openRecipe('${recipe.name}')">${recipe.name}</button>`;
            recipeList.appendChild(recipeItem);
        });
    }
}

function openRecipe(recipeName) {
    window.location.href = `recipe.html?name=${recipeName}`;
}
