import React from 'react';
import CardGrid from '../components/CardGrid';
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';
import ImageText from '../components/ImageText';
import SplitCard from '../components/SplitCard';

export default function Lodging() {
  const cards = [
    {
      image: 'assets/lodging1.jpg',
      title: 'Four-Star Resort',
      text: 'This premier resort offers beachside luxury, gourmet dining, spa services, and breathtaking views \u2014 perfect for travelers seeking upscale comfort.',
    },
    {
      image: 'assets/hero.jpg',
      title: 'Charming Family Hotels',
      text: 'Family-run hotels offer warm hospitality, comfortable rooms, and easy access to Taniti\u2019s city center and beaches.',
    },
    {
      image: 'assets/transport1.jpg',
      title: 'Bed and Breakfasts',
      text: 'Cozy B&Bs provide home-style service, daily breakfast, and are ideal for couples or solo travelers looking for a local experience.',
    },
  ];

  const splitCards = [
    {
      image: 'assets/lodging-pool2.jpg',
      title: 'Four-Star Resort',
      text: 'This premier resort offers beachside luxury, gourmet dining, spa services, and breathtaking views \u2014 perfect for travelers seeking upscale comfort.',
      cta: { label: 'Book Now', url: '' },
    },
    {
      image: 'assets/lodging-house3.avif',
      title: 'Charming Family Hotels',
      text: 'Family-run hotels offer warm hospitality, comfortable rooms, and easy access to Taniti\u2019s city center and beaches.',
      cta: { label: 'Book Now', url: '' },
      reverse: true,
    },
    {
      image: 'assets/lodging-house4.jpg',
      title: 'Bed and Breakfasts',
      text: 'Cozy B&Bs provide home-style service, daily breakfast, and are ideal for couples or solo travelers looking for a local experience.',
      cta: { label: 'Book Now', url: '' },
    },
  ];
  return (
    <>
      <Hero
        title="Where to Stay in Taniti"
        subtitle="Find the perfect place to rest on your island adventure."
        image="assets/dining-island.jpg"
      />
      <TextBlock heading="Lodging Options">
        <p>
          Accommodations range from hostels to a luxurious four-star resort.
          Many family-run hotels and B&Bs are available too.
        </p>
      </TextBlock>
      <SplitCard items={splitCards} />
    </>
  );
}
