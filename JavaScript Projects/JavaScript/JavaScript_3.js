function countReveal (country) {
    let thing = country.getAttribute("data-country");
    country.innerHTML = country.innerHTML+" cars are made in "+thing+".";
}