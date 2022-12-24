/*
    Функция-обертка над XMLHttpRequest, осуществляющая запрос
    url - урл, по которому будет осуществляться запрос
    callback - функция, которая вызовется при успешном выполнении
    и первым параметром получит объект-результат запроса
 */
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
};

// Ищем кнопку, по нажатии на которую будет запрос
const btn = document.querySelector('.btn'); 

// Ищем ноду для вставки результа запроса
const div = document.querySelector('div');

/*
    Функция обработки полученного результата
    apiData - объект с результатом запроса
 */
function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);
    
    apiData.forEach(item => {
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
    });
    
    console.log('end cards', cards);
    
    div.innerHTML = cards; // Запись в результирующую ноду полученных данных от запроса
};

// Создает обработчик события при клике
btn.addEventListener('click', () => {
    const valueInput = document.querySelector('.js-get-number').value;
    const number = Number(valueInput); // Переменная number для получения числа введенного пользователем
    if(1<= number && number <=10) {
        useRequest(`https://picsum.photos/v2/list/?limit=${number}`, displayResult);
    }
    else if(isNaN(number)) {
      alert("Вы вели не число!");
      window.location.reload();
    }
    else {
        document.querySelector('div').innerHTML = 'Число вне диапазона от 1 до 10!';
    }
});



