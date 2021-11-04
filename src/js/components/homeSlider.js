import '../../css/homeSlider.css'

const data = {
    slide01: {
        img: '../assets/img/cultivos2000x129920160627033502820.jpg',
        title: 'Título del producto proncipal',
        paragraph: 'Este es el parrafo de la imagen'
    },
    slide02: {
        img: '../assets/img/kent-pilcher-87MIF4vqHWg-unsplash.jpg',
        title: 'Título del slide 02',
        paragraph: 'Este es el parrafo de la imagen'
    },
    slide03: {
        img: '../assets/img/bg_3.jpg',
        title: 'Título del slide 03',
        paragraph: 'Este es el parrafo de la imagen'
    }
}

export const homeCarousel = () =>{
    const carousel = document.createElement('section');
    // carousel.classList.add('home-slider', 'owl-carousel')
    carousel.style.marginTop='100px'
    carousel.innerHTML=`
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

    <div class="carousel-inner">
      <div class="carousel-item active"
        style="background-image: url(${data.slide01.img});"
        >
        <div class="container">
          <div class="carousel-caption d-none d-md-block">
            <div class="mb-5">
              <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Producto Principal</a>
            </div>
            <h5>${data.slide01.title}</h5>
            <p>${data.slide01.paragraph}</p>
          </div>
        </div>
      </div>

      <div class="carousel-item"
          style="background-image: url(${data.slide02.img});"
        >
        <div class="container">
          <div class="carousel-caption d-none d-md-block">
          <div class="mb-5">
            <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Producto Secundario</a>
          </div>
            <h5>${data.slide02.title}</h5>
            <p>S${data.slide02.paragraph}</p>
          </div>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
    
    `;
    document.body.append( carousel )
}