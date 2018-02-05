Resources
=========

https://reactjs.org



What is React?
==============

React.js is one of the three big client-side app frameworks/libraries (the other being Angular and Vue.js)

All three of them have two basic concepts in common:
* declarative rendering
* component-based architecture



Basics
======

## installing React
* install node+npm (https://nodejs.org/)
* install "create-react-app": ```npm install -g create-react-app```

## creating a new React app
create-react-app my-app
cd my-app
npm start

https://reactjs.org/docs/add-react-to-a-new-app.html

## default project structure
* public/index.html, src/index.js: main entry points
* App.js, App.css: define App component

## serving and building
* ```npm start```: starts the test server
* ```npm run build```: creates a production build

## basic architecture
* declarative: We will modify the model, the view will automatically update
* component-based: We can define our own HTML tags



Basics on components
====================

## Defining a component
example:
```js
class App extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.state = {count: 0};
  }

  render() {
    [...]
  }

  increment() {
    this.setState(...)
  }
}
```

## Manipulating state
In a component, this.state is an object that holds the current state of the component.

The content of this.state should never be modified directly (except in the constructor). Instead, call this.setState() and pass new properties. Example:

```jsx
  this.setState({message: 'hello', importance: 0});
  this.setState({importance: 1});
  // result: this.state === {message: 'hello', importance: 1}
```

If the new state depends on the old state, use the functional variant:
```jsx
setState((oldState) => { return newState; })
```

## calling methods from the template, binding functions to objects
In order to reference the correct *this* value, methods that are called from the 'template' must be bound after they have been defined:
```jsx
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  render() {
    return <button onClick={this.increment}>...</button>
  }

  increment() {
    this.setState([...])
  }
```
For an explanation, consider this example:
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

let a = new Person('Alice');
a.getName(); // 'Alice'
let gn = a.getName;
gn(); // Error: this is undefined
```
Here, ```a.getName()``` is called as a method, so its ```this``` variable refers to the class instance. However, ```gn()``` is not called as a method, so it does not reference any object.




Template syntax (jsx)
=====================

## basics
* < gets you into HTML
* { gets you into JavaScript

example:

```jsx
let a = <div> Hello! I am {2018 - 1970} years old!</div>
```

All tags must be written in XML syntax - e.g. ```<br/>```

## binding events
```jsx
  <button onClick={this.increment}> + </button>
```
list of browser events: https://www.w3schools.com/jsref/dom_obj_event.asp

## repeating elements
```jsx
  <ul>
    {this.state.todos.map((todo, index) => 
      <li key={index}>{todo}</li>
    )}
  </ul>
```

## conditional display
```jsx
  {this.state.error ? <span>An error occured</span> : ''}
```

## css classes
```jsx
  <div className={'message' + this.state.error ? ' error' : ''}>...</div>
```

## styling elements
```jsx
  <div style={ {color: '#fff', fontSize: getFontSize()} }>
```



Working with forms
==================

```jsx
<input value={this.state.nameInputContent} onChange={this.handleChange}/>

handleChange(event) {
  this.setState({nameInputContent: event.target.value});
}
```