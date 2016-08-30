---
layout: post
title: Beginners Guide to JavaScript Array Methods - Mutator Methods
permalink: /javascript-array-mutator-methods/
teaser: javascript-arrays.jpg
excerpt: We explore nine powerful array mutator methods in JavaScript and discuss the applications of each one of them 
---

Arrays are powerful data structures that permit storing multiple values in a single variable. Arrays are actually  specialised **Objects** in JavaScript that can hold values of any type, not necessarily in key/value pairs but rather, in numerically indexed positions.

```javascript
//Creating an array
var lang = ["JavaScript", "Ruby", "Go", "Python"];
//Accessing an array item
console.log(lang[0]); //JavaScript
typeof lang;  //returns Object
```

Since arrays are actually JavaScript objects, they can have **methods** which are, in simple terms, properties of an object that refer to function values.

What actually happens when you create a new array, is that you create *an instance* of the Array constructor object which has a number of built-in methods. 

```javascript
var social = ["facebook", "twitter"];
//push() is a method of the Array constructor object
social.push("reddit"); 
console.log(social); // ["facebook", "twitter", "reddit"]
typeof social.push() //function
```

So your array inherits all of those methods automatically which is why we can use the `push()` method instantly on the `social` array in the example above without doing any further work.

Array methods are generally divided into 3 categories:

- [Mutator Methods](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods)
- [Accessor Methods](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Accessor_methods)
- [Iteration Methods](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Iteration_methods)

We shall consider the mutator methods in this article. They are those that modify an array in some way.  In the coming weeks, I will publish the second and third parts of this series which will consider the accessor and iteration methods.

We have nine mutator methods in JavaScript and we shall go over each one in turn. Let's begin:

## Array.pop()

The `pop()` method removes the **last** element in an array and returns that element.

Here's a simple example:

```javascript
var cities = ["London", "Lagos", "New York", "Accra"];

var lastCity = cities.pop();

console.log(cities); //["London", "Lagos", "New York"]
console.log(lastCity); //Accra
```

## Array.shift()

The `shift()` method is similar to `pop()` but it removes the **first** element in an array and returns that element.

```javascript
var cities = ["London", "Lagos", "New York", "Accra"];

var firstCity = cities.shift();

console.log(cities); //["Lagos", "New York", "Accra"]
console.log(firstCity); //London
```

## Array.push()

The `push()` method modifies an array by **appending** one or more elements to the **end** of the array. The return value of `push()` is the new length of the array.

You can append a single element  to an array like this:

```javascript
var cities = ["London", "Lagos", "New York", "Accra"];

var length = cities.push("Warsaw");

console.log(cities); // ["Lagos", "New York", "Accra", "Warsaw"]
console.log(length); // 4
```
Or you can append more than one element by seperating each one with a comma.

```javascript
var clubs = ["Leicester City"];

var topFour =  clubs.push("Arsenal", "Tottenham Hotspur",  "Manchester City");

console.log(clubs); //["Leicester City", "Arsenal", "Tottenham Hotspur",  "Manchester City"]
console.log(topFour); // 4
```

The `push()` method can also be combined with the `apply()`method (which I'll cover in-depth in a future article) to combine two arrays together.

```javascript
var authors = ["John Green", "John Grisham", "Amy Poehler"];

var moreAuthors = ["James Patterson", "Danielle Steel"];

//Merge moreAuthors into authors
Array.prototype.push.apply(authors, moreAuthors);

console.log(authors); //["John Green", "John Grisham", "Amy Poehler", "James Patterson", "Danielle Steel", ]
```

## Array.unshift()

The `unshift()` method **adds** one or more elements to the **beginning**of an array. Just like the `push()` method, it returns the new length of the modified array.

```javascript
var africanCities = ["Nairobi", "Kampala"];

var length = africanCities.unshift("Johannesburg", "Abuja", "Brazzaville");

console.log(africanCities); //["Johannesburg", "Abuja", "Brazzaville", "Nairobi", "Kampala"]
console.log(length); //5
```

## Array.reverse()

The `reverse()` method **transposes** an array so that the last element becomes the first and the first one becomes the last. Its return value is a reference to the modified array.

```javascript
var numbers = [60, 50, 20, 30];

var value = numbers.reverse(); 

console.log(numbers); //[30, 20, 50, 60]
console.log(value); //[30, 20, 50, 60]
```

## Array.splice()

The `splice()` method modifies an array by **adding** or **removing** elements from the array. It returns an array of the deleted elements or an empty array if no elements were removed.

This method takes three parameters:

- startIndex: Index to start array modification.
- deleteCount: How many elements should be removed? If set to zero, no elements will be removed.
- items: The elements to add to the array, beginning at the startIndex. If no elements are specified, `splice()` will only remove elements from the array.

```javascript
var frameworks = ["Angular 1", "Ember", "React", "Vue", "Backbone"];

/*
- startIndex  is 0 ("Angular 1")
- delete 1 item ("Angular 1")
- add "Angular 2" at index 0
*/
var deleted = frameworks.splice(0, 1, "Angular 2");

console.log(frameworks); //["Angular 2", "Ember", "React", "Vue", "Backbone" ]

//returns an array of the deleted elements
console.log(deleted); //["Angular 1"] 
```
If `startIndex` is negative, `splice()` will begin its modification from the end of the array.

```javascript
var computers = ["hp", "dell", "acer", "asus", "toshiba"];

/*
- startIndex is the 2nd element from the end of the array ("asus")
- delete 2 items ("asus", "toshiba")
- add "samsung", "lenovo"
*/
computers.splice(-2, 2, "samsung", "lenovo");

console.log(computers); // ["hp", "dell", "acer", "samsung", "lenovo"]
```

## Array.sort()

Sorting arrays in JavaScript is done via the `sort()` method which can be used to achieve many powerful things once it is well understood. 

This method is more complicated that the ones we have already covered so we will go through several ways it can be used so that we can understand it properly.

When the `sort()` method is used by itself without any arguments, it arranges the array elements according to string Unicode points. That means that, array elements are converted to strings and then compared according to the Unicode point order.

Here's an example:

```javascript
var animals = ["dogs", "cats", "zebras", "hyenas"];

animals.sort();

//Sorts the array in alphabetical order
console.log(animals); // ["cats", "dogs", "hyenas", "zebras"]
```

That seems straightforward enough, but what if you call the `sort()` method on an array of numbers? 

```javascript
var num = [1, 3, 10, 2];

num.sort();

console.log(num); // [1, 10, 2, 3];
```

You can see that the `sort()` method does not arrange the numbers in the way you would probably expect. This is because the numbers are **converted to strings** before they are sorted. So "10" comes before "2" or "3" according to the Unicode order.

**What if I want to sort the numbers in a numerical order?**

Then you need to pass a function into the sort method which arranges the array according to its return value.

The syntax is as follows:

```javascript
function sortArray(a, b) {
//Code
}
array.sort(sortArray);
```

The parameters `a` and `b` are used to compare two elements in the array and arrange them relative to each other.

The `sortArray` function can have one of three return values: less than zero (negative), equal to zero, or greater than zero (positive).

- If  it is **less than zero**  (negative), then `a` will be sorted to a lower index than `b` which means `a` will come before `b` in the array.
- If  it is **equal to zero**, the positions of `a` and `b` will remain unchanged in the array relative to each other.
- If it is **greater than zero** (positive),`b` will be sorted to a lower index than `a` which means `b` will come before `a` in the array.

Let's take a look at an example to figure out how this `sortArray` function works.

```javascript
var num = [10, 2, 5, 1];

function sortArray(a, b) {
	return a - b;
}

num.sort(sortArray);

console.log(num); //[1, 2, 5, 10]
```

### Explanation

What happens here is that the `sortArray` function goes through our numbers array and  compares one pair of elements together, by automatically feeding `a` and `b` to represent each individual number.

So as it begins to sort the numbers, 10 becomes `a` and 2 becomes `b`. Our return value is the result of (a - b) which is (10 - 2) which equals 8. Since 8, our return value, is positive, it means `b` (2) will come before `a`(10) in the array.

As it continues to pass through the array, it compares a pair of items in the array until all the smaller numbers are at a lower index than the larger ones (ascending order).

We can also sort numbers in descending order:

```javascript
var num = [10, 2, 5, 1];

function sortArray(a, b) {
	return b - a;
}

num.sort(sortArray);

console.log(num); //[10, 5, 2, 1]
```

### Sorting an array of Objects

The `sort()` method can be used to arrange an array of objects with key/value pairs. 

Let's look at an example:

We want to arrange childen in an array by the order of their date of births so that the eldest child (Betty) comes first in the array and the youngest (Sade) comes last.

```javascript
var enfants = [
  {
     name: "Matilda",
     dob: "April 1, 2009"
  },
	
  {
    name: "Sade",
    dob: "May 20, 2010"	
  },
	
  {
    name: "Betty",
    dob: "August 4, 2006"
  }
];
```
We cannot use the `dob` property directly because it is a string literal.  We need to convert the `dob` string to a proper date object and then sort it like we did in the previous example.

```javascript
enfants.sort(function (a, b) {
  var date_a = new Date(a.dob);
  var date_b = new Date(b.dob);
  
  return date_a - date_b;
});

console.log(enfants);

/* Here's our sorted array

var enfants = [
  {
    name: "Betty",
    dob: "August 4, 2006"
  },
	
  {
    name: "Matilda",
    dob: "April 1, 2009"
  },

  {
    name: "Sade",
    dob: "May 20, 2010"	
  },
]

*/

```
Note that you can also pass [function expressions](https://developer.mozilla.org/en/docs/web/JavaScript/Reference/Operators/function) to the `sort()` method and it will work just fine.

Let us now consider the final two mutator methods which were added in the ES2015 (ES6) specification.

Please keep in mind that these ES2015 array methods have limited browser support at the moment so you may not be able to use them on a live website or application at this time.

## Array.fill()

The `fill()` method populates the elements of an array with a specified value. It takes one compulsory argument which is the value you want to fill the array with. Its return value is the modified array.

```javascript
var letters = ["a", "b", "c"];

var value = letters.fill("d");

console.log(letters); // ["d", "d", "d"]
console.log(value); // ["d", "d", "d"]
```

The `fill()` method can also take two additional optional arguments which are:

- startIndex: array index to start populating from.
- endIndex: array index to end population.

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Value is 100, startIndex is 4 (inclusive), endIndex is 6 (exclusive)
var value = numbers.fill(100, 4, 6);

console.log(numbers); //[1, 2, 3, 4, 100, 100, 7, 8, 9]
console.log(value); //[1, 2, 3, 4, 100, 100, 7, 8, 9]
```

Note that the elements at `numbers[4]` and `numbers[5]` were replaced but `numbers[6]` was not because `endIndex` is exclusive.

## Array.copyWithin()

Our last mutator method, `copyWithin()` is used to copy a part of an array to another part of the array without modifiying the length of the array. Its return value is the modified array.

This method takes one mandatory argument and two optional ones:

- target: the index at which to copy the sequence of elements to (if negative, target will be counted from the end of the array)
- startIndex: index at which to start copying from (defaults to 0 if not specifed)
- endIndex: index at which to end copying from (defaults to the length of the array if not specified)

```javascript
var companies = ["Google", "Apple", "Microsoft", "Amazon", "Canonical"];

//target is 3, startIndex is 1 (inclusive) , endIndex is 2 (exclusive)
var modifiedArr = companies.copyWithin(3, 1, 2);

console.log(companies); //  ["Google", "Apple", "Microsoft", "Apple", "Canonical"]
console.log(modifiedArr); // ["Google", "Apple", "Microsoft", "Apple", "Canonical"]
```
`copyWithin()` copies from the **startIndex** `companies[1]` ("Apple"), and puts it in the **target** index `companies[3]` ("Amazon"). The **endIndex** `companies[2]` is exclusive so "Microsoft" is not copied.

---

So there we have it. I hope the examples and my explanations have given you an idea of how each of the array mutator methods work and how they can be applied in your programs.

Thanks for reading. Please share this article if you found it useful.

If you want to be notified when I publish the second and third parts in the series which will discuss accessor and iteration methods, as well as all future articles and tutorials, you can [subscribe to my email newsletter]({{ site.baseurl }}/subscribe/) to recieve an email as soon as they are published.

## Resources

- For a more authoritative explanation of array mutator methods, checkout [Ire Aderinokun's video](https://www.youtube.com/watch?v=uXV7KwRubwM) on YouTube.
- You can view [MDN's documentation of javascript array methods](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype) for more comprehensive examples.