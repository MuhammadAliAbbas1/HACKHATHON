// const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement
// const content = document.getElementById('content') as HTMLDivElement

// toggleButton.addEventListener('click', () => {
//     if(
//         content.style.display === 'none'){
//         content.style.display = 'block';
//         toggleButton.textContent = 'Hide Content';
//     }

// else{
//     content.style.display = 'none';
//     toggleButton.textContent = 'Show Content';
    
// }
// })

const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const content = document.getElementById('content') as HTMLDivElement;

// Initially hide the content on page load
content.style.display = 'none'; // Hide content by default

toggleButton.addEventListener('click', () => {
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.textContent = 'Hide Content';
    } else {
        content.style.display = 'none';
        toggleButton.textContent = 'Show Content';
    }
});
