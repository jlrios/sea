export class Answer {
    idAnswer: number;
    description: string;
    isCorrect: boolean;

    constructor(description: string, isCorrect: boolean, idAnswer: number) {
        this.idAnswer = idAnswer;
        this.description = description;
        this.isCorrect = isCorrect;
    }
}