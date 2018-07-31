const button = document.getElementById('submit_button');

function submitClick(event) {
    event.preventDefault();
    const titleInput = document.getElementById('title_input');
    const nounInput = document.getElementById('noun');
    const verbInput = document.getElementById('verb');
    const adjInput = document.getElementById('adjective');

    if(titleInput.value === null || titleInput.value === '') {
        alert('Please fill in all fields');
        return false;
    } else if(nounInput.value === null || nounInput.value === '') {
        alert('Please fill in all fields');
        return false;
    } else if(verbInput.value === null || verbInput.value === '') {
        alert('Please fill in all fields');
        return false;        
    } else if(adjInput.value === null || adjInput.value === '') {
        alert('Please fill in all fields');
        return false;
    } else 
    return true;
}

// const formContainer = document.querySelector('.form_container').;
// formContainer.
// const sentTitle = document.createElement('textarea');
// const mainContainer = document.querySelector('.main_container');
// sentTitle.src = 

// console.log('Last night I ate a',nounInput.value,'and today I just had to',verbInput.value,'. What a(n)',adjInput.value,'day!')



button.addEventListener('click', submitClick);
