
var person = {
personName: "Scott",
birthDay: function() {
console.log(this);
return `Happy Birthday to ${this.personName}`;
}
};
this.x = 100;
console.log(this);

console.log(person.birthDay()); 
