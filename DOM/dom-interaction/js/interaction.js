document.getElementById('btn-title-update').addEventListener('click',function (){
    // console.log('hmm');
    const title = document.getElementById('title-update');
    // console.log(title);
    title.innerText = 'Updated text';
})

document.getElementById('btn-login').addEventListener('click', function(){
    const txt  = document.getElementById('user');
    txt.innerText='User logged in'
})

document.getElementById('btn-update').addEventListener('click',function(){
    console.log('update btn clicked');
    // 2. get the text from input field
    const inputName = document.getElementById('input-name');
    console.log(inputName);
    const name = inputName.value;
    console.log('name: ',name);
    const updateName = document.getElementById('name');
    updateName.innerText=name;

})