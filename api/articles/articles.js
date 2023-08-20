
 

const LatestArticles = [
  {
    id: '1',
    title: 'Any panditji number who can do hawan',
    description:'<a href="tel:1234567890">Hello</a>',
    imagepath: 'uploads/images/articles/a1.jpg',
    categories: ['featured', 'business', 'education', 'events'],
  },
  
  {
    id: '2',
    title: 'What is the alternative for MSeal here in UK',
    description: 'Sugru',
    imagepath: 'uploads/images/articles/sugru.jpg',
    categories: ['featured', 'business', 'education', 'events'],
  },
  
  {
    id: '3',
    title: 'Essential Information for Indian Travelers Abroad',
    description: `'Traveling abroad is an exciting adventure, but it requires careful planning and preparation. As an Indian traveler, there are certain important considerations you should keep in mind to ensure a smooth and enjoyable journey. Here's a list of key information to help you navigate your international travel experience:
    <br>
    <b>Passport and Visa Requirements: </b>Ensure your passport is valid for at least six months from your planned return date. Research and obtain the appropriate visa for your destination country before you travel.
    Travel Insurance: Invest in comprehensive travel insurance that covers medical emergencies, trip cancellations, baggage loss, and other unforeseen events.
    <br>
    <b>Health Precautions:</b> Check if any vaccinations are required or recommended for your destination. Carry necessary prescription medications and a copy of your prescriptions. Research local healthcare facilities and emergency contacts in advance.
    <br>
    <b>Local Laws and Customs:</b> Familiarize yourself with the laws, customs, and cultural norms of the country you're visiting. Respect local traditions and practices to ensure a positive experience.
    <br>
    <b>Currency Exchange and Banking:</b> Inform your bank about your travel plans to avoid any issues with using your debit or credit cards abroad. Familiarize yourself with the local currency and exchange rates.
    <br>
    <b>Communication:</b> Check with your mobile service provider about international roaming plans or consider getting a local SIM card at your destination. Install useful travel apps for maps, language translation, and currency conversion.
    <br>
    <b>Emergency Contacts:</b> Keep a list of important contacts, including the nearest Indian embassy or consulate, local emergency services, and the contact information of someone back home.
    <br>
    <b>Safety and Security:</b> Stay informed about the safety situation in your destination. Register with the Indian embassy's registration program if available. Stay vigilant and avoid risky areas, especially at night.
    <br>
    <b>Electrical Adapters and Voltage: </b>Check the electrical socket type and voltage of your destination country. Carry necessary adapters and voltage converters for your electronic devices.
    
    <br>
    <b>Cultural Sensitivity:</b> Respect local customs and practices. Dress appropriately, especially when visiting religious sites. Research cultural norms to avoid inadvertently causing offense.
    <br>
    Language Considerations:</b> Learn a few basic phrases in the local language. This can help you navigate and communicate more effectively with locals.
    <br>
    <b>Local Transportation:</b> Research the transportation options available in your destination. Familiarize yourself with local public transportation, taxi fares, and any transportation apps that might be useful.
    <br>
    <b>Emergency Situations:</b> Understand the local emergency number and the protocol for contacting authorities in case of emergencies.
    Weather and Packing:</b> Pack according to the weather conditions of your destination. Don't forget essentials like appropriate clothing, comfortable shoes, adapters, chargers, and any specific items you might need.
    <br>
    <b>Covid-19 Guidelines:</b> Check the latest Covid-19 entry requirements and guidelines for your destination, including vaccination, testing, quarantine, and mask-wearing regulations.
    '`,
    imagepath: 'uploads/images/articles/a3.jpg',
    categories: ['featured', 'business', 'education', 'events'],
  },
  // Add more articles here if needed
];

// Generate slugs and assign them to the articles
LatestArticles.forEach(article => {
  article.slug = `${article.title.toLowerCase().replace(/\s+/g, '-')}`;
});

export default LatestArticles;
