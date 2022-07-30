const result = document.getElementById("result");
const searchInput = document.querySelector(".search");
const btn = document.getElementById("search-btn");
const sound = document.getElementById("sound");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url} ${inpWord}`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <li class="word">
        <div class="details">
          <p>${inpWord}</p>
          <span> ${data[0].meanings[0].partOfSpeech}  ${data[0].phonetics[1].text}</span>
        </div>
        <button"><i class="fa-solid fa-volume-high"></i></button>
      </li>
      <div class="content">
        <li class="meaning">
          <div class="details">
            <p>meaning</p>
            <span>${data[0].meanings[0].definitions[0].definition}</span>
          </div>
        </li>
        <li class="antonyms">
          <div class="details">
            <p>partOfSpeech</p>
            <span>${data[0].meanings[0].partOfSpeech}</span>
          </div>
        </li>
      </div>
        `;
    });
});
