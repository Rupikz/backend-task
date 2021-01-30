import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Здесь будет страница свагера(надеюсь)';
  }
}
