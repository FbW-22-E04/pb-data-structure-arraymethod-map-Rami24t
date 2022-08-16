// 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize (str) {
	arr= str.split('');
	arr.forEach((char,idx)=>
{
	if(char=='-')
	{
		arr.splice(idx,1);
		arr[idx]=arr[idx].toUpperCase();
	}
});
return arr.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


// 2. You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => {return {fullName: (user.name+' '+user.surname) , id: user.id};});

console.log(usersMapped);
/** usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
] **/

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith
