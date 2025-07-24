const scroller = scrollama();
const viewer = document.getElementById('model');

// Setup Scrollama steps
scroller
  .setup({
    step: '.step',
    offset: 0.5,
  })
  .onStepEnter(response => {
    const orbit = response.element.getAttribute('data-orbit');
    viewer.setAttribute('camera-orbit', orbit);
  });
