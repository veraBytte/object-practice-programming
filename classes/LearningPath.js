export class LearningPath {
    constructor({name,courses = [],isStandar = false}){
        this.name = name;
        this.courses = courses
        this.isStandar = isStandar
    }
}