console.log("Hi there!")

const {hash} = window.location;
const message = atob(hash.replace("#",''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML=message;
    
}


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault() // Prevents default action of browser on form submit.
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')
    console.log('Form submitted.') // Logs "Form submitted." to console. 
    const input = document.querySelector('#message-input')
    const encrypted = btoa(input.value);
    const input2 = document.querySelector('#link-input')
    input2.value =  `${window.location}#${encrypted}`;
    input2.select();
    console.log(input.value) // Log)
})