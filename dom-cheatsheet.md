# plain DOM

## accessing elements
```js
let element = document.getelementById('main');
// or
let element = document.querySelector('#main');
```

## modifying HTML content
```js
element.innerHTML = 'test';
```

## modifying style
```js
element.style.fontSize = '20px';
```

## modifying classes
```js
element.classList.add('important');
element.classList.remove('important');
```
older solution:
```js
element.className = 'important';
```

## creating elements
```js
document.createElement('div');
```

## adding & removing elements
```js
let element2 = document.createElement('div');
element1.appendChild(element2);
element1.removeChild(element2);
```



# DOM via jQuery

## accessing elements
```js
let element = $('#main');
```

## modifying HTML content
```js
element.html('test');
```

## modifying style
```js
element.css('font-size', '20px');
```

## modifying classes
```js
element.addClass('important');
element.removeClass('important');
```

## creating elements
```js
$('<div>');
```

## adding & removing elements
```js
let element2 = $('<div>');
element1.append(element2);
element2.remove();
```

# timeouts & intervals

## timeout
```js
setTimeout(
  () => { alert(); },
  1000
);
```

## interval
```js
let i = 0;
setInterval(
  () => {
    alert(i);
    i ++;
  },
  1000
);
```

## clearing an interval
```js
// this code will count to 5, then stop
let i = 1;
let intervalId = setInterval(
  () => {
    alert(i);
    i ++;
  },
  1000
);

setTimeout(
  () => { clearInterval(intervalId); },
  6000
)
```

# browser events

```js
function clickHandler() {
  alert('element1 clicked!')
}

element1.addEventListener('click', clickHandler);
```