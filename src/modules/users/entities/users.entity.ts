import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Notification } from '../../notifications/entities/notifications.entity';

@Entity({ name: 'users:users' }) // corresponde ao @@map("users:users")
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];
}
