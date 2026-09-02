// Se implementan las solicitudes con Fetch
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

fetchBtn.addEventListener('click', () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      // Send the data directly to our universal machine
      renderCharacters(data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});


// 2. Axios Button Logic
axiosBtn.addEventListener('click', () => {
  axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      // Send the data directly to our universal machine
      renderCharacters(response.data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}" width="150">
      <hr>
    `;
    dataContainer.appendChild(characterElement);
  });
}