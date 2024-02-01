import { User } from "./User.js";
import { LearningPath } from "./LearningPath.js";
import { allLearningPathAvaliable } from "../data/learningPathsData.js";

export class Admin extends User{
    constructor(props){
        super(props);
        this.role = "admin"
    }

    createLearningPath (nameLearningPath) {
        const learningPath = new LearningPath({name : nameLearningPath,isStandar: true})
        allLearningPathAvaliable.push(learningPath)
    }
}