import { Loader } from '@googlemaps/js-api-loader'; // npm i @googlemaps/js-api-loader
import '../../css/map.css'

const gApiKey = 'AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false'

export const gMap = () =>{
    const googleMap = document.createElement('div');
    googleMap.setAttribute("id", "map");
    // console.log(googleMap);

    const loader = new Loader({
        apiKey: gApiKey,
        version: "weekly",
        libraries: ["places"]
      });
      
      const mapOptions = {
        center: {
          lat: -33.862077,
          lng: -60.671104
        },
        zoom: 8
      };
      
      loader
        .load()
        .then((google) => {
          new google.maps.Map(document.getElementById("map"), mapOptions);
        })
        .catch(e => {
          // do something
        });
    

    document.body.append( googleMap )
    
}