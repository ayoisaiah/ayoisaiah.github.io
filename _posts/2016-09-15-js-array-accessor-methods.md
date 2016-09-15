---
layout: post
title: Beginners Guide to JavaScript Array Accessor Methods (Part 2)
permalink: /javascript-array-accessor-methods/
excerpt: In the second part of our three-part series exploring the array methods in JavaScript, we will consider another group of methods, the accessor methods.
teaser: javascript-array-accessor-methods.png
---

In the second part of our three-part series exploring the array methods in JavaScript, we will consider another group of methods, the Accessor methods, which are those that do not modify an array but return some representation of any array on which they are applied to.

You should read the first article if you haven't done so already: [JavaScript Array Methods - Mutator Methods]({{ site.baseurl }}/javascript-array-mutator-methods/)

There are eight array methods in this section. Let us consider each one in turn:

## Array.concat()

The `concat()` method is used to join an array to one or more arrays passed as arguments to the method. Its return value is the new array.

The common use for `concat()` is to merge two or more arrays together.

```javascript
var numbers = [1, 2, 3, 4, 5];
var letters = ["u", "v", "w", "x", "y", "z"];
var merged = numbers.concat(letters);

console.log(merged); // [1, 2, 3, 4, 5, "u", "v", "w", "x", "y", "z"]
```

Note that the `concat()` method does not alter any of the original arrays but returns a new array which you can easily save in another variable as we have done above.

You can also pass non-array arguments to `concat()` and it will accept it just fine. The values will be copied into the new array in the order you passed them.

```javascript
var a = ["foo", "xoo", "baz", "wun"];
var b = a.concat([1, 2], "c", 234, {a: 1, b: 2}, "GUS");
console.log(b);
//gives  ["foo", "xoo", "baz", "wun", 1, 2, "c", 234, { a:1,  b:2}, "GUS"]
```

## Array.join()

The `join()` method is a very useful one indeed. It allows us to combine array elements into a string and save in a new variable. Its return value is a string with all the array elements joined together.

```javascript
var array = ["make", "life", "better"];
var string = array.join();
console.log(string); // "make,life,better"
```

By default, the array elements are separated with a comma but you can optionally pass your preferred separator to the `join()` method which will then be used to seperate the elements.

```javascript
var array = ["make", "life", "better"];
//Separate array elements with a space
var string = array.join(" ");
console.log(string); // "make life better"
```

## Array.slice()

The `slice()` method is one which you are likely to use on a regular basis. It returns a part of an array into a new array object but it does not modify the orginal.

Here's the syntax:

```javascript
array.slice(startIndex, endIndex);
```

As you can see, the `slice()` method takes two arguments which indicate the indexes to start and stop the extraction of elements from an array.

- startIndex: Index at which to start extraction (inclusive). Defaults to index 0 if undefined.
- endIndex: Index at which to end extraction (exclusive). Defaults to `array.length` if undefined.

Both arguments are optional but in practice, you will usually define at least one of these.

Try this out in your browser console:

```javascript
var oldArr = [1, 2, 3, 4, 5, 6];
var newArr = oldArr.slice(2,4);

console.log(oldArr); //[1, 2, 3, 4, 5, 6]
console.log(newArr); //[3, 4]
```

Notice that the elements at `oldArr[2]` and `oldArr[3]` are extracted but not `oldArr[4]`. This is because `slice()` extracts from the `startIndex` up to but not including the `endIndex`.

If you use the `slice()` method on an array that includes a reference to an object, your new array will also include a reference to that object so if you change change the properties on that object, the change will be reflected in both arrays.

Try this out:

```javascript
var iPhone = {ram: "2GB", model: "iPhone7", camera: "12MP", screen: "4.7inches", memory: "32GB"};
var myFavs = ["Dell XPS 13", iPhone, "Chrome", "Windows 10"];
var yourFavs = myFavs.slice(1, 3);

console.log(yourFavs); //[iPhone, "Chrome"];

//A change in any `iPhone` property will be reflected in both arrays

iPhone.memory = "64GB";

console.log(myFavs[1].memory); //64GB
console.log(yourFavs[0].memory); //64GB
```

## Array.toString()

The `toString()` method returns a single string representation of a specified array. It behaves just like the `join()` method except that you cannot specify a separator to separate each element of the array.

```javascript
var abc = ["a", "b", "c"];

//Both methods return exactly the same thing
console.log(abc.toString()); //"a,b,c"
console.log(abc.join()); //"a,b,c"

//You can specify a separator with the `join()` method
console.log(abc.join("!")); //a!b!c 
```

I struggle to see the value of `toString()`over `join()` but feel free to come to your own conclusions.

## Array.toLocaleString()

The `toLocaleString()` method also returns a string representation of array elements but this time, the elements are converted to strings according to a format expected by users based on their [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)).

A locale can be anything from the language or location of a user that determines certain conventions of output data that the user expects to see.

For example, in some parts of the world, the date is formatted as "day-month-year" while in other parts (like the US), dates are formatted as "month-day-year".

For example,

```javascript
var now = new Date();
console.log(now.toLocaleString()); 
/* 
Logs 15/09/2016, 21:28:46 in Nigeria
Logs 9/15/2016, 3:43:51 PM in the US
*/
```

```javascript
var date = new Date();
var arr = [3500, date];

console.log(arr.toLocaleString()); 
//Logs  "3,500, 9/15/2016, 3:43:51 PM" if run in a US locale.
```
Just like the `toString()` method, you cannot specify the separator that will be used to separate each element of the array. The separator will be a locale-specific string (a comma in most cases).

## Array.indexOf()

This method checks whether a specified method is present in an array or not. Its return value is the *first* index at which the element was found or `-1` if the element is not present in the array.

The `indexOf()` method takes two arguments:

- searchElement: The element to locate in the array (compulsory).
- fromIndex: The index to start searching from (optional).  If it is greater than or equal to the length of the array, the array is not searched and -1 is returned. If undefined, it will default to zero.

Try this out:

```javascript
var oddNum = [1, 3, 5, 7, 9, 11];
console.log(oddNum.indexOf(5)); //1
console.log(oddNum.indexOf(3, 4)); //-1
console.log(oddNum.indexOf(9, 3)); //4
console.log(oddNum.indexOf(2)); //-1
```

If there are multiple occurences of an element in an array, the `indexOf()` method will only return the index of the first one it finds.

```javascript
var random = ["x", "g", "g", "f", "g", "x", "x"];
console.log(random.indexOf("x")); //0
console.log(random.indexOf("g", 3)); //4
```

If you want to find all the instances of an element in an array, you can do something like this:

```javascript
var random = ["x", "g", "g", "f", "g", "x", "x"];
var newArr = [];

function findAll (arr) {
  var index = 0;
  while (index != -1) {
    newArr.push(index);
    index = arr.indexOf("x", index+1);
  }
console.log(newArr);
}

findAll(random); // [0, 5, 6]
```

## Array.lastIndexOf()

The `lastIndexOf()` method performs exactly the same function as the `indexOf()` method but this time, it returns the *last*  index at which the specified element was found in the array or -1 if the element is not present.

The syntax is exactly the same as `indexOf()`. The key difference is that `lastIndexOf()` searches an array from back to front and `fromIndex` will default to the array length minus 1 if undefined.

```javascript
//Syntax
array.lastIndexOf(searchElement, fromIndex);

//Examples
var abc = ["a", "b", "c", "a", "a", "c", "b", "b"];
console.log(abc.lastIndexOf("a")); //4
console.log(abc.lastIndexOf("b")); //7
console.log(abc.lastIndexOf("c", 4));//2
```

Just keep in mind that  `indexOf()` will return *first* occurrence of the element in the array while `lastIndexOf()` will return the *last* occurence of the element in the array.

## Array.includes()

The `includes()` method is used to test whether an array contains a specified element. Its return value is a boolean value (`true` or `false` as appropirate).

This method takes two arguments: 

- searchElement: the element to search for (compulsory).
- startIndex: the array position to start searching from (optional).

If you do not specify the `startIndex`, it will default to zero which means the`includes()` method will check from the beginning of the array.

```javascript
//Syntax
array.includes(searchElement, startIndex);

//Examples
["a", "b", "c"].includes(d); // returns false
[1, 2, 3].includes(2); // returns true
```
---

I hope this article has enlightened you on how array accessor methods work in JavaScript. I'm looking for some feedback so a comment or two will be greatly appreciated.

Also consider sharing this article if you know someone who might benefit from reading it.

**Later in this series**

- Part 3: JavaScript Array Iteration Methods.

## Thanks

*Many thanks to [Brandon Dees](https://twitter.com/@brandondees) for helping me confirm the output of the `toLocaleString()` method on the date object in the US*.