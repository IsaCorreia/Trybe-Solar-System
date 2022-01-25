import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

function rendersPlanetsList() {
  return Planets.map((planet, i) => (<PlanetCard
    key={ i }
    planetName={ planet.name }
    planetImage={ planet.image }
  />));
}

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {rendersPlanetsList()}
      </div>
    );
  }
}

export default SolarSystem;
