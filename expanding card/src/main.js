// alert({});

// 1. click and add active. then remove active from prev.
// 2. click and push the idx it to prev arr.

const container = document.querySelector('.container');
const panels = [...document.querySelectorAll('.panel')];
let prevPanelIdx;

container.addEventListener('click', e => {
  const { classList } = e.target;
  //   console.log(e.target);
  //   console.log(childrenNodes);
  if (classList.contains('panel')) {
    classList.add('active');

    console.log(prevPanelIdx);
    if (prevPanelIdx >= 0) {
      console.log('remove');
      panels[prevPanelIdx].classList.remove('active');
    }
    prevPanelIdx = panels.indexOf(e.target);
  }
});
