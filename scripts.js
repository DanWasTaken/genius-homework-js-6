// Завдання
// Створити телефонну книгу:
// - створити початковий клас Abonent, де зберігатимуться ім'я і номер
// - створити set який прийматиме телефон і номер
// - створити get який виводитиме данні про абонента
// - створити три різних юзери
// - вивести данні

class Abonent {
  firstName = '';
  secondName = '';
  phoneNum = '';

  constructor(props) {
    this.name = props.name;
    this.number = props.number;
  }

  set name(props) {
    const namesArr = props.split(' ');
    this.firstName = namesArr[0];
    this.secondNameName = namesArr[1];    
  }

  set number(props) {
    this.phoneNum = `+38${props}`;
  }

  get info() {
    return `First Name: ${this.firstName}\nSecond Name: ${this.secondNameName}\nPhone number: ${this.phoneNum}`;
  }
}

const newAbonent0 = new Abonent({
  name: 'Ivan Ivanov',
  number: '0961241244'
})

const newAbonent1 = new Abonent({
  name: 'Andrii Andriyovych',
  number: '0678232332'
})

const newAbonent2 = new Abonent({
  name: 'Oleg Grigorovich',
  number: '0963252323'
})

console.log(newAbonent0.info);
console.log(newAbonent1.info);
console.log(newAbonent2.info);