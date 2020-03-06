import React, { useState } from 'react';

import AppContextObj from 'src/components/AppContext';

/* eslint-disable-next-line react/prop-types */
export default function MyApp({ Component, pageProps }) {
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(0); // 0: no winner

  return (
    <AppContextObj
      appData={{ turnObj: { turn, setTurn }, winnerObj: { winner, setWinner } }}
    >
      <Component {...pageProps} />
    </AppContextObj>
  );
}
