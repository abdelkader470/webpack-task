import generateJoke from "./generateJoke";
import "./style/main.scss";

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
generateJoke();
