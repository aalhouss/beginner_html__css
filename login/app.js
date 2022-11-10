const warning=document.createElement('h2');

//Add class
warning.className='warning-text'; 

//create text node and append 
warning.appendChild(document.createTextNode('Invalid credetnials. please try again.'));

console.log(warning)
//Append warning as child to div

//Display text when login fails 
document.querySelector('.warning__container').appendChild(warning);