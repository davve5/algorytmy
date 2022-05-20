
/**
 * problem plecakowy
 * (x0, .... x1)
 * x nalezy do {0, 1}
 * 
 * 
 * drzewo binarne
 * obcinamy galezie ktore sa niepotrzebne
 * 
 * Obcinanie Alfa i Beta
 * wymierny problem plecakwy
 * 
 * policzyc ile jest self-aviding paths dlugosci N
 * przy pomocy drzewa i problemu plecakowego wymiernego
 * 
 * eg: NNNNEEWWNE
 * 
 * 
 * 
 * n^2
 * 
 * struktory danych:
 *  - Zapisywac punkty zamist?
 *  - lliczyc srednia wartosc H drzewa obcinajac Alfa
 *  - 
 * 
 * Dla duzych N ~ watosc H
 * 
 * odjac niepoprawne od poprawnych
 * eg: 4^n - (not self-avoiding path) = N
 * symetria -> 1/4 -> 1/8
 * 
 * 
 */

console.time('START')

// N max dlugosc, walked_distance -> ile 
const selfAvoidingWalk = (n, walked_distance = 0, x = 0, y = 0, state = {}) => {
	if (n === walked_distance) {
		// * 4
		return 4
	}

	const current_key = [x, y].join(',')
	state[current_key] = 1

	let number_of_paths = 0
	// wszystkie mozliwe kierunki
	let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
	if (walked_distance === 0) {
		directions = [[-1, 0]]
	}

	for (const [dir_x, dir_y] of directions) {
		const new_x = x + dir_x
		const new_y = y + dir_y

		const new_key = [new_x, new_y].join(',')

		if (state[new_key] === 1) {
			continue
		}

		number_of_paths += selfAvoidingWalk(n, walked_distance + 1, new_x, new_y, state)
	}
	delete state[current_key]

	return number_of_paths
}

// dlugosc kwadrat NxN
const N = 20
console.log(`Number of Self-Avoiding Path ${N} length: ${selfAvoidingWalk(N).toLocaleString('pl-PL')}`)

console.timeEnd('START')

