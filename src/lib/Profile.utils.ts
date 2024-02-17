export interface Profile {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  user_shower_value?: number;
  user_clean_value?: number;
  user_friend_score?: number;
  user_room_time_value?: number;
  user_sleep_time?: string;
  user_smoke?: boolean;
  user_temp_value?: number;
  user_overnight_guest_value?: string;
  boroughs: string[];
}
