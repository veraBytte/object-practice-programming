import { LearningPath } from "./LearningPath.js";

export class User {
    role = undefined;

    constructor({name,lastName,age,email}){
        this.name = name,
        this.lastName = lastName,
        this.age = age,
        this.email = email
    }

    createLearningPath (nameLearningPath) {
        const learningPath = new LearningPath({name : nameLearningPath})
        return learningPath;
    }
}