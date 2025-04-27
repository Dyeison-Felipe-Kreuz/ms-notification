import { User } from "../users/entities/users.entity";

export type NotificationType = {
  id?: number;
  user: User; // ou pode ser um objeto simplificado com os dados do usuário
}