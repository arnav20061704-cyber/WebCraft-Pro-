/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActivePage {
  Home = "home",
  About = "about",
  Services = "services",
  Booking = "booking",
  Payment = "payment",
  PrivacyPolicy = "privacy",
  TermsAndConditions = "terms",
  Contact = "contact"
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  priceNumber?: number;
  deliveryTime?: string;
  features: string[];
  category: "website" | "addon";
  iconName: string;
  badge?: string;
}

export interface BookingSubmission {
  fullName: string;
  whatsappNumber: string;
  selectedService: string;
  projectDetails: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyName: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatsItem {
  id: string;
  label: string;
  value: string;
  numberValue: number;
  suffix: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "website" | "ad-graphic" | "ad-video" | "branding";
  description: string;
  tags: string[];
  metric: string;
  imageUrl: string;
  demoUrl?: string;
}

