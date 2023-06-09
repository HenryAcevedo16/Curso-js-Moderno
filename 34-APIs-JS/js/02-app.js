//Previamente vimos getClientRect, que nos permitia identificar cuando un elemento estaba visible, existe otra API

document.addEventListener('DOMContentLoaded', () =>{

    const observer = new IntersectionObserver (entries => {

        if(entries[0].isIntersecting){
            console.log('Elemento visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
});