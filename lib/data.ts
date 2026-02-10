export interface Charity {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  mission: string;
  category: string;
  image: string;
  bannerImage: string;
  totalRaised: number;
  targetAmount: number;
  donorCount: number;
  campaignCount: number;
  founded: string;
  location: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  campaigns: Campaign[];
  events: Event[];
  gallery: string[];
  featured: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  status: "active" | "completed" | "upcoming";
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  type: "donor" | "partner" | "impact";
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const categories = [
  "All",
  "Education",
  "Healthcare",
  "Environment",
  "Hunger Relief",
  "Shelter",
  "Water & Sanitation",
  "Disaster Relief",
  "Children & Youth",
  "Human Rights",
];

export const charities: Charity[] = [
  {
    id: "1",
    name: "Bright Futures Academy",
    slug: "bright-futures-academy",
    shortDescription:
      "Empowering children through quality education in underserved communities across Sub-Saharan Africa.",
    fullDescription:
      "Bright Futures Academy is dedicated to providing quality education to children in some of the most underserved communities in Sub-Saharan Africa. Through building schools, training teachers, and providing learning materials, we have transformed the educational landscape for thousands of young learners. Our holistic approach includes nutrition programs, mentorship initiatives, and scholarship opportunities that ensure every child has the chance to reach their full potential.",
    mission:
      "To ensure every child has access to quality education regardless of their geographic or economic circumstances.",
    category: "Education",
    image: "/images/charity-education.jpg",
    bannerImage: "/images/hero-2.jpg",
    totalRaised: 2847500,
    targetAmount: 5000000,
    donorCount: 12340,
    campaignCount: 18,
    founded: "2015",
    location: "Nairobi, Kenya",
    email: "info@brightfutures.org",
    phone: "+254 700 123 456",
    address: "45 Education Lane, Nairobi, Kenya",
    website: "https://brightfutures.org",
    social: {
      twitter: "https://twitter.com/brightfutures",
      facebook: "https://facebook.com/brightfutures",
      instagram: "https://instagram.com/brightfutures",
    },
    campaigns: [
      {
        id: "c1",
        title: "Build 10 Schools in Rural Kenya",
        description:
          "Help us build modern educational facilities in rural communities where children walk hours to reach the nearest school.",
        raised: 450000,
        goal: 750000,
        status: "active",
      },
      {
        id: "c2",
        title: "Teacher Training Initiative 2026",
        description:
          "Fund the training of 200 new teachers to serve communities that currently lack qualified educators.",
        raised: 120000,
        goal: 200000,
        status: "active",
      },
      {
        id: "c3",
        title: "Digital Learning Lab",
        description:
          "Equip 50 schools with computers and internet access to bring digital literacy to rural students.",
        raised: 300000,
        goal: 300000,
        status: "completed",
      },
    ],
    events: [
      {
        id: "e1",
        title: "Annual Education Gala",
        date: "2026-04-15",
        location: "Nairobi Convention Center",
        description:
          "Join us for an evening celebrating educational achievements and future goals.",
      },
      {
        id: "e2",
        title: "Volunteer Week",
        date: "2026-06-01",
        location: "Various locations, Kenya",
        description: "A week-long volunteer program for international supporters.",
      },
    ],
    gallery: [
      "/images/charity-education.jpg",
      "/images/hero-2.jpg",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Global Health Initiative",
    slug: "global-health-initiative",
    shortDescription:
      "Delivering essential healthcare services to remote communities through mobile clinics and telemedicine.",
    fullDescription:
      "The Global Health Initiative operates mobile health clinics that reach remote and underserved communities across Southeast Asia and East Africa. Our team of dedicated healthcare professionals provides essential medical services including vaccinations, maternal health care, disease prevention, and emergency treatment. Through innovative telemedicine solutions, we connect rural patients with specialist doctors in urban centers.",
    mission:
      "To make quality healthcare accessible to every person, regardless of where they live.",
    category: "Healthcare",
    image: "/images/charity-health.jpg",
    bannerImage: "/images/hero-3.jpg",
    totalRaised: 4125000,
    targetAmount: 7500000,
    donorCount: 23560,
    campaignCount: 24,
    founded: "2012",
    location: "Geneva, Switzerland",
    email: "contact@globalhealth.org",
    phone: "+41 22 123 4567",
    address: "12 Health Boulevard, Geneva, Switzerland",
    website: "https://globalhealth.org",
    social: {
      twitter: "https://twitter.com/globalhealth",
      facebook: "https://facebook.com/globalhealth",
      linkedin: "https://linkedin.com/company/globalhealth",
    },
    campaigns: [
      {
        id: "c4",
        title: "Mobile Clinic Expansion",
        description:
          "Help us deploy 15 new mobile health clinics across rural East Africa.",
        raised: 890000,
        goal: 1200000,
        status: "active",
      },
      {
        id: "c5",
        title: "Telemedicine Network",
        description:
          "Connect 100 rural health posts with specialist doctors through our telemedicine platform.",
        raised: 500000,
        goal: 500000,
        status: "completed",
      },
    ],
    events: [
      {
        id: "e3",
        title: "World Health Day Fundraiser",
        date: "2026-04-07",
        location: "Virtual Event",
        description:
          "A global virtual event bringing together health advocates worldwide.",
      },
    ],
    gallery: [
      "/images/charity-health.jpg",
      "/images/hero-3.jpg",
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Clean Water Alliance",
    slug: "clean-water-alliance",
    shortDescription:
      "Bringing clean, safe drinking water to communities facing water scarcity through sustainable well-building programs.",
    fullDescription:
      "Clean Water Alliance has been at the forefront of the global clean water movement since 2010. We design and build sustainable water systems including wells, filtration plants, and rainwater harvesting systems in communities that lack access to safe drinking water. Our approach emphasizes community ownership, ensuring that local teams are trained to maintain water infrastructure for generations.",
    mission:
      "To provide clean, sustainable water access to every community in need.",
    category: "Water & Sanitation",
    image: "/images/charity-water.jpg",
    bannerImage: "/images/hero-1.jpg",
    totalRaised: 6230000,
    targetAmount: 10000000,
    donorCount: 34120,
    campaignCount: 32,
    founded: "2010",
    location: "Amsterdam, Netherlands",
    email: "info@cleanwateralliance.org",
    phone: "+31 20 123 4567",
    address: "78 Water Street, Amsterdam, Netherlands",
    website: "https://cleanwateralliance.org",
    social: {
      twitter: "https://twitter.com/cleanwaterall",
      facebook: "https://facebook.com/cleanwateralliance",
      instagram: "https://instagram.com/cleanwateralliance",
      linkedin: "https://linkedin.com/company/cleanwateralliance",
    },
    campaigns: [
      {
        id: "c6",
        title: "1000 Wells Project",
        description:
          "Our flagship campaign to build 1000 community wells across water-scarce regions in Africa.",
        raised: 2100000,
        goal: 3000000,
        status: "active",
      },
      {
        id: "c7",
        title: "Water Filtration Systems",
        description:
          "Install modern water filtration systems in 200 schools and community centers.",
        raised: 750000,
        goal: 1000000,
        status: "active",
      },
    ],
    events: [
      {
        id: "e4",
        title: "World Water Day Marathon",
        date: "2026-03-22",
        location: "Amsterdam, Netherlands",
        description:
          "Run for clean water! Join our annual charity marathon raising funds for water projects.",
      },
    ],
    gallery: [
      "/images/charity-water.jpg",
      "/images/hero-1.jpg",
    ],
    featured: true,
  },
  {
    id: "4",
    name: "Green Earth Foundation",
    slug: "green-earth-foundation",
    shortDescription:
      "Protecting biodiversity and fighting climate change through reforestation and sustainable agriculture programs.",
    fullDescription:
      "Green Earth Foundation is a global environmental organization committed to protecting our planet's biodiversity and fighting climate change. Through large-scale reforestation projects, sustainable agriculture training, and wildlife conservation programs, we are working to restore ecosystems and empower communities to become stewards of their natural environment.",
    mission:
      "To restore and protect Earth's ecosystems for future generations through community-led environmental action.",
    category: "Environment",
    image: "/images/charity-environment.jpg",
    bannerImage: "/images/hero-4.jpg",
    totalRaised: 3560000,
    targetAmount: 8000000,
    donorCount: 18900,
    campaignCount: 21,
    founded: "2013",
    location: "San Jose, Costa Rica",
    email: "hello@greenearth.org",
    phone: "+506 2234 5678",
    address: "22 Forest Road, San Jose, Costa Rica",
    website: "https://greenearth.org",
    social: {
      twitter: "https://twitter.com/greenearthfdn",
      instagram: "https://instagram.com/greenearthfdn",
    },
    campaigns: [
      {
        id: "c8",
        title: "Plant a Million Trees",
        description:
          "Join our ambitious campaign to plant one million trees across deforested regions.",
        raised: 1200000,
        goal: 2000000,
        status: "active",
      },
      {
        id: "c9",
        title: "Coral Reef Restoration",
        description:
          "Help us restore damaged coral reef ecosystems in the Caribbean and Pacific.",
        raised: 400000,
        goal: 600000,
        status: "active",
      },
    ],
    events: [
      {
        id: "e5",
        title: "Earth Day Celebration",
        date: "2026-04-22",
        location: "San Jose, Costa Rica",
        description:
          "A day of community planting, workshops, and environmental education.",
      },
    ],
    gallery: [
      "/images/charity-environment.jpg",
      "/images/hero-4.jpg",
    ],
    featured: true,
  },
  {
    id: "5",
    name: "Feeding Hope Network",
    slug: "feeding-hope-network",
    shortDescription:
      "Fighting hunger through community kitchens, food banks, and sustainable farming initiatives worldwide.",
    fullDescription:
      "Feeding Hope Network addresses food insecurity through a multi-faceted approach that combines immediate hunger relief with long-term food sustainability programs. We operate community kitchens in 15 countries, support local food banks, and train communities in sustainable farming practices that ensure food security for generations.",
    mission:
      "To end hunger by providing immediate food relief while building long-term food security through community empowerment.",
    category: "Hunger Relief",
    image: "/images/charity-hunger.jpg",
    bannerImage: "/images/hero-1.jpg",
    totalRaised: 5100000,
    targetAmount: 9000000,
    donorCount: 28400,
    campaignCount: 27,
    founded: "2011",
    location: "New York, USA",
    email: "info@feedinghope.org",
    phone: "+1 212 555 0123",
    address: "350 Hope Avenue, New York, NY 10001",
    website: "https://feedinghope.org",
    social: {
      twitter: "https://twitter.com/feedinghope",
      facebook: "https://facebook.com/feedinghope",
      instagram: "https://instagram.com/feedinghope",
      linkedin: "https://linkedin.com/company/feedinghope",
    },
    campaigns: [
      {
        id: "c10",
        title: "Zero Hunger Communities",
        description:
          "Transform 50 communities into self-sustaining food producers through sustainable agriculture.",
        raised: 800000,
        goal: 1500000,
        status: "active",
      },
    ],
    events: [
      {
        id: "e6",
        title: "Global Hunger Summit",
        date: "2026-10-16",
        location: "UN Headquarters, New York",
        description:
          "A summit bringing together leaders to discuss solutions to global food insecurity.",
      },
    ],
    gallery: [
      "/images/charity-hunger.jpg",
      "/images/hero-1.jpg",
    ],
    featured: true,
  },
  {
    id: "6",
    name: "Shelter for All Foundation",
    slug: "shelter-for-all-foundation",
    shortDescription:
      "Building safe, affordable housing for displaced families and those affected by natural disasters.",
    fullDescription:
      "Shelter for All Foundation provides emergency shelter and long-term housing solutions for families displaced by conflict, natural disasters, and extreme poverty. Our construction programs use locally sourced, sustainable materials and employ community members, creating both homes and jobs.",
    mission:
      "To ensure every family has a safe, dignified place to call home.",
    category: "Shelter",
    image: "/images/charity-shelter.jpg",
    bannerImage: "/images/hero-1.jpg",
    totalRaised: 1980000,
    targetAmount: 4000000,
    donorCount: 9870,
    campaignCount: 14,
    founded: "2016",
    location: "Manila, Philippines",
    email: "info@shelterforall.org",
    phone: "+63 2 8123 4567",
    address: "88 Community Drive, Manila, Philippines",
    website: "https://shelterforall.org",
    social: {
      facebook: "https://facebook.com/shelterforall",
      instagram: "https://instagram.com/shelterforall",
    },
    campaigns: [
      {
        id: "c11",
        title: "Typhoon Recovery Housing",
        description:
          "Build 500 permanent homes for families affected by recent typhoons in the Philippines.",
        raised: 650000,
        goal: 1000000,
        status: "active",
      },
    ],
    events: [
      {
        id: "e7",
        title: "Build Day",
        date: "2026-09-05",
        location: "Manila, Philippines",
        description:
          "Join hundreds of volunteers for a full day of community building.",
      },
    ],
    gallery: [
      "/images/charity-shelter.jpg",
      "/images/hero-1.jpg",
    ],
    featured: false,
  },
  {
    id: "7",
    name: "Hope for Children International",
    slug: "hope-for-children-international",
    shortDescription:
      "Protecting the rights and well-being of vulnerable children through advocacy, education, and support programs.",
    fullDescription:
      "Hope for Children International works across 20 countries to protect vulnerable children from exploitation, provide access to education and healthcare, and create supportive environments where every child can thrive. Our programs include child protection services, educational sponsorships, and community-based care initiatives.",
    mission:
      "To protect, educate, and empower vulnerable children worldwide.",
    category: "Children & Youth",
    image: "/images/charity-education.jpg",
    bannerImage: "/images/hero-2.jpg",
    totalRaised: 3200000,
    targetAmount: 6000000,
    donorCount: 15600,
    campaignCount: 19,
    founded: "2009",
    location: "London, UK",
    email: "contact@hopeforchildren.org",
    phone: "+44 20 7123 4567",
    address: "10 Hope Street, London, UK",
    website: "https://hopeforchildren.org",
    social: {
      twitter: "https://twitter.com/hopeforchildren",
      facebook: "https://facebook.com/hopeforchildren",
      instagram: "https://instagram.com/hopeforchildren",
      linkedin: "https://linkedin.com/company/hopeforchildren",
    },
    campaigns: [
      {
        id: "c12",
        title: "Safe Spaces for Children",
        description:
          "Create 30 community safe spaces where children can learn, play, and receive support.",
        raised: 400000,
        goal: 700000,
        status: "active",
      },
    ],
    events: [
      {
        id: "e8",
        title: "Children's Rights Conference",
        date: "2026-11-20",
        location: "London, UK",
        description:
          "An international conference on advancing children's rights globally.",
      },
    ],
    gallery: [
      "/images/charity-education.jpg",
      "/images/hero-2.jpg",
    ],
    featured: false,
  },
  {
    id: "8",
    name: "Disaster Rapid Response",
    slug: "disaster-rapid-response",
    shortDescription:
      "Providing immediate emergency aid and long-term recovery support to communities affected by natural disasters.",
    fullDescription:
      "Disaster Rapid Response is a leading emergency response organization that deploys within 24 hours of any major disaster worldwide. Our teams provide life-saving assistance including medical care, food, clean water, and temporary shelter. Beyond immediate relief, we support long-term community recovery and disaster preparedness training.",
    mission:
      "To save lives and restore communities in the aftermath of disasters through rapid, effective response.",
    category: "Disaster Relief",
    image: "/images/charity-shelter.jpg",
    bannerImage: "/images/hero-3.jpg",
    totalRaised: 7800000,
    targetAmount: 12000000,
    donorCount: 42000,
    campaignCount: 35,
    founded: "2008",
    location: "Tokyo, Japan",
    email: "ops@disasterresponse.org",
    phone: "+81 3 1234 5678",
    address: "15 Response Road, Tokyo, Japan",
    website: "https://disasterresponse.org",
    social: {
      twitter: "https://twitter.com/disasterrr",
      facebook: "https://facebook.com/disasterrr",
    },
    campaigns: [
      {
        id: "c13",
        title: "Emergency Fund 2026",
        description:
          "Support our rapid deployment fund for immediate disaster response anywhere in the world.",
        raised: 2500000,
        goal: 4000000,
        status: "active",
      },
    ],
    events: [
      {
        id: "e9",
        title: "Disaster Preparedness Workshop",
        date: "2026-10-13",
        location: "Tokyo, Japan",
        description:
          "Learn disaster preparedness skills and how communities can build resilience.",
      },
    ],
    gallery: [
      "/images/charity-shelter.jpg",
      "/images/hero-3.jpg",
    ],
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Regular Donor",
    content:
      "CharitySphere has completely changed how I approach giving. Being able to discover and support multiple charities from one platform, with full transparency on how my donations are used, is incredible.",
    avatar: "/placeholder-user.jpg",
    type: "donor",
  },
  {
    id: "t2",
    name: "Dr. James Okafor",
    role: "Director, Global Health Initiative",
    content:
      "Joining CharitySphere transformed our fundraising. We reached donors we never could have on our own. The platform's credibility and global reach have been invaluable for our mission.",
    avatar: "/placeholder-user.jpg",
    type: "partner",
  },
  {
    id: "t3",
    name: "Maria Santos",
    role: "Community Leader, Philippines",
    content:
      "Thanks to the charities on this platform, our village now has clean water, a new school, and a health clinic. The impact is real and life-changing for our entire community.",
    avatar: "/placeholder-user.jpg",
    type: "impact",
  },
  {
    id: "t4",
    name: "David Chen",
    role: "Corporate Partner, TechCorp",
    content:
      "We chose CharitySphere as our corporate giving platform because of its enterprise-grade security, transparent reporting, and the incredible diversity of causes we can support.",
    avatar: "/placeholder-user.jpg",
    type: "partner",
  },
];

export const partners: Partner[] = [
  { id: "p1", name: "United Nations", logo: "UN" },
  { id: "p2", name: "World Bank", logo: "WB" },
  { id: "p3", name: "Red Cross", logo: "RC" },
  { id: "p4", name: "UNICEF", logo: "UF" },
  { id: "p5", name: "WHO", logo: "WHO" },
  { id: "p6", name: "Gates Foundation", logo: "GF" },
  { id: "p7", name: "Ford Foundation", logo: "FF" },
  { id: "p8", name: "Rockefeller", logo: "RF" },
];

export const platformStats = {
  totalDonations: 34842500,
  totalCampaigns: 190,
  totalCharities: 147,
  totalDonors: 184790,
};

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`;
  }
  return `$${amount.toLocaleString()}`;
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toLocaleString();
}
