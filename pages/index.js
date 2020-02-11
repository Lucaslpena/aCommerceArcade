import React from 'react'
import Head from 'next/head'
import Normalize from 'react-normalize';
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Normalize />
    <Head>
      <title>The Price is Right... Right?</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />




  </div>
)

export default Home
