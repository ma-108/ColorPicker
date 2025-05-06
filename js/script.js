const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
const copyIcon = document.querySelector('#copyIcon');

// 背景色を変更し、カラーコードを表示
const colorBg = () => {
  const selectedColor = color.value;
  document.body.style.backgroundColor = selectedColor;

  if (selectedColor === '#ffffff') {
    text.textContent = `カラーコード: ${selectedColor} (white)`;
  } else if (selectedColor === '#000000') {
    text.textContent = `カラーコード: ${selectedColor} (black)`;
  } else {
    text.textContent = `カラーコード: ${selectedColor}`;
  }
};

color.addEventListener('input', colorBg);

// コピー処理
copyIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(color.value).then(() => {
    copyIcon.src = 'check.svg'; // チェックアイコンに変更
    setTimeout(() => {
      copyIcon.src = 'copy.svg'; // 元に戻す
    }, 2000);
  }).catch(err => {
    console.error('コピーに失敗しました', err);
  });
});
