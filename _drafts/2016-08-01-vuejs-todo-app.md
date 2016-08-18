---
layout: post
title: Learn Vue.js by building a to-do app
permalink: /vuejs-todo-app/
excerpt: An introduction to Vue.js
image:
---

[Vue.js]() is a JavaScript Library that makes building web applications easy and reactive. In simple terms, it helps you convert data objects (model) in your application to HTML (view) and binds the DOM to the underlying data so that if your data changes, the page is updated accordingly.

## Target Audience

This tutorial is targeted at beginner developers who have a reasonable understanding of JavaScript and the DOM but do not have any experience with a framework.

People who could fit into this category are:

- Those who have completed the Front-End section of Free Code Camp
- People who rely on jQuery exclusively for DOM manipulation

**This tutorial is not for**

- Complete newbies to JavaScript. Please take the time to understand the core concepts first before learning abstractions. [Free Code Camp](http://freecodecamp.com) is a great place to start.

- People who already have in-depth knowledge of Vue.js, Angular.js, Ember.js, React or similar frameworks.

## What we'll be building

We are going to build a simple to-do list app with the following user stories:

1. User can add a single todo item at a time
2. User can delete a single item
3. User can clear the whole list
4. User can mark single items as completed
5. User can mark all items as completed

It is considered best practice to always break down complex tasks into small sequential steps that can be completed in succession because it reduces the tendency to feel overwhelmed and exhausted as is the case when battling with large chunks of work.

I'm going to explain how each feature was implemented step-by-step so hopefully you should have a good understanding of how everything works together at the end of this tutorial.

**If you get stuck...**

Drop a comment below or send me an email, I'll respond to your questions as soon as I can.

## Getting Started

I will be writing the code in JSFiddle and I will embed snapshots of each step on this page. I highly recommend that you follow along, typing each step out all the way to the end.

### Adding Vue.js to the page

First, we need to grab the Vue.js file and add it to our page. There are [many ways](http://vuejs.org/guide/installation.html) to do this but the simplest way is to load the script from a Content Delivery Network (CDN).

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js">
</script>
```

If you're using JSFiddle like I am, you can easily add Vue to the page by clicking the JavaScript gear and selecting Vue 1.0.12 under Framework and Extensions.

[Insert Screenshot]

## Creating the Structure

Alright, now that we've added Vue to our page, it's time to setup our HTML page. We will create a main container `div` with an id of `events` and a new Vue instance and then bind the two together.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/1/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

By setting the `el` key to `#todo`, this makes all the elements inside the `#todo` div available to the Vue instance.

### Setting up the panel

In our `section` with the class `panel`, we will insert three new elements:
- A checkbox to mark all items as completed (User story #5)
- An input field for adding new todo items (User story #1)
- A button to clear all the items from the list (User story #3)

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/2/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The `autofocus` property on our input field adds focus on the element on page load so that the User can begin to type in immediately without having to focus the input manually.

### Setting up the list

Now that we have the skeleton for our top panel already setup, let's do the same for the list area.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/3/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Basically, each todo item added to the list will be placed in the `li` tag with the `label` containing the text. The checkbox is to mark the task as completed (User Story #5) while `button.delete` is to delete the task from the list (User Story #2).

## Styling the app

Alright, let's style this baby.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/5/embedded/css,html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Flexbox makes centering things really easy so I've used it here to center the contents of the `section.panel` which holds our input and the `li` element where our individual todos will be rendered. If you've never used flexbox, I recommend that you play the [Flexbox Froggy](http://flexboxfroggy.com/) game to learn it.

## Getting to the nitty-gritty

Right, we now have the structure and styles for our application but it's still pretty useless at this point. We can start demonstrating the awesome capabilities of Vue.js by giving our todo app some functionality.

But first, lets go over the concepts we need to understand about Vue.

### Vue.js Keys

Before we continue, let's cover a few keys in our Vue instance that we need in our application.

```javascript
//Create a new Vue instance
new Vue({

  //Bind this Vue instance to our container div with an ID of todo
  el: "#todo",

  //This is where the data for our application will be held
  data: {

  },

  //This is where we will register the methods we want to use in our application
  methods: {

  }
});


```

- The `data` object is where we will register the values that hold data for our application
- The `methods` object will hold all the methods we want to use in our application

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/7/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Two-way data binding using `v-model`

The `v-model` directive in Vue.js is used to bind data from an input field to a value registered in our `data` object and vice versa. Let's look at a quick demo of how this works:

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/pdj3nc6j/4/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Let's set the `v-model` attribute on the input field in the HTML to the `name` key we registered in the `data` object of our Vue instance. Now switch to the result tab and change the name in the input field. Notice that the `name` key is updated instantly, just like magic!

**Note**: I added the `{{ $data | json }}` part to display the contents of the `data` object just below our input. The benefit of this is that it allows you to see how things are working under the hood by calling `JSON.stringify()` on the `data` object.

### Listen to DOM Events with `v-on`

Vue provides another directive `v-on` which we can use to listen to DOM events and call a method when that event is triggered on the element.

If you use jQuery, you may have been used to doing something like this:

```javascript

$("element").on("event", function () {
	//Methods go here
};

```

In Vue, the logic is similar but the syntax is far different.

Continuing on from the previous example, lets add a button that will call a function that alerts the name in the input field when the button is clicked.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/pdj3nc6j/6/embedded/html,js,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

I added the `v-on:click` attribute to listen for click events and call the `alertName`	 method when a click is triggered on the button. If you switch to the JavaScript tab, you will see that I have already registered `alertName` in the `methods` object.

### What is `this`?

`this` in the context of event handlers refers to the Vue instance invoking the handler and it is used to access the items in the `data` object.

```javascript

var vm = new Vue({
  data: {
    lang: "JavaScript"
  },

  methods: {
    eventHandler: function() {
      //this refers to the vm instance and it is used to access the lang key in the data object
      console.log(this.lang); //Javascript
    }
  }
});

```

Hopefully, all that makes sense. It's time to combine the concepts we've learnt above to add a new feature to our todo list app.

## Feature 1 - Add a todo item

The first feature we will implement in our app is to add a single task to the list through the input field in the top panel.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/11/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

You will see that I've added two new keys to our `data` object:

- `newTask`: This is where we will bind data from our input.
- `taskList	`: This is an array where our tasks will be stored.

Now we will bind the value of the input field to the `newTask` key by setting a `v-model` directive on the input field to `newTask`. Secondly, we will add a `v-on` directive to watch for the enter key and call a method called `addTask` when it is triggered. The syntax is below:

```html
<input type="text" placeholder="What do you need to do?" autofocus class="text-input" v-model="newTask" v-on:keyup.enter="addTask">
```
Finally, let's setup the `addTask` method. We will register it inside the `methods` object as previously alluded to.

```javascript
  methods: {

    addTask: function() {
      //trim() is used to remove whitespace from both ends of a string
      var task = this.newTask.trim();
      //if task is not an empty string
      if (task) {
        //Push an object containing the task to the taskList array
        this.taskList.push({
          text: task,
          checked: false
        });
        //Reset newTask to an empty string so the input field is cleared
        this.newTask = "";
      }
    }
  }
```
I hope the comments were explanatory enough. When the `addTask` method is called, we will get the value of `newTask`, `trim()` it and save it in a new variable called `task`.

If `task` evaulatues to true, which it would except if `task` is an empty string, push an object to the `taskList` array with two properties: `text` is set to the task variable which holds our text while `checked` is set to false. `checked` is what we will use to track the checked state of each task.`

By setting `this.newTask` to an empty string, the value of our input will be cleared since they are bound together using the `v-model` directive.

You can switch to the results tab and add a few todos to see this in action. Notice that once you press the enter key, an new object containing your todo is pushed to the `taskList` array except if your todo item is in fact an empty string.

## Displaying our todo items

Now that we can add add tasks to our `taskList` array convieniently, we need a way to render the each list item in the app. Remember we have already setup the skeleton for how each task will look. All we need to do now is render the our list based on the contents of the `taskList` array.

But first, let me introduce you to the underlying concepts behind rendering content from our data in Vue.js.

### Displaying data in Vue

Mustache-style bindings are used to display the data from a Vue instance on the page (the View). For example:

```javascript
new Vue({
	el: "#demo",
  data: {
  	value: "Hello, how are you?"
  }
});
```

To display the `value` property of our model in our view we need to add the `{{ value }}` string in our view like this:

```html
<p>{{ value }}</p>
```

Here's a proper demo:

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/pdj3nc6j/8/embedded/result,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Go ahead, change the text in the input field. You will see that the text on the screen is updated instantly. This is because the Vue links your data and the DOM together and  the two are kept in sync.

### Rendering arrays with `v-for`

We can use the `v-for` directive to render a list of items based on an array in our Model. A special syntax is required in the form of `item in names` where `names` is the array in question while `item` is the current array element being iterated on.

Example:

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/pdj3nc6j/9/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

If you update the contents of the `names` array, the list will also update accordingly. No need for DOM manipulation.

Ok now that we have been introduced to the concepts that we need to render list items from arrays in our Model, lets go ahead and implement this feature in our todo app.

## Feature 2 - Render our todo items in the View

The first step is to use the `v-for` directive to render the items in our `taskList` array. Like this:

```html
<li v-for="task in taskList"></li>
```
Now in the earlier part of this tutorial when we were setting up the skeleton of our app, I mentioned that the `label` element is where we will insert the text for each list item. So this is where we will place our mustache binding.

```html
<label for="checkbox">{{ task.text }}</label>
```

All together now:

```html
 <ul class="list">

    <li v-for="task in taskList">

      <input type="checkbox" class="checkbox">

      <label for="checkbox">{{ task.text }}</label>

      <button class="delete">X</button>

    </li>

  </ul>
```

What this means is that each todo item in our `taskList` array will be rendered in an `li` element that contains a `checkbox` for marking the item as completed, a `label` for holding the text and a `button` for deleting the task.

Here's the current state of our app. Add some tasks and see it in action.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/12/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Feature 3 - Delete a single todo item

We have already setup our button for deleting tasks and we used css to display the button only when hovering on the task. Now let us register a method that will be called when the button is clicked.

```html
...
<button class="delete" v-on:click="removeTask(task)">X</button>
...
```

```javascript
...
removeTask: function(task) {
  //$remove here works like array.splice()
  this.taskList.$remove(task);
}
...

```

Our button element triggers the `removeTask` method which takes one argument, `task` which is the current array element being operated on (remember `task in taskList`).

Inside `removeTask` we use a built-in array extension in Vue called `$remove` which helps us remove an element from an array and trigger view updates.

Try it out, add some tasks and click the `X` button that appears on hovering over an item.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/13/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Feature 4 - Clear the whole list

This next feature is quite straightforward to implement. We need a way to clear the whole list once the `Clear List` button on the top panel is clicked.

```html
<button v-on:click="clearList">Clear List</button>
```

Now let's register the `clearList` method.

```javascript
...
clearList: function() {
  //Setting taskList to an empty array clears the whole list
  this.taskList = [];
}
...
```

Remember `taskList` is where our todos are stored so all we need to do to clear our list out is to set `taskList` to an empty array.

## Feature 5 - Mark single items as completed

Marking tasks as done is a very common feature in any half-decent todo app and ours is not going to be any different.

Remember we already setup the `checked` property to false when we add a new todo item. We only need a way to toggle it to true

We can do this by binding our checkbox to the `checked` property using the `v-model` directive.

```html
<input type="checkbox" class="checkbox" v-model="task.checked">
```

That's it. When the checkbox is selected the `checked` key toggled to true and vice versa.

Try it out

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/15/embedded/result,html,js,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Now we need to provide visual feedback in our app. Most to-do apps strike out the task and grey out the text so we'll do something similar here.

If you check the css tab, you will see the following rule which takes care of the styling for us:

```css
...
.list li.done label {
  color: #d9d9d9;
  text-decoration: line-through;
}
...
```

So all we need to do is to add the `done` class to the `li` element when a task is checked. We will use another Vue.js directive for this: `v-bind`.

Manipulating an element's class is commonplace in Front-End development and with `v-bind` we can dynamically toggle classes on an element based on computed properties in an object.

For example:

```html
<div v-bind:class="{header: isHeader}"></div>
```

```javascript
data: {
  isHeader: true,
}
```

The result is

```html
<div class="header"></div>
```

If the `isHeader` property changes to false, the `header` class is removed from the `div` automatically.

Let's go ahead and use `v-bind` to dynamically toggle the `done` class on our `li` element by checking if a task is checked or not.

```html
<li v-for="task in taskList" v-bind:class="{done: task.checked}">
...

...
</li>
```

If `task.checked` returns true, the `done` class is enabled on the `li` element and vice versa.

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/16/embedded/result,html,js,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Feature 6 - Mark all items as completed

For the next feature, we will use the checkbox with the id of `mark-all` in the top panel to mark or unmark all items. Additionally, when we select all the checkboxes one by one, the `#mark-all` checkbox will also get selected.

We can solve both problems by dynamically setting the value of our `#mark-all` checkbox based on whether all the checkboxes are selected or not.

We will watch for changes in our Vue instance using `computed` properties. Basically they are used to change some data in the Vue instance based on some other data.

Before we can select or unselect all items, we need a way to set the value of the `#mark-all` checkbox. We can do this by checking if there is at least one todo item in our `taskList` array and if so, we will check if every item in the array returns true.

Let's create a new property `areAllSelected` in our `computed` object that will contnually watch for changes in our `taskList` array and change the value of `#mark-all` based on whether all the `checked` properties in the array return true.

```javascript
...
  computed: {
    areAllSelected: function() {
      //Check if every checked property returns true and if there is at least one todo item
      return this.taskList.every(function(task) {
        return task.checked;
      }) && this.taskList.length > 0;
    },
  },
...
```

The `every()` method tests whether all the elements in the `taskList` array passes the test implemented by the provided function and returns true if a truthy value is returned by the callback function otherwise it returns false.

Next, just as we did in #Feature 5, we will bind the checked property on the `#mark-all`to the value returned by `areAllSelected` like this:

```html
<input type="checkbox" id="mark-all"  :checked="areAllSelected">
```

What this means that if `areAllSelected` returns true, the checked property will be enabled on the element, otherwise it will be disabled.

Try it out. Add a few tasks and mark them as done one by one. You will see that once all the items have been marked as completed, the `#mark-all` checkbox will also be selected. 

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/17/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The other thing we need to implement is to select or unselect all items with the `#mark-all` checkbox.

To do this let's register a new method called `selectAll`:

```javascript
...
selectAll: function(task) {
      //targetValue is set to the opposite of areAllSelected
      var targetValue = this.areAllSelected ? false : true;
      //we use a for loop to set the checked state of all items to the target value
      for (var i = 0; i < this.taskList.length; i++) {
        this.taskList[i].checked = targetValue;
      }
    }
...
```

Finally, lets use the `v-on` directive on our `#mark-all` element to summon `selectAll`.

```html
<input type="checkbox" id="mark-all" v-bind:checked="areAllSelected" v-on:click="selectAll">
```

<iframe width="100%" height="300" src="//jsfiddle.net/ayoisaiah/v4p20ekz/19/embedded/js,html,css,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Wrapping Up


















