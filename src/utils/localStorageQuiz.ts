export interface ILocalStorageQuiz {
  [key: number]: number[]
}

class LocalStorageQuiz {
  static getQuizAnswers(): ILocalStorageQuiz | undefined {
    const quiz = localStorage.getItem('QUIZ');

    if (quiz) {
      return JSON.parse(quiz);
    }
  }

  static getQuizAnswerByOrder(order: number): number[] {
    const item = localStorage.getItem(`QUIZ`);

    if (item) {
      return JSON.parse(item)[order] || [];
    }

    return [];
  }

  static setAnswer(order: number, answerIndex: number): number[] {
    const answers = [answerIndex];
    const quiz = localStorage.getItem(`QUIZ`);
    let updatedQuiz: Record<string, number[]> = {};

    if (quiz) {
      updatedQuiz = JSON.parse(quiz);
    }

    updatedQuiz[order] = answers;

    localStorage.setItem(`QUIZ`, JSON.stringify(updatedQuiz));

    return answers;
  }

  static setAnswerArray(order: number, answerIndexes: number[]): number[] {
    const quiz = localStorage.getItem(`QUIZ`);
    let updatedQuiz: Record<string, number[]> = {};

    if (quiz) {
      updatedQuiz = JSON.parse(quiz);
    }

    updatedQuiz[order] = answerIndexes;

    localStorage.setItem(`QUIZ`, JSON.stringify(updatedQuiz));

    return answerIndexes;
  }

  static clear() {
    localStorage.setItem(`QUIZ`, '');
  }
}

export default LocalStorageQuiz;
