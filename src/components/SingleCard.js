import PropTypes from 'prop-types'

import './SingleCard.css'

export default function SingleCard({card, imgSource, handleChoice, flipped, disabled}) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    };
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={imgSource} alt="card front" />
        <img 
          className="back" 
          src="/img/cover.png" 
          onClick={handleClick} 
          alt="cover" />
      </div>
    </div>
  )
}


