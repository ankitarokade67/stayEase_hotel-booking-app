/*import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
0
@Component({
  imports: [CommonModule,RouterLink,FormsModule],
  selector: 'app-rooms',
  styleUrl: './rooms.scss',
  templateUrl: './rooms.html',
})
export class Rooms {}*/




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,RouterModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms {
  searchText = '';
  guests = 1;

  // Temporary data matching the database model
  rooms: Room[] = [
    {
      id: 1,
      room_number: '101',
      room_type_id: 1,
      amenities: ['Wi-Fi', 'Air Conditioning', 'TV'],
      image_url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      is_active: true,
      room_type: {
        id: 1,
        name: 'Deluxe Room',
        description: 'A comfortable room with a modern interior.',
        max_guests: 2,
        base_price: 2500
      }
    },
    {
      id: 2,
      room_number: '201',
      room_type_id: 2,
      amenities: ['Wi-Fi', 'King Bed', 'Balcony'],
      image_url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      is_active: true,
      room_type: {
        id: 2,
        name: 'Luxury Suite',
        description: 'A spacious suite for a relaxing stay.',
        max_guests: 4,
        base_price: 4500
      }
    },
    {
      id: 3,
      room_number: '102',
      room_type_id: 3,
      amenities: ['Wi-Fi', 'Air Conditioning'],
      image_url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      is_active: true,
      room_type: {
        id: 3,
        name: 'Standard Room',
        description: 'A simple and affordable room.',
        max_guests: 2,
        base_price: 1800
      }
    }
  ];

  get filteredRooms(): Room[] {
    return this.rooms.filter(room =>
      room.is_active &&
      room.room_type.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase()) &&
      room.room_type.max_guests >= this.guests
    );
  }
}

