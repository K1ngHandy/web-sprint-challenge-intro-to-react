import React, { useState } from 'react'
import styled from 'styled-components'

const CharacterCard = styled.div`
  border: 1px solid 'lightgray';
  margin: 1.2rem;
  padding: 1.2rem;
  width: 95%;
  background-color: rgb(246, 246, 246);
  border-radius: 15px;
  display: block;

  &:hover {
    background-color: 'white';
  }

  h3 {
    color: rgb(170, 0, 0);
  }
`

function Character({ person, planets }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeWorld, setShowHomeWorld] = useState(false);

  const toggleHomeWorld = () => {
    setShowHomeWorld(!showHomeWorld);
  }

  const homeWorld = planets.find(planet => planet.id === person.homeworld)?.name || 'Unknown';

  return (
    <CharacterCard className='character-card' onClick={toggleHomeWorld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{person.name}</h3>
      {showHomeWorld && (
        <p>
          Planet: <span className='character-planet'>{homeWorld}</span>
        </p>
      )}
    </CharacterCard>
  )
}

export default Character
