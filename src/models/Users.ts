import { User as UI } from "./Interfaces/User"

class User implements UI {
    IdType   : string
    names    : string
    surname  : string
    ID       : number
    phone    : number
    mail     : string
    linkedin : string
    github   : string

    constructor(
        IdType   : string,
        names    : string,
        surname  : string,
        ID       : number,
        phone    : number,
        mail     : string,
        linkedin : string,
        github   : string) {
            
            this.IdType   = IdType;
            this.names    = names;
            this.surname  = surname;
            this.ID       = ID;
            this.phone    = phone;
            this.linkedin = linkedin;
            this.mail     = mail;
            this.github   = github;
    }
}

export { User }
