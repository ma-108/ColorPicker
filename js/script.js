const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作したときの一連の動作
const colorBg = () => {
  // 選択した色を背景色に設定
  document.body.style.backgroundColor = color.value;
  
  // カラーコードを表示
  if (color.value === '#ffffff') {
    text.textContent = `カラーコード: ${color.value} (white)`;
  } else if (color.value === '#000000') {
    text.textContent = `カラーコード: ${color.value} (black)`;
  } else {
    text.textContent = `カラーコード: ${color.value}`;
  }
}

// カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input', colorBg);

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(color.value).then(() => {
    copyBtn.textContent = 'コピー完了！';
    setTimeout(() => copyBtn.textContent = 'コピー', 1500);
  }).catch(err => {
    console.error('コピーに失敗しました', err);
  });
});
