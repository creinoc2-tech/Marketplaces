 export interface UserData {
  name: string;
  email: string;
  password?: string; // Opcional (común si viene de un login o registro con OAuth)
  phone_number?: string; // Opcional (las propiedades con guion bajo suelen ser strings)
  country?: string; // Opcional
}
