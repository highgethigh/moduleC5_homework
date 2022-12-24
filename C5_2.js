// JSON, который будет парсится
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;
// console.log('jsonString', jsonString);

// Получение данных 
const data = JSON.parse(jsonString);
// console.log('data', data);

const list = data.list;
// console.log('list', list);


const list_result = []; // Создаем пустой массив

list_result.push(list); // В пустой массив добавляем список из объектов
// console.log(list_result);

const result = {
    list: list_result
}

console.log(result);