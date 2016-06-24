---
layout: post
title: How to manuipulate classes using the HTML5 classList API
permalink: /manipulating-classes-without-jquery/
excerpt: I faced an interesting situation recently. I was doing some work over the weekend and needed to change some CSS based on the classes in the HTML. 
---

I faced an interesting situation recently. I was doing some work over the weekend and needed to change some CSS based on the classes in the HTML. Previously, I wholly relied on jQuery to handle DOM manipulations for me.

However, in this case, it didn't make sense to import the whole jQuery library just to perform this basic DOM manipulation. There had to be a better way! And indeed there was.

```javascript
//Imagine if I had to add Jquery as a dependency just to do this
$(".menu").on("click", function() {
	if ($(".page").hasClass('open')) {
		$(".menu").removeClass('active');
		$(".page").removeClass('open');
		$(".nav").removeClass('hidden');
	} else {
		$(".menu").addClass('active');
		$(".page").addClass('open');
		$(".nav").addClass('hidden');
	}
});
```


A quick Google Search presented me with a variety of options to achieve what I was after but I went with the classList method because it's easy to understand and browser support was good.

If you're used to using Jquery exlusively for DOM manipulation, this is a great place to start gaining some independence over jquery and you might be surprised at how easy it is sometimes.

## What is the classList API

The `classList` API provides a way to grab all the classes associated with an element so that you can use JavaScript to modify it. 

Using the `classList` DOM property on an element will return a [`DOMTokenList`]() which contains all the classes applied to an element and `length` property which signifies the total number of classes on that element.

Let's take a look at this simple example:

```html
<nav class="nav navbar navbar-nav" id="nav">
```

```javascript
var nav = document.getElementById("nav");
console.log(nav.classList);

//returns

{
	0: "nav"
	1: "navbar"
	2: "navbar-nav"
	length: 3
}
```

You can try the above in your browser to see it in action.

Getting the classes of an element is all well and good but it isn't all that useful on it's one. We need a way to manage and update those classes and thankfully the `classList` property provides a few methods that do just that:

- add(): Adds specified classes
- remove(): Removes specified classes
- contains(): Checks if specified class exists on the element
- toggle(): toggles specified class
- index(): returns class at a specified position in the list
- length: returns the number of classes

Let's look at each one in turn 

### Adding classes

Adding a class to an element is easy. Just apply the class name as an argument to the `add()` method. Note that if the class name already exists, it won't be added again.

```html
<span class="heading" id="title"></span>
```

```javascript
document.getElementById("span").classList.add("title");
//gives class="heading title"
```

To add multiple classes, simply seperate each class with a comma.

```javascript
document.getElementById("span").classList.add("title", "headline");
//gives class="heading title headline"
```

### Removing classes

To remove a class, all you need to do is pass the class name as an argument to the `remove()` method. If the class name doesn't already exist in the `classList`, an error is thrown.

```html
<header class="masthead clearfix" id="header">
```
```javascript
document.getElementById("header").classList.remove("masthead");
//gives class="clearfix"
```

Removing multiple classes at once works in the same way as adding multiple classes.

### Toggling Classes

Adding or removing a class based on user action is a very common thing to do and incidentaly, this was exactly my situation

```html
<div class="menu" id="menu" onclick="hasClass()">
```

```javascript
var page = document.getElementById("page");
var menu = document.getElementById("menu");
var nav = document.getElementById("navigation");

function hasClass() {
	page.classList.toggle("open");
	menu.classList.toggle("active");
	nav.classList.toggle("hidden");
}
```

### Check if a class exists

Using the `contains()` method, we can check if a specified class is present in an element's `classList` and perform certain operations based on the return value.

From the previous example,

```javascript
function hasClass() {
	if (page.classList.contains("open")) {
		page.classList.remove("open");
		menu.classList.remove("active");
		nav.classList.remove("hidden");
	} else {
		page.classList.add("open");
		menu.classList.add("active");
		nav.classList.add("hidden");
	}
}
```


### Check number of classes

To find out how many classes are applied to an element, simply use the `length` property;

```html
<nav class="nav navbar navbar-nav" id="navbar">
```

```javascript
document.getElementById("navbar").classList.length;
//returns 3
```

## Browser Support

The `classList` API is supported by all mordern browsers including IE 10 and later. If you need to support older IE versions, you may need to find an alternative method or use a [polyfill](https://github.com/eligrey/classList.js).

|Chrome | Edge | Firefox | Internet Explorer | Opera | Safari
|8.0+ | (yes) | 3.6+ | 10+ | 11.50+ | 5.1+

















