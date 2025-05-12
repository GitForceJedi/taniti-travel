import React from 'react';
import CardGrid from '../components/CardGrid';
import Hero from '../components/Hero';
import TwoColumnLayout from '../components/TwoColumnLayout';
import TextBlock from '../components/TextBlock';
import SplitCard from '../components/SplitCard';

export default function Transportation() {
  const left = (
    <>
      <h3>Arriving in Taniti</h3>
      <p>
        Almost all visitors arrive to Taniti by air, though some arrive on a
        small cruise ship that docks in Yellow Leaf Bay for one night per week.
        Taniti is served by a small airport that can accommodate small jets and
        propeller planes. Taniti is in the process of expanding the airport so
        larger jets will be able to land on the island within the next few
        years.
      </p>
    </>
  );

  const right = (
    <>
      <h3>Getting Around</h3>
      <p>
        Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day.
        Private buses serve the rest of the island. Taxis are available in
        Taniti City, and rental cars can be rented from a local rental agency
        near the airport. Bikes and helmets are available to rent from several
        vendors (helmets are required by law). Taniti City is fairly flat and
        very walkable. Many tourists stay in the area surrounding Merriton
        Landing: this area is easy to explore on foot.
      </p>
    </>
  );

  const cards = [
    {
      image: 'assets/transport-bus.jpg',
      title: 'Public & Private Buses',
      text: 'City buses operate daily from 5am to 11pm, while private buses serve outlying areas. Affordable and reliable for travelers.',
      cta: { label: 'Book Buses', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/taxi.jpg',
      title: 'Taxi Services & Car Rentals',
      text: 'Taxis are available throughout Taniti City. Local rental agencies near the airport offer cars for self-guided island tours.',
      cta: { label: 'Book Cars', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/sunset-bike.jpg',
      title: 'Bikes & Walking',
      text: 'Explore Taniti City on foot or rent bikes with helmets. The city’s flat landscape and scenic paths make biking ideal.',
      cta: { label: 'Book Bikes', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const cards2 = [
    {
      image: 'assets/plane-runway.jpg',
      title: 'Flights',
      text: 'Book your flight to Taniti City. The airport supports small jets and propeller planes, with expansion plans for larger jets.',
      cta: { label: 'Book Flights', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/cruise-ship.avif',
      title: 'Cruises',
      text: 'Book a cruise to Taniti. A small cruise ship docks weekly at Yellow Leaf Bay, offering a unique arrival experience.',
      cta: { label: 'Book Cruises', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/contact.jpg',
      title: 'Need Assistance?',
      text: 'Our team is here to help you with transportation options and bookings. Contact us for personalized assistance.',
      cta: { label: 'Contact Us', url: '/contact-popup', popup: true },
    },
  ];

  const splitCards = [
    {
      image: 'assets/travel-sea-plane.jpg',
      title: 'Arriving in Taniti',
      text: 'Most visitors arrive by air. The airport currently supports small jets and propeller planes, with expansion plans in place for larger jets. A small cruise ship docks weekly at Yellow Leaf Bay.',
      cta: { label: 'Book Now', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/cruise-ship.avif',
      title: 'Getting Around',
      text: 'Public buses run 5 a.m. to 11 p.m. in Taniti City. Taxis, bikes (helmets required), and rental cars are also available. The city is flat and walkable.',
      cta: { label: 'Book Now', url: 'https://www.tripadvisor.com/' },
      reverse: true,
    },
  ];

  return (
    <>
      <Hero
        title="Getting to and Around Taniti"
        subtitle="Transportation options to explore the island with ease."
        image="assets/travel-plane.jpg"
      />

      {/* First Grid: Overview or Highlighted Options */}
      <CardGrid items={cards} />

      <SplitCard items={splitCards} />
      {/* Second Grid: Could be same or new cards */}
      <CardGrid items={cards2} />
    </>
  );
}
