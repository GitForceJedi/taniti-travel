import React from 'react';
import Hero from '../components/Hero';
import TwoColumnLayout from '../components/TwoColumnLayout';
import TextBlock from '../components/TextBlock';
import ContactPopup from '../components/ContactPopup';

export default function About() {
  const left = (
    <>
      <h3>About the Island</h3>
      <p>
        Taniti is a small tropical island in the Pacific with an area under 500
        square miles. The island features diverse landscapes, including both
        sandy and rocky beaches, dense rainforests, and a mountainous interior
        with a small active volcano. A protected harbor supports local trade and
        tourism. Historically, the economy relied on fishing and agriculture,
        but with a rise in tourism, Taniti has experienced rapid growth in
        hospitality, entertainment, and infrastructure. Visitors often remark on
        the island’s serene natural beauty and welcoming atmosphere.
      </p>
    </>
  );

  const right = (
    <>
      <h3>Culture & Safety</h3>
      <p>
        Taniti is home to approximately 20,000 residents, many of whom belong to
        a rich indigenous culture. While English is widely spoken among younger
        Tanitians, rural areas may have limited English fluency. Healthcare on
        the island includes one central hospital and several multilingual
        clinics. Violent crime is rare, though tourism has brought a small rise
        in pickpocketing. Overall, Taniti remains a safe and friendly
        destination.
      </p>
    </>
  );

  return (
    <>
      <Hero
        title="About Taniti"
        subtitle="Discover the island's geography, people, and essential travel details."
        image="assets/beach-top.jpg"
      />
      <TwoColumnLayout left={left} right={right} />
      <TextBlock heading="Frequently Requested Information">
        <ul>
          <li>Power outlets are 120 volts (same as in the U.S.).</li>
          <li>
            Alcohol cannot be sold or served between midnight and 9:00 a.m.
          </li>
          <li>The legal drinking age is 18 and enforcement is relaxed.</li>
          <li>
            Younger residents often speak fluent English; rural areas may not.
          </li>
          <li>There is one hospital and several multilingual clinics.</li>
          <li>Violent crime is rare, though pickpocketing is increasing.</li>
          <li>National holidays may close many restaurants and attractions.</li>
          <li>
            Taniti uses the U.S. dollar, but euros and yen are often accepted.
          </li>
          <li>Major credit cards are widely accepted.</li>
        </ul>
      </TextBlock>
      <ContactPopup />
    </>
  );
}
