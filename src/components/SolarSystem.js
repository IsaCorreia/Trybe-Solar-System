import React from 'react';
import { nanoid } from 'nanoid';
// Recomendação de uso para substituir o index no map. Créditos: Asafe Dainez (Turma XP - Tribo B)
// Ref: https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

function rendersPlanetsList() {
  return Planets.map((planet) => (<PlanetCard
    key={ nanoid() }
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
