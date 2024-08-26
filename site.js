document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});




const imgs = document.querySelectorAll('.slideshow ul img');
const prev = document.querySelector('.controlprev');
const nxt = document.querySelector('.controlnext');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
        
    }
    imgs[n].style.display = 'block';
}

changeSlide();



prev.addEventListener('click', (e) =>{
    if(n > 0) {
        n--;
    }else{
        n = imgs.length - 1;
    }

changeSlide();
})

nxt.addEventListener('click', (e) =>{
    if (n < imgs.length - 1) {
        n++;
    }else{
        n = 0;
    }

    changeSlide()
});

const observe = new IntersectionObserver ((entries) => {
     entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');   
        }else{
            entry.target.classList.remove('show');
        }
     });
});


const hideEL = document.querySelectorAll('.hide');
hideEL.forEach((EL) => observe.observe(EL));
