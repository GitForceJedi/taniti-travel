import React from 'react';
import SlideshowHero from '../components/SlideshowHero';
import TextBlock from '../components/TextBlock';
import CardGrid from '../components/CardGrid';
import SplitCard from '../components/SplitCard';

export default function Home() {
  const slides = [
    {
      image: 'assets/leaf.jpg',
      heading: 'Welcome to Taniti',
      text: 'A breathtaking island destination offering rich culture, thrilling adventure, and ultimate relaxation.',
    },
    {
      image: 'assets/leaf.jpg',
      heading: 'Why Visit Taniti',
      text: "You can't afford to miss out on...",
    },
    {
      image: 'assets/beach-top.jpg',
      heading: 'Breathtaking Beaches',
      text: "Taniti's beaches are perfect for sunbathing, swimming, and snorkeling.",
    },
    {
      image: 'assets/tree.jpg',
      heading: 'Exotic Locations',
      text: 'Explore lush rainforests, volcanic landscapes, and stunning coastlines.',
    },
    {
      image: 'assets/gen-bird.jpg',
      heading: 'Encounter Wildlife',
      text: 'From rare birds to colorful marine life, experience the island’s diverse ecosystem firsthand.',
    },
    {
      image: 'assets/dining-chef-plate.jpg',
      heading: 'Island Cuisine',
      text: 'Taniti boasts a variety of local restaurants featuring fresh seafood, tropical fruit, and traditional dishes.',
    },
    {
      image: 'assets/beach-sunset.jpg',
      heading: 'Unforgettable Views',
      text: 'From sunrise to sunset, Taniti’s beaches and landscapes offer stunning views at every turn.',
    },
    {
      image: 'assets/bungalo.jpg',
      heading: 'Rest & Recharge',
      text: 'Whether you choose a beachside bungalow or a luxury resort, comfort is always close by.',
    },
    {
      image: 'assets/zipline.jpg',
      heading: 'Thrilling Adventures',
      text: 'Zip-line, hike volcanic trails, and explore rainforests full of natural beauty and excitement.',
    },
    {
      image: 'assets/ent-local.jpg',
      heading: 'Cultural Experiences',
      text: 'Participate in local festivals, music, and art that reflect Taniti’s rich island heritage.',
    },
  ];
  const cards = [
    {
      image: 'assets/gen-bird.jpg',
      title: 'Experience Nature & Wildlife',
      text: 'Taniti is home to unique flora and fauna, including rare birds and tropical plants.',
      cta: { label: 'Explore Nature', url: '/taniti-travel/entertainment' },
    },
    {
      image: 'assets/plane-runway.jpg',
      title: 'Getting To Taniti',
      text: 'Book your flight or cruise to Taniti. The airport supports small jets and propeller planes, with expansion plans for larger jets.',
      cta: { label: 'Book Now', url: '/taniti-travel/transportation' },
    },
    {
      image: 'assets/contact.jpg',
      title: 'Plan Your Stay',
      text: 'Need help planning your trip? Our travel advisors are here to assist you.',
      cta: { label: 'Contact Us', url: '/contact-popup', popup: true },
    },
  ];

  const splitCards = [
    {
      image: 'assets/dining-chef-plate.jpg',
      title: 'Taste Local Cuisine',
      text: 'Sample fresh seafood and fusion cuisine from Taniti’s beachfront restaurants.',
      cta: { label: 'View Dining', url: '/taniti-travel/dining' },
    },
    {
      image: 'assets/zipline.jpg',
      title: 'Adventure Awaits',
      text: 'Go zip-lining, hiking, and snorkeling in our breathtaking tropical landscape.',
      cta: { label: 'Explore Fun', url: '/taniti-travel/entertainment' },
      reverse: true,
    },
    {
      image: 'assets/lodging-house3.avif',
      title: 'Stay in Style',
      text: 'Whether you prefer luxury resorts or cozy cottages, Taniti has lodging for everyone.',
      cta: { label: 'Book Now', url: '/taniti-travel/lodging' },
    },
  ];

  return (
    <>
      <SlideshowHero slides={slides} />
      <TextBlock heading="Why Visit Taniti?">
        <p>
          Taniti is a small, tropical island in the Pacific. While the island
          has an area of less than 500 square miles, the terrain is varied and
          includes both sandy and rocky beaches, a small but safe harbor, lush
          tropical rainforests, and a mountainous interior that includes a
          small, active volcano. Taniti has an indigenous population of about
          20,000. Until a recent increase in tourism, most the Tanitian economy
          was dominated by fishing or agriculture.
        </p>
      </TextBlock>
      <SplitCard items={splitCards} />
      <CardGrid items={cards} />
    </>
  );
}
