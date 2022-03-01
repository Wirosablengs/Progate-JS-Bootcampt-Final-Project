const dota_container = document.getElementById('heroes_card');
var keyword = "";

function heroNotFound(notFound) {
    let notFoundEle = document.getElementById("notFound");
    if (notFound) {
        notFoundEle.innerHTML = "Heroes not found, try to not using capital letter";
    } else { 
        notFoundEle.innerHTML = '';
    }
  }

async function fetchHeroes () {
    const url= `https://api.opendota.com/api/heroStats/`;
    let notFound = true;
    const response = await fetch(url);
    const heroes = await response.json();
    for (let i=0; i<heroes.length-1; i++) {
        if (heroes[i].localized_name.toLowerCase().includes(keyword)  ) {
            notFound = false;
            createHeroesCard(heroes[i]);
        } 
    }
    heroNotFound(notFound);        
}

function createHeroesCard(heroes) {
    let heroContainer = document.createElement("myDiv"); 
    
    const img = "https://api.opendota.com" + heroes.img;
    const newImg = document.createElement("img");    
    newImg.setAttribute("src", img);
    heroContainer.append(newImg);

    const name = heroes.localized_name;
    const newEle1 = document.createElement("h1");
    newEle1.innerHTML = name;
    heroContainer.append(newEle1);

    const attr = heroes.primary_attr;
    const newEle2= document.createElement("p");
    newEle2.innerHTML = `Primary Attribute: ${attr} (strength/agility/intelligence)`;
    heroContainer.append(newEle2);

    const atkType = heroes.attack_type;
    const newEle3 = document.createElement("p");
    newEle3.innerHTML = `Attack Type: ${atkType}`;
    heroContainer.append(newEle3);

    const roles = heroes.roles;
    const newEle4 = document.createElement("p");
    newEle4.innerHTML = `Roles: ${roles}`;
    heroContainer.append(newEle4);

    const atkRange = heroes.attack_range;
    const newEle5= document.createElement("p");
    newEle5.innerHTML = `Attack Range: ${atkRange}`;
    heroContainer.append(newEle5);

    const proSpeed = heroes.projectile_speed;
    const newEle6 = document.createElement("p");
    newEle6.innerHTML = `Projectile Speed: ${proSpeed}`;
    heroContainer.append(newEle6);

    const atkRate = heroes.attack_rate;
    const newEle7 = document.createElement("p");
    newEle7.innerHTML = `Attack Rate: ${atkRate}`;
    heroContainer.append(newEle7);

    const moveSpeed = heroes.move_speed;
    const newEle8 = document.createElement("p");
    newEle8.innerHTML = `Move Speed: ${moveSpeed}`;
    heroContainer.append(newEle8);

    dota_container.append(heroContainer);
};

const findHeroes = async () => {
    dota_container.innerHTML = '';
    keyword = document.getElementById("search-input").value;
    fetchHeroes();
}    