import './App.css';
import React, { useState } from 'react';

import data from './data.json';

import UserCard from './components/UserCard';
import ActivityCard from './components/ActivityCard';

function App() {

  const [timeframe, setTimeframe] = useState('weekly')
  const activity = data;


  return (
    <div className="App">
      <main className="">
        <div className="container">

          <UserCard
            timeframe={timeframe}
            switchDaily={() => setTimeframe('daily')}
            switchWeekly={() => setTimeframe('weekly')}
            switchMonthly={() => setTimeframe('monthly')}
          />

          {activity.map(d => (
            <ActivityCard timeframe={timeframe} activity={d} key={d.title} />
          ))}

        </div>
      </main>
    </div>
  );
}

export default App;
