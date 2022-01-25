import React from 'react';
import { nanoid } from 'nanoid';
// Recomendação de uso para substituir o index no map. Créditos: Asafe Dainez (Turma XP - Tribo B)
// Ref: https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function rendersMissionsList() {
  return missions.map((mission) => (<MissionCard
    key={ nanoid() }
    name={ mission.name }
    year={ mission.year }
    country={ mission.country }
    destination={ mission.destination }
  />));
}

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {rendersMissionsList()}
      </div>
    );
  }
}

export default Missions;
