// Razgrajdane
'use strict';

//ES6
console.log('*'.repeat(10));

let node = {
	type: 'Inentifier',
	name: 'foo'
};

let {
	type, name, value = true
} = node;

console.log(type);
console.log(name);
console.log(value);


console.log('*'.repeat(10));



//Разгражане на присвояване
let node3 = {
		type: "Identifier",
		name: "foo"
	},
	type1 = "Literal",
	name1 = 5;

// задаване на различни стойности използвайки структуриране
({
	type1, name1
} = node3); //with ()

console.log(type); // "Identifier"
console.log(name); // "foo"

console.log('*'.repeat(10));



//change the local name variable
let node1 = {
	type: 'Inentifier',
	//name: 'foo'
};

let {
	type: localTaype,
	name: localName = 'bar'
} = node1;

console.log(localTaype);
console.log(localName);


console.log('*'.repeat(10));



//Извличане на стойности от стурктура на вложени обекти

let node2 = {
	type: 'Inentifier',
	name: 'foo',
	loc: {
		start: {
			line: 1,
			colum: 1
		},
		end: {
			line: 1,
			colum: 4
		}
	}
};

let {
	loc: {
		start
	},
	loc: {
		end: localEnd // задаване на различно име на променлива
	}
} = node2;

console.log(start.line);
console.log(start.colum);
console.log(localEnd.colum);

console.log('*'.repeat(10));



//Разграждане на масиви

let colors = ['red', 'green', 'blue'];
let [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);

console.log('*'.repeat(10));


let color = ['red', 'green', 'blue'];
let [, , thirdColor] = color;

console.log(thirdColor);

console.log('*'.repeat(10));



//Разграждане на присвояване

let colors1 = ['red', 'green', 'blue'],
	firstColor1 = 'black',
	secondColor1 = 'purple';

[firstColor1, secondColor1] = colors1; //no ()

console.log(firstColor1);
console.log(secondColor1);

console.log('*'.repeat(10));


// Смяна на променлива в ECMAScript 5 
let a = 1,
	b = 2,
	tmp;

tmp = a;
a = b;
b = tmp;
console.log(a); // 2
console.log(b); // 1


console.log('*'.repeat(10));


// Смяна на променлива в ECMAScript 6
let a1 = 1,
	b1 = 2;
[a1, b1] = [b1, a1];
console.log(a1); // 2
console.log(b1) // 1

console.log('*'.repeat(10));


//Сойности по подразбиране

let colors2 = ['red'];
let [firstColor2, secondColor2 = 'green'] = colors2;

console.log(firstColor2);
console.log(secondColor2);

console.log('*'.repeat(10));


//Вложено разграждане на масиви

let colors3 = ['red', ['green', 'lightgreen'], 'blue'];

let [firstColor3, [, secondColor3]] = colors3;

console.log(firstColor3);
console.log(secondColor3);

console.log('*'.repeat(10));



//Rest elements

let colors4 = ['red', 'green', 'blue'];

let [firstColor4, ...restColors] = colors4;

console.log(firstColor4);
console.log(restColors.length);
console.log(restColors[0]);
console.log(restColors[1]);

console.log('*'.repeat(10));



//Concat ES5 clone

var colors5 = ['red', 'green', 'blue'];
var cloneColors = colors5.concat();

console.log(cloneColors); //"[red,green,blue]"

console.log('*'.repeat(10));

//Clone ES6
var colors6 = ['red', 'green', 'blue'];
let [...cloneColors1] = colors6;

console.log(cloneColors1); //"[red,green,blue]"

console.log('*'.repeat(10));


//Смесено разграждане

let node5 = {
	type5: "Identifier",
	name5: "foo",
	loc5: {
		start5: {
			line: 1,
			column: 1
		},
		end5: {
			line: 1,
			column: 4
		}
	},
	range: [0, 3]
};

let {
	loc5: {
		start5
	},
	range: [startIndex]
} = node5;

console.log(start5.line); // 1
console.log(start5.column); // 1
console.log(startIndex); // 0


//Разграждане на параметри

function setCooke(name, value, options) {
	options = options || {};

	let secure = options.secure,
		path = options.path,
		domain = options.domain,
		expires = options.expires;
}

setCooke('type', 'js', {
	secure: true,
	expires: 60000
});

//ES6
function setCooke1(name, value, {
	secure, path, domain, expires
}) {
	// код за задаване на cookie
}

setCooke1('type', 'js', {
	secure: true,
	expires: 60000;
});



//Defaults параметри

const setCookieDefaults = {
	secure: false,
	path: "/",
	domain: "example.com",
	expires: new Date(Date.now() + 360000000)
};

function setCookie(name, value, {
	secure = setCookieDefaults.secure,
		path = setCookieDefaults.path,
		domain = setCookieDefaults.domain,
		expires = setCookieDefaults.expires
} = setCookieDefaults) {
  //...
}