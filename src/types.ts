export interface PlumbingService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  urgencyLevel: 'Standard' | 'Urgent' | 'Emergency 24/7';
  commonIssues: string[];
  whatsAppMessage: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  location: string;
  text: string;
  serviceProvided: string;
}

export interface NairobiArea {
  name: string;
  description: string;
  popular: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImage: string;
  afterImage: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  location: string;
  problemType: string;
  preferredTime: string;
  details: string;
}
