const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
// const url = 'https://icanhazdadjoke.com/';
const url =
	'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist,sexist&type=single';

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {
	// const config = {
	// 	headers: {
	// 		Accept: 'application/json',
	// 	},
	// };
	const res = await fetch(url);
    

	const data = await res.json();
    console.log(res.json);
	jokeEl.innerHTML = data.joke;
}

// function generateJoke() {
// 	const config = {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	};
// 	fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json()
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// 	);
// }