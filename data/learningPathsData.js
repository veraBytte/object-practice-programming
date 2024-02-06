import { LearningPath } from "../models/learningPath.js";

const frontedPath = new LearningPath({
    name: "Frontend Developer",
    courses: ["HTML", "CSS", "JavaScript","React"]
});

const designPath = new LearningPath({
    name: "Designer",
    courses: ["Photoshop", "Illustrator", "Figma"]
});

const backendPath = new LearningPath({
    name: "Backend Developer",
    courses: ["Node", "Python", "Java"]
});

const cloudPath = new LearningPath({
    name: "Cloud Architect",
    courses: ["AWS", "Azure", "Google Cloud"]
});

const dataSciencePath = new LearningPath({
    name: "Data Science",
    courses: ["Python", "R", "Scala"]
});

const devOpsPath = new LearningPath({
    name: "DevOps",
    courses: ["Docker", "Kubernetes", "Jenkins"]
});



export let allLearningPathAvaliable = [frontedPath, designPath, backendPath, cloudPath, dataSciencePath, devOpsPath ];