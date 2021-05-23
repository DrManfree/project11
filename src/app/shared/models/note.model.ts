export class MyNote {
    createDate : Date = new Date();
    name : string;
    text : string;
    id : number;
    constructor()
    {
        this.name = '';
        this.text = '';
        this.id = 0;
    }
}