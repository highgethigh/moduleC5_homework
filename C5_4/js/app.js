const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const valueInput_1 = document.querySelector('.js-get-number_1').value;
  const valueInput_2 = document.querySelector('.js-get-number_2').value;

  const number_1 = Number(valueInput_1); // для ширины
  const number_2 = Number(valueInput_2); // для высоты

  if((100<= number_1 && number_1 <=300) && (100<= number_2 && number_2 <=300)) // проверка на диапазон
  {
    fetch(`https://picsum.photos/${number_1}/${number_2}`)  // запрос
      .then(data => {
        console.log(data);
        const result = data.url;
        console.log(result); // получаем ссылку на картинку
        document.querySelector('.result').innerHTML = `
        <div>
          <p>Полученное фото:</p>
            <img src="${result}">
        </div`
      })
  }
  else {
    document.querySelector('.result').innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    if(isNaN(number_1 && number_2)) {
      document.querySelector('.result').innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    }
  }
})


