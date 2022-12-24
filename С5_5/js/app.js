const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  
  const number_1 = document.querySelector('.js-get-number_1').value;
  const number_2 = document.querySelector('.js-get-number_2').value;

  if((1<= number_1 && number_1 <=10) && (!isNaN(number_1))) {
  
  }
  else {
    document.querySelector('.result_1').innerHTML = `Номер страницы: [${number_1}] вне диапазона от 1 до 10`;
  }
  
  if((1<= number_2 && number_2 <=10) && (!isNaN(number_2))) {

  }
  else {
    document.querySelector('.result_2').innerHTML = `Лимит: [${number_2}] вне диапазона от 1 до 10`;
  }

  if((!isNaN(number_1) && !isNaN(number_2)) && (number_1 >= 1 && number_1 <= 10) || (number_2 >= 1 && number_2 <= 10))  {

    fetch(`https://picsum.photos/v2/list?page=${number_1}&limit=${number_2}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        let cards = '';
        console.log('start cards', cards);
        
        data.forEach(item => {
          console.log(`Author: ${item.author} - ${item.download_url}`);
          const cardBlock = `
          <div class="card">
            <img
              src="${item.download_url}"
              class="card-image"
            />
            <p>Author: ${item.author}</p>
          </div>
          `;
          cards = cards + cardBlock;
          console.log('end cards', cards);

          document.querySelector('.result_3').innerHTML = cards;

          // Локальное хранилище для данных
          const myStorage = JSON.stringify(data);
          localStorage.setItem('myJSON', myStorage);
        });
      })
      .catch((error) => console.log(error)); // для обработки ошибок
      
  }
  else {
    document.querySelector('.result_3').innerHTML = `Номер страницы: [${number_1}] и лимит: [${number_2}] вне диапазона от 1 до 10`;
  }
})

document.addEventListener('DOMContentLoaded', () => {
  // Локальное хранилище для перезагрузки браузера
  const myJSON = localStorage.getItem('myJSON');

  const myJSONParse = JSON.parse(myJSON);

  console.log(myJSONParse);

  let cards = '';
  myJSONParse.forEach(item => {
    console.log(`Author: ${item.author} - ${item.download_url}`);
    const cardBlock = `
    <div class="card">
      <img
        src="${item.download_url}"
        class="card-image"
      />
      <p>Author: ${item.author}</p>
    </div>
    `;
    cards = cards + cardBlock;
    console.log('end cards', cards);

    document.querySelector('.result_3').innerHTML = cards;
  });
  
})