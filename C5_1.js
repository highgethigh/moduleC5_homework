// Создание экземпляра класса DOMParser, который позволит парсить НАШ XML
const parser = new DOMParser();
// console.log(parser); 


// XML, который нужно парсить
const xmlString = `
        <list>
            <student>
                <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
                </name>
                <age>35</age>
                <prof>teacher</prof>
            </student>
            <student>
                <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
                </name>
                <age>58</age>
                <prof>driver</prof>
            </student>
        </list>
`;
// console.log('xmlString', xmlString);

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
// console.log('listNode', listNode);

const studentNode = [...listNode.querySelectorAll("student")];
// console.log('studentNode', studentNode);

const list = []; // Создаем пустой массив для записи в него двух объектов

studentNode.forEach(studentNodes => {

    const nameLang = studentNodes.querySelector("name");
    // console.log('nameLang', nameLang);

    // Получение данных из атрибута
    const langAttr = nameLang.getAttribute("lang");
    // console.log('langAttr', langAttr);

    const firstName = nameLang.querySelector('first');
    // console.log('firstName', firstName);

    const secondName = nameLang.querySelector('second');
    // console.log('secondName', secondName);

    const ageInfo = studentNodes.querySelector("age");
    // console.log('ageInfo', ageInfo);

    const profInfo = studentNodes.querySelector("prof");
    // console.log('profInfo', profInfo);

    list.push({   // Добавляем в конец элементы в массив list
        name: `${firstName.textContent} ${secondName.textContent}`,
        age: ageInfo.textContent,
        prof: profInfo.textContent,
        lang: langAttr
    });
});


// Запись данных в результирующий объект
const result = {
    list: list
};

console.log('result', result);
    
    

