// Added React import to resolve missing React namespace error for React.ReactNode
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
