import React from 'react';
const api = {
  key: 'd9a4c44fd809d07b0bf141607cfb8d23',
  base: 'http://api.openweathermap.org/data/2.5'
}

function App() {

  const dateBuilder = (paramD) => {
    let months = [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember'
    ];
    let days = [
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag'
    ];

    let day = days[paramD.getDay()];
    let date = paramD.getDate();
    let month = months[paramD.getMonth()];
    let year = paramD.getFullYear();

    /* return '${day} ${date} ${month} ${year}'; */
    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="app">
      {/* Pictures from pixabay */}
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
          />
        </div>
        <div className='location-box'>
          <div className='location'>Berlin</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
