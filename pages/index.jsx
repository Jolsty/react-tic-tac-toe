import React from 'react';
import Head from 'next/head';
import LayoutHome from 'src/components/LayoutHome';

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Tic Tac Toe - React</title>
      </Head>
      <LayoutHome />
    </React.Fragment>
  );
}
