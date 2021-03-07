document.addEventListener('DOMContentLoaded', ()=> {
    const cardArray=[
        {
            name: 'card-1',
            img: 'images/card-1.jpg'
        },
        {
            name: 'card-1',
            img: 'images/card-1.jpg'
        },
        {
            name: 'card-2',
            img: 'images/card-2.jpg'
        },
        {
            name: 'card-2',
            img: 'images/card-2.jpg'
        },
        {
            name: 'card-3',
            img: 'images/card-3.jpg'
        },
        {
            name: 'card-3',
            img: 'images/card-3.jpg'
        },
        {
            name: 'card-4',
            img: 'images/card-4.jpg'
        },
        {
            name: 'card-4',
            img: 'images/card-4.jpg'
        },
        {
            name: 'card-5',
            img: 'images/card-5.jpg'
        },
        {
            name: 'card-5',
            img: 'images/card-5.jpg'
        },
        {
            name: 'card-6',
            img: 'images/card-6.jpg'
        },
        {
            name: 'card-6',
            img: 'images/card-6.jpg'
        }
    ];
    cardArray.sort(()=> 0.5 - Math.random());

   const grid= document.querySelector('.grid') ;
   const result=document.querySelector('#result');
   let cardsChosen=[];
   let cardsChosenId=[];
   let cardsWon=[];

   function checkForMatch(){
    let cards= document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
        // alert("You found a match");
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
        cardsWon.push(cardsChosen);
    }
    else{
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        // alert("try again");
    }
    cardsChosen=[];
    cardsChosenId=[];
    result.textContent=cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        alert("You found all matches");
        result.textContent="Congrats!, You found all matches";
    }
}

   function flipCard(){
    let cardId= this.getAttribute("card-id");
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardArray[cardId].img);
      if(cardsChosen.length === 2){
          setTimeout(checkForMatch, 300);
      }
  }

   function createBoard(){
       for(let i=0;i<cardArray.length;i++){
           let card=document.createElement('img');
           card.setAttribute("src" ,"images/blank.png");
           card.setAttribute("card-id", i);
            card.addEventListener("click", flipCard);
           grid.appendChild(card);
       }
   }

   
    

createBoard();
});