import React from 'react';
import Head from 'next/head';
import LayoutHome from '../components/LayoutHome';

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Tic Tac Toe - Jolsty</title>
      </Head>
      <LayoutHome />
    </React.Fragment>
  );
}
