import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalConfig } from './global-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  void GlobalConfig(app);
  
  await app.listen(process.env.PORT ?? 3001);
  console.log(`server is running in port 3001`)
}
void bootstrap();
