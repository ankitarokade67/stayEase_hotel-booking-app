
export interface RoomType {
  id: number;
  name: string;
  description: string;
  max_guests: number;
  base_price: number;
}

export interface Room {
  id: number;
  room_number: string;
  room_type_id: number;
  amenities: string[];
  image_url: string;
  is_active: boolean;

  // Related room type returned by the backend
  room_type: RoomType;
}
