import { QuizExtraData } from '@/interfaces/quiz.ts';
import i18n from '@/i18n.ts';

export default (extraData: QuizExtraData) => {
  if (extraData.languageCode) {
    i18n.changeLanguage(extraData.languageCode as string);
  }
}
