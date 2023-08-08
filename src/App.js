import React, { useEffect, useState } from "react";

function App() {
  // const a = [11, 12, 13, 14, 15, 16];

  // const b = [17, 18, 19, 20, 21, 22];
 

  // const [card, setCard] = useState(a);
  // const [card1, setCard1] = useState(b);

  // const [flip, setFlip] = useState(false);

  // const handleclicked = () => {
  //   setFlip(true);
  //   // setFlip(card(i))
  // };

  // const handleclicked1 = () => {
  //   setFlip(false);
  // };

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const numbers = Array.from({ length: 8 }, (_, index) => {
        const randomNumber = Math.floor(Math.random() * 90 + 10);
        return randomNumber;
      });
      const newCards = [...numbers, ...numbers].sort(() => Math.random() - 0.5);
      setCards(newCards);
    };

    generateRandomNumbers();
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCardIndex, secondCardIndex] = newFlippedCards;
      if (cards[firstCardIndex] === cards[secondCardIndex]) {
        setMatchedCards([...matchedCards, firstCardIndex, secondCardIndex]);
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) ? 'flipped' : ''} ${matchedCards.includes(index) ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || matchedCards.includes(index) ? card : ''}
          </div>
        ))}
      </div>
    </div>
    // <div className="app1 flex">
    //   {card?.map((v, i) => {
    //     return (
    //       <>
    //         <div className="flex" key={i}>
    //           {flip === false ? (
    //             <div
    //               className="cardbox"
    //               onClick={(index) =>
    //                 handleclicked(i === index ? setFlip(true) : "")
    //               }
    //             ></div>
    //           ) : (
    //             <div
    //               className="cardbox1"
    //               onClick={(i) => handleclicked1(i)}
    //             >
    //               {a[i]}
    //             </div>
    //           )}
    //         </div>
    //       </>
    //     );
    //   })}
    //   {card1?.map((v, i) => {
    //     return (
    //       <>
    //         <div className="flex" key={i}>
    //           {flip === false ? (
    //             <div
    //               className="cardbox"
    //               onClick={(i) => handleclicked(i)}
    //             ></div>
    //           ) : (
    //             <div
    //               className="cardbox1"
    //               onClick={(i) => handleclicked1(flip[i])}
    //             >
    //               {b[i]}
    //             </div>
    //           )}
    //         </div>
    //       </>
    //     );
    //   })}
    // </div>
  );
}

export default App;
