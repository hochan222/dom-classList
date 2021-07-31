# DOM CLASSLIST

## DOMTokenList.classList

```html
<div class="classList">Class List</div>
```

<img src="https://user-images.githubusercontent.com/22424891/127731956-87f85cb7-4ccf-454d-b3c5-521480bc7cac.png" height="150px" />

## DOMTokenList.add()

add 메소드는 class 이름 사이의 공백을 제거해준다.

```html
<div class="classList      a    v    c">Class List</div>
```

<img src="https://user-images.githubusercontent.com/22424891/127731990-1aeb6d03-d5da-4e38-9d31-3e29dbdd288e.png" height="150px" />

## DOMTokenList.contains()

```html
<div class="classList      a    v    c">Class List</div>
```

```js
console.log(eventTarget.classList);
console.log(eventTarget.classList.contains("classList"));
console.log(eventTarget.classList.contains("holee"));
```

<img src="https://user-images.githubusercontent.com/22424891/127732079-65b7a5dd-bef3-4ff3-aaac-6104e2535d54.png" height="150px" />

## DOMTokenList.item()

```html
<div class="classList      a    v    c">Class List</div>
```

```js
const eventTarget = document.querySelector(".classList");
const classes = eventTarget.classList;

console.log(classes.item(classes.length - 1));
```

<img src="https://user-images.githubusercontent.com/22424891/127732249-0a61da17-3085-4641-a60d-2e30ffc47ddb.png" height="150px" />

## DOMTokenList.remove()

```html
<div class="classList      a    v    c">Class List</div>
```

```js
const eventTarget = document.querySelector(".classList");

console.log(eventTarget.classList);
console.log(eventTarget.classList.remove('classList'));
console.log(eventTarget.classList);
```

<img src="https://user-images.githubusercontent.com/22424891/127732341-2a48a7af-ef45-49d6-90f4-d46f480d276d.png" height="150px" />