const types = () => {
    /**
     * @string
     * @number
     * @boolean
     * @null
     * @undefined
     */

    let name: string = "Name";
    let names: string[] = ["Name1", "Name2"];
    let age: number = 10;
    let ages: Array<number> = [1,2];
    let namesAges: [string, number] = ["Name1", 2];
    let unlimitedNamesAges: any[] = ["Name1", 10, 20, "Name2"];
    let isUser: boolean = true;
    let verifyDate: null = null;
    let country: undefined = undefined;
    let multipleTypes: string | number = "Could Be String Or Number";
    
    console.warn("Basic Types.");
    console.table({
        name, names, age, ages, namesAges, unlimitedNamesAges, isUser, verifyDate, country, multipleTypes
    });

    /**
     * @enum
     * @any
     * @unknown
     */
    enum Job {Frontend = "Frontend Web Developer", Backend = "Backend Web Developer"};

    let frontend: Job = Job.Frontend;
    let randomArray: any[] = ["String", 1, true, null, undefined];
    let unknownVar: unknown = "String";

    console.warn("More Advanced Types.");
    console.table({frontend, randomArray, unknownVar: (unknownVar as string)});
}

export default types;