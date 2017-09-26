export class Task{

    public id: number;
    public done: boolean;

    constructor(
        public title: string
    ){
        this.id = new Date().getTime(); //timestamp
        this.done = false;
    }
}