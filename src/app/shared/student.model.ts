// Change this according to the database of company.
export class Login {
    email: string;
    password: string;
    role: string;
    name: string;
    event: string;
}


// Change thses Questions according to the requirements of the database.
export class Student {
    educatorname: string;
    eventname: string;
    eventque: [{ eventrange: string, knowledge: string, exp: string, futureimv: string, futurethings: string, organized: string, recommendev: string }];
    educatorque: [{ educatorrange: string, knowledgeofed: string, teaching: string, futureimvofed: string, organizeded: string, futuretopics: string, recommended: string }];
}