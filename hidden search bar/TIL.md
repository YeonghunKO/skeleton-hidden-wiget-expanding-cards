# CSS

1. 무언가를 숨기거나 나타낼때 우선 absoulute를 이용해서 위치를 변경시켜 덮어버리고 active 클래스, transform을 이용해서 드러나게 하는 거네.

```css
.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.btn:focus,
.input:focus {
  outline: none;
}

.search.active .input {
  width: 200px;
}

.search.active .btn {
  transform: translateX(198px);
}
```
