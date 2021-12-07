# HTML

1. h3를 panel div안에 감쌌다. 그리고 panel div는 container div안에 감쌌다. 이렇게 감싸줘야 style을 적용했을때 안에 있는 자식들이 영향을 받게 된다.

```html
<div class="container">
  <div
    class="panel"
    style="
          background-image: url('https://images.unsplash.com/photo-1638218022343-3158d732f5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
        "
  >
    <h3>Rock</h3>
  </div>
</div>
```

# CSS

1. panel에 relative를 줘야 h3가 absolute가 될 수 있음.

2. flex관련된 내용은 [여길](https://studiomeal.com/archives/197) 참고하길.

   - `flex` 라는 property 를 이용해서 다른 panel과 다른 크기변화를 구현할 수 있음

3. transition의 4번째 args는 delay를 뜻함.

# JS

1. null은 0보다 크거나 같다고 나온다. 따라서 prevIndex를 null로 설정하고 아래와 같이 코드를 짜면 오류가 난다.

```javascript
let prevPanelIdx = null;
if (prevPanelIdx >= 0) {
  console.log(childrenNodes[prevPanelIdx]);
  childrenNodes[prevPanelIdx].classList.remove('active');
}
```
