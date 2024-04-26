let getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json()
    return data
}

let renderSite = async () => {
    let restaurant = await getData("http://localhost:1337/api/restaurang?populate=*");
    let dishes = await getData("http://localhost:1337/api/dishes?populate=*");
    document.querySelector("#restaurant-name").innerHTML += restaurant.data.attributes.name;
    console.log(restaurant)
    //Restaurant info
    restaurant.data.attributes.employees.data.forEach(emp => {
        document.querySelector("#employees").innerHTML += `<li>${emp.attributes.first_name}</li>` 
    });
    document.querySelector("#location").innerHTML += restaurant.data.attributes.location;

    //Menu
    dishes.data.forEach(dish => {
        document.querySelector("#menu").innerHTML += `<li class="border">
            <p>${dish.attributes.name} - ${dish.attributes.price} kr</p>
            <p>${dish.attributes.categories.data.map(cat => cat.attributes.name)}</p>
            <p>Ingredients:</p>
            <ul>
            ${dish.attributes.ingredients.map(ingredient => `<li>${ingredient.name}</li>`)}
            </ul>
        </li>`
    })
}

renderSite();