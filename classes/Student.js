import { User } from "./User.js";

export class Student extends User{
    //Al definir el super, se define que todas aquellos parametros que le pasemos a la clase Student se definiran en todas las propiedades heredadas del prototipo User de esta manera no hay que volver a declarar estas variables
    constructor(props,socialMedia = [],learningPaths = []){
        super(props)
        this.role = "student";
        this.LearningPaths = learningPaths;
        this.socialMedia = socialMedia;
    }

    addSocialMedia(linkedin = undefined, twitter  = undefined, instagram  = undefined){
            this.socialMedia.push(linkedin,twitter,instagram)
    }
}