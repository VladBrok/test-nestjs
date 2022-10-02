import { YesNo } from './interfaces/yes-no.interface';

export class YesNoService {
  getAnswer(): YesNo {
    const answer = Math.random() < 0.5 ? 'yes' : 'no';
    return {
      answer,
    };
  }
}
