# CSS

1. linear-gradient에서 각도는 색깔이 변하는 방향을 뜻함.

   - 색깔 10%의 의미는 그 색깔의 10%만 사용하겠다는 의미이다.

2. 이미지 크기 제한 => `max-width`을 기억하자!

3. object-fit으로 맞추자. 그리고 height,width를 100%로 하면 부모크기에 맞춰짐.(header img)

4. bgPos animation은 회색 placeholder의 위치를 옮김으로써 구현하였다. duration의 반은 원래 넓이의 50%까지 옮기고 나머지는 -150%위치까지 옮김으로써 약간 진한 회색 부분이 이동하는 효과를 주었다.

# HTML

1. author안에 profile / author-info 로 나누었다. 그리고 author-info는 또다시 name 과 date로 나누어짐.

```html
<div class="card">
  <div class="card-header animated-bg" id="header"></div>
  <div class="card-content">
    <h3 class="card-title animated-bg animated-bg-text" id="title">&nbsp;</h3>
    <p class="card-excerpt" id="excerpt">
      &nbsp;
      <span class="animated-bg animated-bg-text">&nbsp;</span>
      <span class="animated-bg animated-bg-text">&nbsp;</span>
      <span class="animated-bg animated-bg-text">&nbsp;</span>
    </p>
    <div class="author">
      <div class="profile-img animated-bg" id="profile_img">
        <a id="profile-anchor" href="/hidden search bar/index.html"> </a>
      </div>
      <div class="author-info">
        <strong class="animated-bg animated-bg-text" id="name">&nbsp;</strong>
        <small class="animated-bg animated-bg-text" id="email">&nbsp;</small>
      </div>
    </div>
  </div>
</div>
```

2. `&nbsp;`은 공백을 추가하고 싶을때 사용.

3. 애니메이션을 추가하고 싶은곳에 `animated-bg` , `animated-bg-text` 클래스를 추가함.
