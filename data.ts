/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServicePackage, Testimonial, FAQItem, StatsItem } from "./types";

export const AGENCY_WHATSAPP = "6306470595";
export const AGENCY_EMAIL = "arnav20061704@gmail.com";

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: "basic-web",
    name: "Basic Website",
    price: "₹12,000",
    priceNumber: 12000,
    deliveryTime: "3-5 Days",
    features: [
      "Up To 5 Fully-responsive Pages",
      "Modern WebCraft Design",
      "Interactive Contact Form",
      "WhatsApp Direct Integration",
      "Basic On-Page SEO Engine"
    ],
    category: "website",
    iconName: "Globe"
  },
  {
    id: "moderate-web",
    name: "Moderate Website",
    price: "₹18,000",
    priceNumber: 18000,
    deliveryTime: "7-10 Days",
    features: [
      "Up To 10 Custom Pages",
      "Premium Business Layout",
      "Standard SEO Optimization",
      "Engaging Blog & News Module",
      "Google Maps Live Integration",
      "Fully Content-managed Admin Panel"
    ],
    category: "website",
    iconName: "Layout",
    badge: "Popular"
  },
  {
    id: "premium-web",
    name: "Premium Website",
    price: "₹26,000",
    priceNumber: 26000,
    deliveryTime: "12-15 Days",
    features: [
      "Unlimited High-performance Pages",
      "Advanced Structural SEO Setup",
      "Self-contained Booking Engine",
      "Premium Motion Animations & Transitions",
      "Priority 24/7 Premium Support",
      "Advanced Dynamic Admin Panel"
    ],
    category: "website",
    iconName: "Zap",
    badge: "Best Value"
  },
  {
    id: "ad-image",
    name: "Advertisement Image Design",
    price: "₹500",
    priceNumber: 500,
    deliveryTime: "24 Hours",
    features: [
      "High-converting Product Layout",
      "Tailor-made for Meta, Google, Insta",
      "High-definition Vector Files",
      "Unlimited Revisions Supplied"
    ],
    category: "addon",
    iconName: "Image"
  },
  {
    id: "ad-video",
    name: "Advertisement Video Design",
    price: "₹1,000",
    priceNumber: 1000,
    deliveryTime: "48 Hours",
    features: [
      "Professional-grade Full HD Ad Video",
      "Royalty-free Custom Premium Audio Track",
      "Fluid Visual Transition & Graphic Animation",
      "Formulated for High CTR Campaigns"
    ],
    category: "addon",
    iconName: "Video"
  },
  {
    id: "logo-design",
    name: "Logo Design",
    price: "₹250",
    priceNumber: 250,
    deliveryTime: "24 Hours",
    features: [
      "3 Minimalist Concept Iterations",
      "Print and Digital Scalable Versions",
      "Full Commercial & IP Rights Reserved",
      "Full Vector Delivery (.AI, .SVG, .PNG)"
    ],
    category: "addon",
    iconName: "PenTool"
  },
  {
    id: "branding-pkg",
    name: "Business Branding Package",
    price: "Custom Pricing",
    deliveryTime: "Varies",
    features: [
      "Comprehensive Custom Corporate Guidelines",
      "High-end Premium Logo & Stationery",
      "Complete Social Media Brand Presets",
      "1-on-1 Branding Consultant Support"
    ],
    category: "addon",
    iconName: "Award",
    badge: "Agency Choice"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Aditya Sharma",
    role: "Founder",
    companyName: "Zenith Retail",
    content: "WebCraft Pro transformed our retail business with an absolutely spectacular website. Their WhatsApp integration and custom booking system boosted our direct conversions by 45% in the first two weeks alone!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t2",
    name: "Priyanka Patel",
    role: "Marketing Director",
    companyName: "Nexus EdTech",
    content: "The custom ad videos designed by WebCraft Pro are second to none. We ran them on Instagram commercials and experienced a whopping 3x return on ad spend. Fast delivery time and super clean designs!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t3",
    name: "Vikram Malhotra",
    role: "CEO",
    companyName: "Apex Logistics",
    content: "Very professional from start to finish. We went with their Moderate Website plan, and the team provided outstanding support. They respected their 50% advance transparent payment policy and delivered with precision.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t4",
    name: "Meera Nair",
    role: "Creative Lead",
    companyName: "Solstice Beauty",
    content: "WebCraft Pro is the absolute best agency to build high-end UI/UX designs. Our logo and modern portal are gorgeous, responsive, fast-loading, and highly appreciated by our elite customers.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "What is the payment structure and policy at WebCraft Pro?",
    answer: "We mandate a transparent 50% advance payment upfront before starting any client development or asset design work. The remaining 50% balance is settled and verified right after preview, review, and final client approval, immediately prior to final production delivery."
  },
  {
    id: "faq2",
    question: "How do we book and collaborate with WebCraft Pro?",
    answer: "You can book directly using our intuitive 'Online Booking' page, choose your service package, fill out your WhatsApp number, and submit. The details are immediately formatted and sent directly to us on WhatsApp (+91 6306470595) so we can kickstart your project discussion immediately!"
  },
  {
    id: "faq3",
    question: "How long does it take to deliver a custom website?",
    answer: "Our standard Basic websites take between 3-5 days. Moderate websites with CMS-like elements take 7-10 days, while complex Premium multi-page portals equipped with complex animations and custom databases range from 12-15 days."
  },
  {
    id: "faq4",
    question: "Do you supply hosting services and high-end domains?",
    answer: "We support finding the perfect Domain and Cloud Hosting provider, setting up secure DNS records, configuring SSL, and setting up free global reverse proxies (like Cloudflare) to ensure lightning-fast speeds and ultra-high security."
  },
  {
    id: "faq5",
    question: "Are there any hidden costs after project delivery?",
    answer: "None! We pride ourselves on transparent communications. Any additional structural tweaks, customized revisions, or auxiliary copywriting requested beyond our agreed scope are quoted clearly upfront before execution."
  }
];

export const STATS_DATA: StatsItem[] = [
  {
    id: "stat1",
    label: "Projects Completed",
    value: "150+",
    numberValue: 154,
    suffix: "+"
  },
  {
    id: "stat2",
    label: "Happy Clients",
    value: "50+",
    numberValue: 58,
    suffix: "+"
  },
  {
    id: "stat3",
    label: "Video Ads Designed",
    value: "200+",
    numberValue: 210,
    suffix: "+"
  },
  {
    id: "stat4",
    label: "Client Satisfaction",
    value: "99%",
    numberValue: 99.8,
    suffix: "%"
  }
];

export const PORTFOLIO_DATA: any[] = [
  {
    id: "work-1",
    title: "Zenith Retail Storefront",
    category: "website",
    description: "A premium lifestyle web storefront featuring micro-interactions, responsive design, and smooth layout changes.",
    tags: ["React", "Tailwind CSS", "Vite", "Stripe API"],
    metric: "45% Sales Jump",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "work-2",
    title: "Apex Routes Gateway",
    category: "website",
    description: "Enterprise multi-route shipping portal integrating direct real-time GPS maps and instant tracking status nodes.",
    tags: ["TypeScript", "Google Maps", "React", "Recharts"],
    metric: "Fast Interactive Map",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "work-3",
    title: "Solstice Bio-Skincare",
    category: "branding",
    description: "A complete royal brand identity guidelines book with logo presets, elegant typography palettes, and custom assets.",
    tags: ["Logo Suite", "Style Book", "Figma Design", "Vectors"],
    metric: "100% Custom Design",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "work-4",
    title: "PrimeFit Commercial Video",
    category: "ad-video",
    description: "Vibrant conversion-focused Instagram Reel ad commercial complete with dynamic typography, audio beats, and custom FX.",
    tags: ["1080p Full HD", "Custom Sound FX", "Ad Analytics"],
    metric: "3.4% CTR Optimization",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "work-5",
    title: "Nexus Classroom Portal",
    category: "website",
    description: "A custom multipage CMS learning dashboard constructed in exactly 12 days for high-speed online course dispatch.",
    tags: ["React CMS", "Framer Motion", "SEO Pro", "Figma"],
    metric: "Delivered in 12 Days",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "work-6",
    title: "Elevate Capital Brand Outline",
    category: "branding",
    description: "High-end corporate logo and branding presets designed for a fintech startup including print and digital vectors.",
    tags: ["Minimalist Logo", "3 Iterations", "All Formats Delivered"],
    metric: "All Formats Included",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80"
  }
];

