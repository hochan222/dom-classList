# DOM CLASSLIST

## classList

```html
<div class="classList">Class List</div>
```

<img src="https://user-images.githubusercontent.com/22424891/127731956-87f85cb7-4ccf-454d-b3c5-521480bc7cac.png" height="150px" />

## add

add 메소드는 class 이름 사이의 공백을 제거해준다.

```html
<div class="classList      a    v    c">Class List</div>
```

<img src="https://user-images.githubusercontent.com/22424891/127731990-1aeb6d03-d5da-4e38-9d31-3e29dbdd288e.png" height="150px" />

## contains

```html
<div class="classList      a    v    c">Class List</div>
```

```js
console.log(eventTarget.classList);
console.log(eventTarget.classList.contains("classList"));
console.log(eventTarget.classList.contains("holee"));
```

<img src="https://user-images.githubusercontent.com/22424891/127732079-65b7a5dd-bef3-4ff3-aaac-6104e2535d54.png" height="150px" />
