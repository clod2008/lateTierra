import '../../css/footer.css'

import { navBarLinks } from '../navBarLinks';

const {home, about, service, contact} = navBarLinks

export const footer = (brand) =>{
    const myDate = new Date().getFullYear()
    const foot = document.createElement('footer');
    foot.classList.add('ftco-footer', 'ftco-bg-dark', 'ftco-section' )
    foot.innerHTML=`
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-5">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2"><img id="footerBrand" src="${brand}" alt=""><span class="brand01"> Late </span><span class="brand02">Tierra</span></h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft ">
              <li class="ftco-animate"><a href="#"><div class="icon"><i class="fab fa-instagram"></i></div></a></li>
              <li class="ftco-animate"><a href="#"><div class="icon"><i class="fab fa-linkedin"></i></div></a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Quick Links</h2>
              <ul class="list-unstyled">
                <li><a href="${home.url}" class="py-2 d-block">${home.linkText}</a></li>
                <li><a href="${about.url}" class="py-2 d-block">${about.linkText}</a></li>
                <li><a href="${service.url}" class="py-2 d-block">${service.linkText}</a></li>
                <li><a href="${contact.url}" class="py-2 d-block">${contact.linkText}</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Office</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
            Copyright &copy; ${myDate} All rights reserved | Powered by <a href="https://apsis.com.ar" target="_blank"><img class="logoApsisFooter" src="../../assets/img/SVG/Logo APSIS Gris.svg" alt=""></a>
            </p>
          </div>
        </div>
  
    
    `;
    document.body.append( foot )
}

