export interface ServiceItem {
  name: string;
  price: number;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  items: ServiceItem[];
}

export interface CompanyInfo {
  nameAr: string;
  nameEn: string;
  fullName: string;
  taglineAr: string;
  taglineEn: string;
  additional: string;
  location: string;
  mapUrl: string;
  phone: string;
  whatsapp: string;
}

export interface CustomerLead {
  id: string;
  full_name: string;
  phone: string;
  service: string;
  notes?: string;
  channel?: string;
  status?: string;
  created_at: string;
}

export type LeadPayload = Omit<CustomerLead, 'id' | 'created_at'>;