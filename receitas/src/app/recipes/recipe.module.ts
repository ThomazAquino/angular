export class Recipe { // model para as reciper, like a bluprint for the objects
    public name: string; // public para ser acessivel outside
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) { // o que vo receber
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;

    }
}