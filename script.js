const names = ["Ethan", "Kris", "Alex", "Goku", "Hawk"];
const countries = ["USA", "Brazil", "China", "France", "Russia", "South Africa"];

const team1Div = document.querySelector("#team1");
const team2Div = document.querySelector("#team2");
const randomizeButton = document.querySelector("#randomize");

randomizeButton.addEventListener("click", () => {
  // Shuffle the names and countries arrays
  shuffleArray(names);
  shuffleArray(countries);

  // Split the countries array into two separate arrays for each team
  const team1Countries = countries.slice(0, 3);
  const team2Countries = countries.slice(3);

  // Generate the teams
  const team1 = [names[0], names[1], names[2]];
  const team2 = [names[3], names[4]];

  // Display the teams and their countries
  team1Div.innerHTML = "<p><span class='name'>" + team1[0] + "</span>, <span class='name'>" + team1[1] + "</span>, and <span class='name'>" + team1[2] + "</span> (Team 1)</p>";
  team2Div.innerHTML = "<p><span class='name'>" + team2[0] + "</span> and <span class='name'>" + team2[1] + "</span> (Team 2)</p>";
  
  setTimeout(() => {
    team1Div.innerHTML += "<p><span class='name'>" + team1[0] + "</span> <span class='test'><span class='test'>got</span></span> <span class='country'>" + team1Countries[0] + "</span>, <span class='name'>" + team1[1] + "</span> <span class='test'><span class='test'>got</span></span> <span class='country'>" + team1Countries[1] + "</span>, and <span class='name'>" + team1[2] + "</span> <span class='test'>got</span> <span class='country'>" + team1Countries[2] + "</span>.</p>";
    team2Div.innerHTML += "<p><span class='name'>" + team2[0] + "</span> <span class='test'><span class='test'>got</span></span> <span class='country'>" + team2Countries[0] + "</span> and <span class='name'>" + team2[1] + "</span> <span class='test'><span class='test'>got</span></span> <span class='country'>" + team2Countries[1] + "</span>.</p>";
  }, 1500);
});

// Shuffle an array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
