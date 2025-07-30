export class homepage{


    constructor(public page){
        this.page = page
    }

    async naviagetohomepage(){
        await this.page.goto('https://playwright.dev/'); 
    }
}