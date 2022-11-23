/* 
    Створити об'єкт customer, що містить такі властивості:
   - ім'я, 
   - прізвище, 
   - електронна адреса, 
   - password,
   - номер телефона,
   - адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 
     
     методи: 
   - виведення адреси, 
   - зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).

    Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
    Видалити у об'єкта властивість адреса.

    Зробити копії об'єкту customer двома різними способами.
*/

const customer = {
  name: 'customerName',
  surname: 'customerSurname',
  email: 'customer_mail@domain.com',
  password: 'helloIAmACustomer007',
  tel: '+380000000000',
  adress: {
    country: 'Ukraine',
    city: 'City',
    street: 'Street',
    house: 'NumberOfHouse',
    flat: 'NumberOfFlat',
  },
  changePhoneNumber(newNumber) {
    this.tel = newNumber;
  },
  adressOutput() {
    return `${this.adress.country}, ${this.adress.city}, ${this.adress.street}, ${this.adress.house}, ${this.adress.flat}`;
  },
};

// console.dir(customer); // object output test

// output adress of customer
console.group("Customer's adress :");
console.log('This customer lives by next adress : ', customer.adressOutput());
console.groupEnd();

customer.changePhoneNumber('+380999004009');

customer.isMale = true; // add property isMale to customer
delete customer.adress; // delete property adress from customer

// output 'customer' after all changes
console.group('Customer after all changes :');
console.dir(customer);
console.groupEnd();

// firts method of copy
const customer1 = Object.assign({}, customer);

console.group('customer1 copied from customer :');
console.dir(customer1);
console.groupEnd();

// second method of copy
const customer2 = { ...customer };
console.group('customer2 copied from customer :');
console.dir(customer2);
console.groupEnd();

/*
    Перебрати і вивести властивості об'єкту 
    cat {   
      name: 'Murka',
      color: 'black',
      isMale: false,
      isFurnitureDemage: true,
    }

    циклом for..in.
*/

const cat = {
  name: 'Murka',
  color: 'black',
  isMale: false,
  isFurnitureDamage: true,
};

console.group('for...in in cat :');
for (const key in cat) {
  console.log('cat.' + key + ' = ' + cat[key] + ';');
}
console.groupEnd();

/*
    Створити функцію-конструктор для створення об'єктів книг з властивостями:
    - автор, 
    - назва, 
    - рік видання, 
    - видавництво (рядок або *об'єкт з властивостями місто, назва), 
    - ціна.
   
    Передбачити методи:
      для обчислення віку книги (у роках),
      для зміни ціни книги.
*/

function Book(author, name, year, publisher, price) {
  this.author = author;
  this.name = name;
  this.year = year;
  this.publisher = publisher;
  this.price = price;
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
  this.ageOfBook = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
}

const book1 = new Book(
  'Sir Arthur Conan Doyle',
  'The Memoirs of Sherlock Holmes',
  1893,
  'George Newnes Ltd, London',
  '20'
);

book1.changePrice('75');

console.dir(book1);
console.log('Age of this book = ' + book1.ageOfBook());
