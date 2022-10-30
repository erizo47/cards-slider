
function slidesPlugin () {
    const slides = document.querySelectorAll('.slide');

    const colorsLight = [
        '#383447',
        '#333e3d',
        '#6c6c6d',
        '#2d2d18',
        '#3a2d37',
        '#7E7E35',
        '#357E43',
        '#357E79',
        '#35557E',
        '#4E357E',
        '#62357E'
       
    ]
    const colorsDark =[
        '#360404',
        '#000000',
        '#0b0310',
        '#10030c',
        '#040b02',
        '#112C25',
        '#112C2B',
        '#11202C',
        '#11122C',
        '#24112C',
        '#2C2911',
        '#202C11'
    ]
    let activeSlides = Math.floor(Math.random() * slides.length);
    slides[activeSlides].classList.add('active')
    
    for ( const slide of slides) {   
        const colorUp = Math.floor(Math.random() * colorsLight.length);
        const colorDown = Math.floor(Math.random() * colorsDark.length);
        const background = `linear-gradient(${colorsLight[colorUp]}, ${colorsDark[colorDown]})`
        function changeBackground() {    
            document.body.style.background = background
        }
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
            changeBackground()
        })
    }
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
    
}
  
slidesPlugin ();