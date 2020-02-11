import React from 'react'
import Head from 'next/head'
import Normalize from 'react-normalize';
import Nav from '../components/nav'


const PIR = () => (
  <div>
    <Normalize />
    <Head>
      <title>The Price is Right... Right?</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div>
      <h1>someshithere</h1>
    </div>
  </div>
)

export default PIR