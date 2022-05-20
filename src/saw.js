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

class TreeNode {
	constructor(value) {
		this.value = value;
		this.descendants = [];
	}
}

class Point {
	constructor([x, y]) {
		this.x = x;
		this.y = y;
	}

	add([x, y]) {
		this.x += x;
		this.y += y;
	}

	get() {
		return [this.x, this.y];
	}
}

const pointToKey = ([x, y]) => `(${x}, ${y})`

const genereateSAWTree = (n) => {
	const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]

	const visitedPoints = new Set()
	const currentPosition = new Point([0, 0])

	const key = pointToKey(currentPosition)
	visitedPoints.add(key)

	const branch = new TreeNode(key)


}

genereateSAWTree(2)

