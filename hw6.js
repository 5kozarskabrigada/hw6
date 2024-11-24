// Задание 1
// Реализовать класс, описывающий простой маркер.В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере(в процентах);
// ■ метод для печати(метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0, 5 % чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
//     унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.


// class Marker
// {
//     constructor(color, inkAmount)
//     {
//         this.color = color,
//         this.inkAmount = inkAmount,
//     }
    
    
//     print(text) 
//     {
       
//         let printedText = '';

       
//         for (let char of text) {
            
//             if (this.inkAmount <= 0) {
//                 console.log("no ink left");
//                 break;
//             }

           
//             if (char !== ' ') {
//                 this.inkAmount -= 0.5;
//             }

//             printedText += char;
//         }

//         console.log(`%c${printedText}`, `color: ${this.color}`);
//         console.log(`Remaining ink: ${this.inkAmount.toFixed(1)}%`);
//     }


// }


// class RefillableMarker extends Marker 
// {
//     constructor(color, inkAmount = 100) 
//     {
//         super(color, inkAmount); 
//     }

//     refill() 
//     {
//         this.inkAmount = 100;
//         console.log('Marker refilled');
//     }

// }

// Задание 2
// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
// ■ метод для вывода даты(числа и месяца) текстом;
//  метод для проверки – это прошедшая дата или будущая
//     (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.

// class ExtendedDate
// {
//     constructor(day, month , year)
//     {
//         this.date = new Date(year, month - 1, day) ;
//     }

//     isFutureDate()
//     {
//         const currentD = new Date();
//         return this.date >= currentD;
//     }

//     isLeapYear()
//     {
//         return this.date.getFullYear() % 4 == 0;
//     }

//     nextDate()
//     {
//         const nextDate = new Date(this.date);
//         nextDate.setDate(this.date.getDate() +1);

//         return nextDate.toDateString(); 
        
//     }

// }

// Задание 3
// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы
// со списком работников банка.Массив работников необходимо
// передавать через конструктор, а получать html код с помощью
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml().

class Employee 
{
    constructor(name, job, salary) 
    {
        this.name = name;
        this.job = job;
        this.salary = salary;
    }
}

class EmTable
 {

    constructor(employees) 
    {
        this.employees = employees;
    }

    getHtml() 
    {
        let html = `<table border="1">`;

        for (let employee of this.employees) 
            {
            html += `<tr>`;
            html += `<td>${employee.name}</td>`;
            html += `<td>${employee.job}</td>`;
            html += `<td>${employee.salary}</td>`;
            html += `</tr>`;
        }

        html += `</table>`;
        return html;
    }
}





// Задание 4
// Реализовать класс StyledEmpTable, который наследуется от
// класса EmpTable.Добавить метод getStyles(), который возвращает
// строку со стилями для таблицы в тегах style.Переопределить
// метод getHtml(), который добавляет стили к тому, что возвращает
// метод getHtml() из родительского класса.
// Создать объект класса StyledEmpTable и вывести на экран
// результат работы метода getHtml().

class StyledEmpTable extends EmTable 
{
    getStyles() 
    {
        return `
        <style>
            table 
            {
                width: 100%;
                border-collapse: collapse;
            }

            th, td 
            {
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: gray;
                color: white;
            }

            tr:nth-child(even) 
            {
                background-color: darkgray;
            }

        </style>
        `;
    }

    getHtml() 
    {
        const baseHtml = super.getHtml();
        const styles = this.getStyles();
        return styles + baseHtml;
    }
}

