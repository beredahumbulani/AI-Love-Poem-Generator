function displayPoem(response) {
  const poemElement = document.querySelector("#poem");
  const imagesContainer = document.querySelector("#images-container");

  // Display the poem
  poemElement.innerHTML = response.data.answer;
  poemElement.classList.remove("hidden");

  // Display images based on topics
  const topics = ["love", "heart", "nature", "stars", "together"];
  topics.forEach((topic, index) => {
    const imageElement = document.querySelector(`#image${index + 1}`);
    imageElement.src = `https://source.unsplash.com/featured/?${topic}`;
    imageElement.alt = topic;
    imageElement.style.display = "block"; // Show the image
  });
  imagesContainer.classList.remove("hidden");
}

function generatePoem(event) {
  event.preventDefault();

  const instructionsInput = document.querySelector("#user-instructions");
  const apiKey = "2046c535afeb092fo82f1d306d8a2b2t"; // Use your own API key
  const context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning.";
  const prompt = `User instructions: Generate a love poem about ${instructionsInput.value}`;
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  const poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a love poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

const poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
