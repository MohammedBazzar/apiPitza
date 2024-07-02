async function getMenu(){

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const count = data.count;
    const pitzaMenu =data.recipes;
    const result = pitzaMenu.map( function(element){
        return `<div class="row">
        <div class="pitzamenu">
        <h3>${element.title}</h3>
        <img src="${element.image_url}">
        </div>
        </div>
        `
    }).join("");
    document.querySelector(".count").textContent+=count;
    document.querySelector(".pitzamenu").innerHTML+=result;
}
getMenu();