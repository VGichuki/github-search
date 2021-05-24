export class Repo {
    push(newUserData: any) {
      throw new Error('Method not implemented.');
    }
    constructor(public name: string, 
        public description: string, 
        public updated_at: Date, 
        public clone_url: string, 
        public language: string,){}
}
