export class Login {
    email: string;
    password: string;
    role: string;
}

export class Student {
    educatorname: string;
    eventname: string;
    eventque: [{ eventrange: string, knowledge: string, exp: string, futureimv: string, futurethings: string, organized: string, recommendev: string }];
    educatorque: [{ educatorrange: string, knowledgeofed: string, teaching: string, futureimvofed: string, organizeded: string, futuretopics: string, recommended: string }];
}