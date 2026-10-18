/* =========================================================
   SEARCH.JS — Owner: Group C
   Searches the planet data already loaded in planets.js 
========================================================= */

const url = "https://anurella.github.io/json/planet.json";

async function fetchPlanets() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch planets");
        }

        const planets = await response.json();


        return planets;

    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}
// Updates the HTML with the selected planet's information
function updatePlanetProfile(planet) {

    document.getElementById("pp-name").textContent = planet.name;
    document.getElementById("pp-type").textContent = planet.type;
    document.getElementById("pp-desc").textContent = planet.description;

    document.getElementById("pp-gravity").textContent = planet.gravity;
    document.getElementById("pp-mass").textContent = planet.mass;
    document.getElementById("pp-period").textContent = planet.period;

    document.getElementById("pp-temp").textContent = planet.temperature;
    document.getElementById("pp-moons").textContent = planet.moons;
    document.getElementById("pp-diameter").textContent = planet.diameter;
    document.getElementById("pp-distance").textContent = planet.distanceFromSun;

    const planetImage = document.getElementById("pp-image");

    planetImage.src = planet.image;
    planetImage.alt = planet.name;
}

function defaultPlanet(planets) {
    const earth = planets.find(function (planet) {
        return planet.name.toLowerCase() === "earth";
    });

    if (earth) {
        updatePlanetProfile(earth);

        // Show the planet profile
        profileFound.classList.remove("pp-hidden");

        // Hide the no-results section
        profileNoResults.classList.add("pp-hidden");

        // Clear previous errors
        errorElement.textContent = "";
    }
}

const searchInput = document.getElementById("search");

const searchButton = document.querySelector(".search-button");

const errorElement = document.getElementById("error");

const profileFound = document.getElementById("pp-found");

const profileNoResults = document.getElementById("pp-no-results");


async function setupSearch() {
   // Fetch the planetary data
    const planets = await fetchPlanets();

   searchInput.addEventListener("keydown", function (event) {
      
      if (event.key === "Enter") {
         event.preventDefault();
         searchButton.click();
      }

   });

    // Search only when the button is clicked
    searchButton.addEventListener("click", function () {
      const searchText = searchInput.value.toLowerCase().trim();

      if (searchText === "") {
        defaultPlanet(planets);
        return;
      }
      // Find a planet whose name matches the search
      const planet = planets.find(function (item) {
            return item.name.toLowerCase() === searchText;
      });

      // Update the profile if a match exists

      if (planet) {
            updatePlanetProfile(planet); 
             errorElement.textContent = "";
              // Show the planet profile
            profileFound.classList.remove("pp-hidden");

            // Hide the no-results section
            profileNoResults.classList.add("pp-hidden");

      } else {
          // Display error message
            errorElement.textContent = "No results";
            // Hide the planet profile
            profileFound.classList.add("pp-hidden");

            // Show the no-results section
            profileNoResults.classList.remove("pp-hidden");
      }
   });
}
setupSearch()