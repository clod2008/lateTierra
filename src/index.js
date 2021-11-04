import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import './styles.css';

import siteBrand from './assets/img/2x/brandIso.png';
import { navBar } from './js/components/navBar';
import { homeCarousel } from './js/components/homeSlider';
import { cardDeckHome01 } from './js/components/cardDeck';

navBar(siteBrand);
homeCarousel();
cardDeckHome01();

