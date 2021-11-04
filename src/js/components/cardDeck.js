import '../../css/cardDesck.css'

export const cardDeckHome01 = () =>{
    const deck = document.createElement('section');
    deck.innerHTML=`

    <div class="container">
    <div class="card-deck mt-3 mb-3">
        <div class="card text-center " style="width: 18rem;">
        <div class="iconCard">
            <i class="fas fa-tractor fa-3x"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        <div class="card text-center " style="width: 18rem;">
        <div class="iconCard">
            <i class="fas fa-carrot fa-3x"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        <div class="card text-center " style="width: 18rem;">
        <div class="iconCard">
            <i class="fas fa-seedling fa-3x"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div> 
    </div>
    
    `;
    document.body.append( deck )
}

/*
  <section>
  </section>
*/