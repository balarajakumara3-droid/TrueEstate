import { Property, Agent, ChatMessage } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Coastal Retreat',
    price: '$850,000',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    beds: 4,
    baths: 3,
    sqft: 2400,
    rating: 4.8,
    type: 'House',
    description: 'Experience the ultimate in coastal living with this stunning modern retreat. Featuring panoramic ocean views, an open-concept floor plan flooded with natural light, and a chef\'s kitchen equipped with state-of-the-art Viking appliances. The expansive deck is perfect for sunset entertaining.',
    amenities: ['Ocean View', 'Smart Home System', 'Wine Cellar', 'Infinity Pool', 'Private Beach Access']
  },
  {
    id: '2',
    title: 'Urban Industrial Loft',
    price: '$550,000',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000',
    beds: 2,
    baths: 2,
    sqft: 1100,
    rating: 4.5,
    type: 'Loft',
    description: 'Located in the heart of the historic district, this authentic industrial loft features soaring 16-foot ceilings, exposed brick walls, and massive timber beams. The open layout offers flexible living spaces, while the rooftop deck provides breathtaking city skyline views.',
    amenities: ['Rooftop Deck', 'Fitness Center', 'Concierge', 'Pet Friendly', 'Parking Included']
  },
  {
    id: '3',
    title: 'Grand Mediterranean Villa',
    price: '$1,200,000',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1600596542815-e32890533bf2?auto=format&fit=crop&q=80&w=1000',
    beds: 5,
    baths: 4,
    sqft: 3500,
    rating: 4.9,
    type: 'Villa',
    description: 'A masterpiece of Mediterranean architecture, this luxurious villa boasts lush tropical gardens, a resort-style pool, and exquisite interior finishes. The master suite is a private sanctuary with a spa-inspired bath and dual walk-in closets.',
    amenities: ['Resort Pool', 'Home Theater', 'Gourmet Kitchen', 'Guest House', '3-Car Garage']
  },
  {
    id: '4',
    title: 'Skyline Penthouse Suite',
    price: '$2,450,000',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1000',
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    rating: 5.0,
    type: 'Penthouse',
    description: 'Perched atop one of the city\'s most prestigious buildings, this penthouse offers 360-degree views of the Manhattan skyline. Features include floor-to-ceiling glass walls, a wraparound terrace, and bespoke Italian cabinetry throughout.',
    amenities: ['Private Elevator', '24/7 Doorman', 'Spa & Sauna', 'Wraparound Terrace', 'Helipad Access']
  },
  {
    id: '5',
    title: 'Charming English Cottage',
    price: '$425,000',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&q=80&w=1000',
    beds: 3,
    baths: 2,
    sqft: 1600,
    rating: 4.7,
    type: 'Cottage',
    description: 'Straight out of a fairytale, this enchanting cottage features a stone facade, a blooming English garden, and a cozy interior with a wood-burning fireplace. Recently renovated with modern conveniences while retaining its original 1920s charm.',
    amenities: ['Garden', 'Fireplace', 'Hardwood Floors', 'Renovated Kitchen', 'Quiet Neighborhood']
  },
  {
    id: '6',
    title: 'Modern Minimalist Studio',
    price: '$380,000',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=1000',
    beds: 1,
    baths: 1,
    sqft: 850,
    rating: 4.6,
    type: 'Apartment',
    description: 'Designed for the modern professional, this sleek studio offers smart space solutions and high-end finishes. Located steps away from the tech corridor and the best live music venues in the city.',
    amenities: ['Smart Technology', 'Co-working Space', 'Pool', 'Dog Park', 'Electric Car Charging']
  },
  {
    id: '7',
    title: 'Secluded Mountain Cabin',
    price: '$675,000',
    location: 'Aspen, Colorado',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000',
    beds: 4,
    baths: 3,
    sqft: 2200,
    rating: 4.9,
    type: 'House',
    description: 'Escape to the mountains in this custom-built log cabin. Enjoy ski-in/ski-out access in the winter and hiking trails right outside your door in the summer. The great room features a massive stone fireplace and vaulted ceilings.',
    amenities: ['Ski-in/Ski-out', 'Hot Tub', 'Stone Fireplace', 'Mountain Views', 'Heated Floors']
  }
];

export const CURRENT_AGENT: Agent = {
  id: 'a1',
  name: 'Sarah Johnson',
  role: 'Senior Luxury Estate Specialist',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  isOnline: true
};

export const CHAT_HISTORY: ChatMessage[] = [
  { id: '1', text: "Hello! I'm interested in the property on Ocean Ave. Is it still available?", sender: 'me', time: '10:30 AM' },
  { id: '2', text: "Hi User! Great choice. It's available for viewing this weekend.", sender: 'other', time: '10:32 AM' },
  { id: '3', text: "That sounds promising. When would be a good time to view it?", sender: 'me', time: '10:33 AM' },
  { id: '4', text: "I have an opening this Saturday at 11:00 AM. Would that work for you?", sender: 'other', time: '10:35 AM' },
  { id: '5', text: "Saturday at 11:00 AM works perfectly for me. See you then!", sender: 'me', time: '10:36 AM' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael Chen",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "TrueEstate made buying my first home incredibly easy. The agent connection feature is a game-changer!"
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "The data analytics and neighborhood insights helped me find a property with 20% instant equity. Highly recommended."
  },
  {
    id: 3,
    name: "David Kim",
    role: "Home Seller",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    text: "I sold my house in 3 days using TrueEstate. The exposure this app gives you is unmatched."
  }

];
