import React from 'react';
import Hero from '../components/Hero';
import CardGrid from '../components/CardGrid';
import TextBlock from '../components/TextBlock';

export default function Entertainment() {
  const grid1 = [
    {
      image: 'assets/beach-relaxation.jpeg',
      title: 'Beach Relaxation',
      text: 'Unwind on Taniti’s beautiful white sand beaches and swim in its calm, turquoise waters.',
      cta: { label: 'Explore Beaches', url: '/entertainment' },
    },
    {
      image: 'assets/rainforest-hikes.jpg',
      title: 'Rainforest Hikes',
      text: 'Take guided hikes through lush rainforests and explore diverse tropical flora and fauna.',
      cta: { label: 'Start Hiking', url: '/entertainment' },
    },
    {
      image: 'assets/volcano-tours.jpg',
      title: 'Volcano Tours',
      text: 'Trek to the summit of Taniti’s volcano and enjoy sweeping island views from the rim.',
      cta: { label: 'View Tours', url: '/entertainment' },
    },
  ];

  const grid2 = [
    {
      image: 'assets/history-museum.jpg',
      title: 'History Museum',
      text: 'Learn about Taniti’s cultural heritage through interactive exhibits and local artifacts.',
      cta: { label: 'Visit Museum', url: '/culture' },
    },
    {
      image: 'assets/fishing-tours.jpg',
      title: 'Chartered Fishing Tours',
      text: 'Enjoy deep-sea fishing experiences with seasoned local captains around the island.',
      cta: { label: 'Book Fishing', url: '/entertainment' },
    },
    {
      image: 'assets/snorkling.jpg',
      title: 'Snorkeling Excursions',
      text: 'Swim alongside colorful reef fish and coral formations in Taniti’s clear coastal waters.',
      cta: { label: 'Go Snorkeling', url: '/entertainment' },
    },
  ];

  const grid3 = [
    {
      image: 'assets/zipline.jpg',
      title: 'Rainforest Zip-Lining',
      text: 'Soar through the jungle canopy on exhilarating zip-line routes deep in the rainforest.',
      cta: { label: 'Zip-Line Now', url: '/entertainment' },
    },
    {
      image: 'assets/pubs.jpg',
      title: 'Pubs & Microbrewery',
      text: 'Sample local beers and unwind in laid-back pubs, including a popular waterfront microbrewery.',
      cta: { label: 'Find Pubs', url: '/entertainment' },
    },
    {
      image: 'assets/dance-club.jpg',
      title: 'Dance Club',
      text: 'Experience Taniti’s nightlife with DJs and dancing in the Merriton Landing entertainment district.',
      cta: { label: 'Join the Party', url: '/entertainment' },
    },
  ];

  const grid4 = [
    {
      image: 'assets/cinema.jpg',
      title: 'Cinema Experience',
      text: 'Catch the latest films in an air-conditioned theater equipped with modern screens and sound.',
      cta: { label: 'See What’s Playing', url: '/entertainment' },
    },
    {
      image: 'assets/helicopter.jpg',
      title: 'Helicopter Rides',
      text: 'Get a bird’s-eye view of the island on scenic helicopter tours over rainforests and beaches.',
      cta: { label: 'Book Flight', url: '/entertainment' },
    },
    {
      image: 'assets/arcade.jpg',
      title: 'Family Arcade',
      text: 'Enjoy classic games and modern machines in a fun-filled arcade for all ages.',
      cta: { label: 'Play Games', url: '/entertainment' },
    },
  ];

  const grid5 = [
    {
      image: 'assets/art-gallery.jpg',
      title: 'Art Galleries',
      text: 'Browse galleries featuring local artwork, handcrafted jewelry, and island-inspired creations.',
      cta: { label: 'Browse Art', url: '/culture' },
    },
    {
      image: 'assets/bowling.jpg',
      title: 'Bowling Alley',
      text: 'Challenge friends and family at a modern 10-lane bowling alley in Merriton Landing.',
      cta: { label: 'Go Bowling', url: '/entertainment' },
    },
    {
      image: 'assets/golf.jpg',
      title: 'Golf Course (Coming Soon)',
      text: 'A 9-hole golf course is expected to open next year in the popular Merriton Landing area.',
      cta: { label: 'Learn More', url: '/entertainment' },
    },
  ];

  return (
    <>
      <Hero
        title="Things to Do in Taniti"
        subtitle="From beaches and zip-lining to nightlife and museums, there’s something for everyone."
        image="assets/sand-bike.jpg"
      />
      <CardGrid items={grid1} />
      <CardGrid items={grid2} />
      <CardGrid items={grid3} />
      <CardGrid items={grid4} />
      <CardGrid items={grid5} />
      <TextBlock heading="Explore Merriton Landing">
        <p>
          Many of Taniti’s most exciting activities are located in Merriton
          Landing, a growing hub of entertainment along Yellow Leaf Bay.
        </p>
      </TextBlock>
    </>
  );
}
