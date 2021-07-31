# DOM CLASSLIST

## DOMTokenList.classList

```html
<div class="classList a b c">Class List</div>

```js
console.log(document.querySelector(".classList").classList);
console.log(document.querySelector(".classList").classList.value);
console.log(document.querySelector(".classList").classList.length);
```

### DOMTokenList.classList.value

DOMTokenList.classList.value는 classList를 DOMString으로 반환하거나 classList를 지우고 지정된 값으로 설정할 수 있다.
### DOMTokenList.classList.length (읽기 전용 속성)

DOMTokenList.classList.length는 객체에 저장된 객체 수를 반환한다.

<img src="https://user-images.githubusercontent.com/22424891/127732628-2a0c2abc-c6f5-4d27-b0cc-43f606da00bc.png" height="150px" />

DOMTokenList는 읽기전용이다. 아래 메소드들을 이용해서 수정하자.

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

## DOMTokenList.toggle()

toggle 메소드는 또한 class 이름 사이의 공백을 제거해준다.

```html
<div class="classList      a    v    c">Class List</div>
```

```js
const eventTarget = document.querySelector(".classList");

console.log(eventTarget.classList);
console.log(eventTarget.classList.toggle('holee'));
console.log(eventTarget.classList);
console.log(eventTarget.classList.toggle('holee'));
console.log(eventTarget.classList);
```

<img src="https://user-images.githubusercontent.com/22424891/127732421-bc1882ca-b65c-43ef-a6c9-6242745d5a5a.png" height="150px" />

## DOMTokenList.replace()

```html
<div class="classList      a    v    c">Class List</div>
```

```js
const eventTarget = document.querySelector(".classList");

console.log(eventTarget.classList);
console.log(eventTarget.classList.replace('classList', 'holee'));
console.log(eventTarget.classList);
```

<img src="https://user-images.githubusercontent.com/22424891/127732471-8f8cf3f7-a071-4120-9ddd-9f02338592d6.png" height="150px" />

## DOMTokenList.entries(), DOMTokenList.values(), DOMTokenList.keys()

DOMTokenList.entries(), DOMTokenList.values(), DOMTokenList.keys()는 iterator를 반환한다.

```html
<div class="classList      a    v    c">Class List</div>
```

```js
const eventTarget = document.querySelector(".classList");
const iterEntries = eventTarget.classList.entries();
const iterValues = eventTarget.classList.values();
const iterKeys = eventTarget.classList.keys();

for (let Entries of iterEntries) {
  console.log(Entries + "-entries-");
}

for (let values of iterValues) {
  console.log(values + "-values-");
}

for (let keys of iterKeys) {
  console.log(keys + "-keys-");
}
```

<img src="https://user-images.githubusercontent.com/22424891/127732990-0b1c0938-d5d2-4424-b25f-00c141b3d649.png" height="150px" />

## DOMTokenList.forEach()

### callback

- 각 요소에 대해 실행할 함수, 결국 세 개의 인수:
  - `currentValue`
    - 배열에서 처리 중인 현재 요소이다.
  - `currentIndex`
    - 배열에서 처리 중인 현재 요소의 인덱스이다.
  - `listObj`
    - `forEach()` 적용 중인 배열이다.
- `thisArg` 선택 과목
  - `this` 실행할 때 사용할 값 `callback` 이다.

```html
<div class="classList      a    v    c">Class List</div>
```

```js
const eventTarget = document.querySelector(".classList");
const iterValues = eventTarget.classList.values();

eventTarget.classList.forEach(function (value, key, listObj) {
  console.log(`${value} ${key}/${this}/${listObj}  ++  `);
}, "abcdefg");
```

<img src="https://user-images.githubusercontent.com/22424891/127733167-4509d71b-7bef-4a69-8420-40c757ed7ba8.png" height="150px" />

## 그외

- DOMTokenList.supports(token) (Experimental)