import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { NotificationsRepository } from './repositories/notifications.repository';
import { User } from '../users/entities/users.entity';

@Injectable()
export class NotificationsService {

  constructor(private readonly configService: ConfigService, private readonly repository: NotificationsRepository,) { }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  private transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'd.kreuz@nextage.com.br',
      pass: 'uhda nwfz eqih eqna',
    },
  });

  sendMail(to: string, title: string, message: string, html?: string) {
    const mailOptions = {
      from: '"Nome do Remetente" <d.kreuz@nextage.com.br>',
      to,
      title,
      message,
      html,
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return this.transporter.sendMail(mailOptions);
  }

  async notifyUser(data: User) {
    await this.repository.createNotification({ user: data })
    await this.sendMail(
      data.email,
      this.configService.get<string>('TITLE_EMAIL') || 'Conta criada',
      this.configService.get<string>('MESSAGE_EMAIL') || 'Sua conta foi criada com sucesso',
      '<b>Seu cadastro foi criado com sucesso!!!.</b>',
    );
  }
}
