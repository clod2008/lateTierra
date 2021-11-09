import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';







import './styles.css';

import siteBrand from './assets/img/2x/brandIso.png';
import { navBar } from './js/components/navBar';
import { homeCarousel } from './js/components/homeSlider';
import { cardDeckHome01 } from './js/components/cardDeck';
import { footer } from './js/components/footer';

import { gMap } from './js/components/map';


navBar(siteBrand);
homeCarousel();
cardDeckHome01();
gMap();

// google.maps.event.addDomListener(window, 'load', init);


footer();

const navHi = document.getElementById('navBarHome01')
console.log(navHi)
const marginTo = navHi.clientHeight
console.log(marginTo)







