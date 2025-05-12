import React from 'react';
import CardGrid from '../components/CardGrid';
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';
import ImageText from '../components/ImageText';
import SplitCard from '../components/SplitCard';

export default function Lodging() {
  const cards = [
    {
      image: 'assets/contact.jpg',
      title: 'Contact Us For Logding Accommodations',
      text: 'Contact us for more information about lodging options in Taniti. We can help you find the perfect place to stay.',
      cta: { label: 'Contact Us', url: '/contact-popup', popup: true },
    },
  ];

  const splitCards = [
    {
      image: 'assets/lodging-pool2.jpg',
      title: 'Four-Star Resort',
      text: 'This premier resort offers beachside luxury, gourmet dining, spa services, and breathtaking views \u2014 perfect for travelers seeking upscale comfort.',
      cta: { label: 'Book Now', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/lodging-house3.avif',
      title: 'Charming Family Hotels',
      text: 'Family-run hotels offer warm hospitality, comfortable rooms, and easy access to Taniti\u2019s city center and beaches.',
      cta: { label: 'Book Now', url: 'https://www.tripadvisor.com/' },
      reverse: true,
    },
    {
      image: 'assets/lodging-house4.jpg',
      title: 'Bed and Breakfasts',
      text: 'Cozy B&Bs provide home-style service, daily breakfast, and are ideal for couples or solo travelers looking for a local experience.',
      cta: { label: 'Book Now', url: 'https://www.tripadvisor.com/' },
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
          Taniti has a wide variety of lodging that ranges from an inexpensive
          hostel to one large, four-star resort. There are many small,
          family-owned hotels and a growing number of bed and breakfasts. All
          types of lodging are strictly regulated and regularly inspected by the
          Tanitian government.
        </p>
      </TextBlock>
      <SplitCard items={splitCards} />
      <CardGrid items={cards} />
    </>
  );
}
