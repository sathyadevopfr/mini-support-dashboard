export interface Ticket {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TicketWithCustomer extends Ticket {
  customerName: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
