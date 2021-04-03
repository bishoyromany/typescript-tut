const methods = () => {
    const yearToMonths = (year: number, secondYear?:number): number => {
        return year * 12 * (secondYear ? secondYear: 1);
    }

    interface Person {
        firstName: string,
        lastName?: string
    }

    const fullName = (person: Person): string => {
        return `${person.firstName} ${person.lastName ? person.lastName : ''}`;
    }

    let person: Person = {
        firstName: "Bishoy", 
        lastName: "Romany"
    };

    console.log("Methods");
    console.table({
        age: yearToMonths(30, 10),
        fullName: fullName(person)
    })
}

export default methods;