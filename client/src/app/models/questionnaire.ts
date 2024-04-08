import { Question } from "./question";

export class Questionnaire {
    idQuestionnaire?: number;
    name: string;
    description: string;
    creationDate: Date;
    answersList: Question[];

    constructor(name: string, description: string, creationDate: Date, answersList: Question[]) {
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.answersList = answersList;        
    }
}