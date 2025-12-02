import { Deal, CareerLink } from './types';

export const POPULAR_DEALS: Deal[] = [
  {
    id: 1,
    destination: "Santorini, Greece",
    image: "https://picsum.photos/800/600?random=1",
    price: "From $450",
    dates: "Oct 10 - Oct 17"
  },
  {
    id: 2,
    destination: "Kyoto, Japan",
    image: "https://picsum.photos/800/600?random=2",
    price: "From $890",
    dates: "Nov 05 - Nov 19"
  },
  {
    id: 3,
    destination: "New York, USA",
    image: "https://picsum.photos/800/600?random=3",
    price: "From $220",
    dates: "Sep 20 - Sep 25"
  },
  {
    id: 4,
    destination: "Bali, Indonesia",
    image: "https://picsum.photos/800/600?random=4",
    price: "From $680",
    dates: "Dec 01 - Dec 14"
  }
];

export const AIRPORT_SUGGESTIONS = [
  "New York (JFK)",
  "London (LHR)",
  "Tokyo (HND)",
  "Paris (CDG)",
  "Dubai (DXB)",
  "Singapore (SIN)",
  "Los Angeles (LAX)",
  "San Francisco (SFO)"
];

export const AIRLINE_CAREERS: CareerLink[] = [
  // North America
  { name: "Delta Air Lines", region: "North America", url: "https://www.delta.com/us/en/careers/overview", description: "Join a global team connecting the world." },
  { name: "United Airlines", region: "North America", url: "https://careers.united.com/", description: "Fly friendly and build a career with United." },
  { name: "American Airlines", region: "North America", url: "https://jobs.aa.com/", description: "Explore opportunities at the world's largest airline." },
  { name: "Southwest Airlines", region: "North America", url: "https://careers.southwestair.com/", description: "Work with a company known for its legendary culture." },
  { name: "Air Canada", region: "North America", url: "https://careers.aircanada.com/", description: "Represent Canada's flag carrier globally." },
  
  // Europe
  { name: "Lufthansa Group", region: "Europe", url: "https://www.lufthansagroup.careers/en", description: "Be part of Europe's largest airline group." },
  { name: "British Airways", region: "Europe", url: "https://careers.ba.com/", description: "Discover roles with the UK's flag carrier." },
  { name: "Air France", region: "Europe", url: "https://corporate.airfrance.com/en/careers", description: "Elegant careers in the heart of French aviation." },
  { name: "KLM Royal Dutch Airlines", region: "Europe", url: "https://careers.klm.com/", description: "Innovate with the world's oldest operating airline." },
  { name: "Ryanair", region: "Europe", url: "https://careers.ryanair.com/", description: "Fast-paced careers with Europe's busiest low-cost carrier." },
  { name: "EasyJet", region: "Europe", url: "https://careers.easyjet.com/", description: "Orange spirit and great opportunities across Europe." },
  
  // Middle East
  { name: "Emirates", region: "Middle East", url: "https://www.emiratesgroupcareers.com/", description: "World-class careers based in Dubai." },
  { name: "Qatar Airways", region: "Middle East", url: "https://careers.qatarairways.com/global/en", description: "Join the 5-star airline of excellence." },
  { name: "Etihad Airways", region: "Middle East", url: "https://careers.etihad.com/", description: "Reimagine flying from Abu Dhabi." },
  
  // Asia
  { name: "Singapore Airlines", region: "Asia", url: "https://www.singaporeair.com/en_UK/us/careers/", description: "Experience a great way to fly and work." },
  { name: "Cathay Pacific", region: "Asia", url: "https://careers.cathaypacific.com/", description: "Move beyond with Hong Kong's home airline." },
  { name: "ANA (All Nippon Airways)", region: "Asia", url: "https://www.ana.co.jp/group/en/careers/", description: "Japanese hospitality and precision in aviation." },
  { name: "JAL (Japan Airlines)", region: "Asia", url: "https://www.job-jal.com/", description: "Build bridges with the heart of Japan." },
  
  // Oceania
  { name: "Qantas", region: "Oceania", url: "https://www.qantas.com/au/en/about/careers.html", description: "The Spirit of Australia needs your talent." },
  { name: "Air New Zealand", region: "Oceania", url: "https://careers.airnz.co.nz/", description: "Join the team of Air New Zealanders." },
];