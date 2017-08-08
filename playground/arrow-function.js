const square = (x) => x*x;
console.log(square(9));

const user = {
  name: 'Han Junghyun',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHello: function(){
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user.sayHi(1,2,3);
user.sayHello();
user.sayHiAlt(1,2,3);