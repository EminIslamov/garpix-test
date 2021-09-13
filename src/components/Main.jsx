import React from 'react';
import PartnersCategories from './PartnersCategories';
import PartnersAndOffersTitle from './PartnersAndOffersTitle';
import Offers from './Offers';
import Sales from './Sales';

function Main() {
  return (
    <main>
      <PartnersAndOffersTitle />
      <PartnersCategories />
      <Offers />
      <Sales />
    </main>
  );
}

export default Main;