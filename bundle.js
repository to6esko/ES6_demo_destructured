(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Razgrajdane
'use strict';

//ES6

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

console.log('*'.repeat(10));

var node = {
	type: 'Inentifier',
	name: 'foo'
};

var type = node.type;
var name = node.name;
var _node$value = node.value;
var value = _node$value === undefined ? true : _node$value;


console.log(type);
console.log(name);
console.log(value);

console.log('*'.repeat(10));

//Разгражане на присвояване
var node3 = {
	type: "Identifier",
	name: "foo"
},
    type1 = "Literal",
    name1 = 5;

// задаване на различни стойности използвайки структуриране
//with ()

type1 = node3.type1;
name1 = node3.name1;
console.log(type); // "Identifier"
console.log(name); // "foo"

console.log('*'.repeat(10));

//change the local name variable
var node1 = {
	type: 'Inentifier'
};

//name: 'foo'
var localTaype = node1.type;
var _node1$name = node1.name;
var localName = _node1$name === undefined ? 'bar' : _node1$name;


console.log(localTaype);
console.log(localName);

console.log('*'.repeat(10));

//Извличане на стойности от стурктура на вложени обекти

var node2 = {
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

var start = // задаване на различно име на променлива
node2.loc.start;
var localEnd = node2.loc.end;


console.log(start.line);
console.log(start.colum);
console.log(localEnd.colum);

console.log('*'.repeat(10));

//Разграждане на масиви

var colors = ['red', 'green', 'blue'];
var firstColor = colors[0];
var secondColor = colors[1];


console.log(firstColor);
console.log(secondColor);

console.log('*'.repeat(10));

var color = ['red', 'green', 'blue'];
var thirdColor = color[2];


console.log(thirdColor);

console.log('*'.repeat(10));

//Разграждане на присвояване

var colors1 = ['red', 'green', 'blue'],
    firstColor1 = 'black',
    secondColor1 = 'purple';

//no ()

firstColor1 = colors1[0];
secondColor1 = colors1[1];
console.log(firstColor1);
console.log(secondColor1);

console.log('*'.repeat(10));

// Смяна на променлива в ECMAScript 5
var a = 1,
    b = 2,
    tmp = void 0;

tmp = a;
a = b;
b = tmp;
console.log(a); // 2
console.log(b); // 1

console.log('*'.repeat(10));

// Смяна на променлива в ECMAScript 6
var a1 = 1,
    b1 = 2;
var _ref = [b1, a1];
a1 = _ref[0];
b1 = _ref[1];

console.log(a1); // 2
console.log(b1); // 1

console.log('*'.repeat(10));

//Сойности по подразбиране

var colors2 = ['red'];
var firstColor2 = colors2[0];
var _colors2$ = colors2[1];
var secondColor2 = _colors2$ === undefined ? 'green' : _colors2$;


console.log(firstColor2);
console.log(secondColor2);

console.log('*'.repeat(10));

//Вложено разграждане на масиви

var colors3 = ['red', ['green', 'lightgreen'], 'blue'];

var firstColor3 = colors3[0];

var _colors3$ = _slicedToArray(colors3[1], 2);

var secondColor3 = _colors3$[1];


console.log(firstColor3);
console.log(secondColor3);

console.log('*'.repeat(10));

//Rest elements

var colors4 = ['red', 'green', 'blue'];

var firstColor4 = colors4[0];
var restColors = colors4.slice(1);


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
var cloneColors1 = colors6;


console.log(cloneColors1); //"[red,green,blue]"

console.log('*'.repeat(10));

//Смесено разграждане

var node5 = {
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

var start5 = node5.loc5.start5;

var _node5$range = _slicedToArray(node5.range, 1);

var startIndex = _node5$range[0];


console.log(start5.line); // 1
console.log(start5.column); // 1
console.log(startIndex); // 0

//Разграждане на параметри

function setCooke(name, value, options) {
	options = options || {};
	var secure = options.secure,
	    path = options.path,
	    domain = options.domain,
	    expires = options.expires;
}

setCooke('type', 'js', {
	secure: true,
	expires: 60000
});

},{}]},{},[1]);
