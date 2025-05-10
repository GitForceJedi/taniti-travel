import React from 'react';
import CardGrid from '../components/CardGrid';
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';

export default function Dining() {
  const grid1 = [
    {
      image: 'assets/seafood1.avif',
      title: 'Coral Catch Restaurant',
      text: 'Specializes in grilled mahi-mahi and reef snapper, served with spiced rice and tropical fruits.',
      cta: { label: 'View Menu', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/seafood2.webp',
      title: 'Lagoon Grill',
      text: 'Beachfront dining with coconut-glazed fish and ocean views for a romantic experience.',
      cta: { label: 'Make a Reservation', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const grid2 = [
    {
      image: 'assets/seafood3.webp',
      title: 'Island Bounty',
      text: 'Farm-to-table seafood with signature ginger-soy glaze and pickled island vegetables.',
      cta: { label: 'Explore Dishes', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/seafood4.jpg',
      title: 'Taniti Tides',
      text: 'Offers grilled octopus, shrimp skewers, and a rotating daily catch.',
      cta: { label: 'Order Now', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const grid3 = [
    {
      image: 'assets/seafood5.jpg',
      title: 'Bayview Bites',
      text: 'Known for spicy fish curry bowls and lime-marinated swordfish.',
      cta: { label: 'Visit Bayview', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/american1.jpg',
      title: 'Harbor Diner',
      text: 'Classic American fare with all-day breakfast, burgers, and fries.',
      cta: { label: 'View Menu', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const grid4 = [
    {
      image: 'assets/american2.jpg',
      title: 'Island Grillhouse',
      text: 'Famous for its wood-fired pizzas, sandwiches, and wings.',
      cta: { label: 'Order Takeout', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/american3.jpg',
      title: 'Sunset Eatery',
      text: 'Offers hearty comfort food with island-inspired sides and cocktails.',
      cta: { label: 'Make Reservation', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const grid5 = [
    {
      image: 'assets/panasian1.jpg',
      title: 'Eastern Breeze',
      text: 'Pan-Asian fusion with sushi rolls, lemongrass noodle bowls, and Thai-style curries.',
      cta: { label: 'Book Table', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/panasian2.jpg',
      title: 'Lotus Garden',
      text: 'Combines Japanese and Vietnamese dishes with island-grown ingredients.',
      cta: { label: 'Explore Lotus', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const grid6 = [
    {
      image: 'assets/supermarket1.jpg',
      title: 'Taniti Supermart',
      text: 'Largest grocery store on the island with fresh produce and imported goods.',
      cta: { label: 'Visit Store', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/supermarket2.jpg',
      title: 'Bayfront Market',
      text: 'Popular for its seafood section and prepared meals.',
      cta: { label: 'See Hours', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const grid7 = [
    {
      image: 'assets/grocery1.jpg',
      title: 'MiniGrocer Downtown',
      text: 'Convenient location for basic groceries and local snacks.',
      cta: { label: 'Get Directions', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/grocery2.jpg',
      title: 'Palm Mart',
      text: 'Compact store with bakery items and quick essentials.',
      cta: { label: 'Shop Now', url: 'https://www.tripadvisor.com/' },
    },
  ];

  const grid8 = [
    {
      image: 'assets/convenience1.jpg',
      title: '24/7 QuickMart',
      text: 'Always open for drinks, snacks, and last-minute essentials.',
      cta: { label: 'Visit QuickMart', url: 'https://www.tripadvisor.com/' },
    },
    {
      image: 'assets/contact.jpg',
      title: 'Need Help Finding a Spot?',
      text: 'Reach out to our tourism staff and we’ll help you pick the perfect place.',
      cta: { label: 'Contact Us', url: '/contact-popup', popup: true },
    },
  ];

  return (
    <>
      <Hero
        title="Dining in Taniti"
        subtitle="Sample fresh seafood, American meals, and Pan-Asian dishes."
        image="assets/dining-blue-chair.jpg"
      />
      <TextBlock heading="Dining Options">
        <p>
          Taniti offers a variety of dining options, from fresh seafood to
          American classics and Pan-Asian cuisine. Enjoy local flavors at
          beachfront restaurants or cozy cafes.
        </p>
      </TextBlock>
      <CardGrid items={grid1} />
      <CardGrid items={grid2} />
      <CardGrid items={grid3} />
      <CardGrid items={grid4} />
      <CardGrid items={grid5} />
      <CardGrid items={grid6} />
      <CardGrid items={grid7} />
      <CardGrid items={grid8} />
    </>
  );
}
