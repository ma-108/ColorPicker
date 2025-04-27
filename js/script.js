const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
  document.body.style.backgroundColor = color.value;

  if (color.value ===  {
    text.textContent = `カラーコード: ${color.value} (white)`;
  } eles if (color.value === #000000') {
    text.textContent = `カラーコード: ${color.value} (black)`;
  } eles {
    text.textContent = `カラーコード: ${color.value}`;
  }
};

color.addEventListener('input',colorBg);
