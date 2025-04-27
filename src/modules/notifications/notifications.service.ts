import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class NotificationsService {
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

  sendMail(to: string, subject: string, text: string, html?: string) {
    const mailOptions = {
      from: '"Nome do Remetente" <d.kreuz@nextage.com.br>',
      to,
      subject,
      text,
      html,
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return this.transporter.sendMail(mailOptions);
  }

  async notifyUser(email: string) {
    await this.sendMail(
      email,
      'Recebimento de email!',
      'Novo Email.',
      '<b>Seu cadastro foi criado com sucesso!!!.</b>',
    );
  }
}
