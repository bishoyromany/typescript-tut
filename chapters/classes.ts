const classes = () => {
    class Person{
        protected firstName: string;
        private lastName: string;
        public fullName: string | null;

        constructor(name: string){
            this.fullName = name;
            let names = name.split(" ");
            this.firstName = names[0];
            this.lastName = names.length > 1 ? names[1] : null;
        }

        greet(){
            console.log(`Good Morning ${this.firstName}`);
        }
    }

    class Employee extends Person{
        private position: string;
        constructor(name: string, position: string){
            super(name);
            this.position = position;
        }

        positionTasks(){
            console.log(`Hello ${this.firstName}, Your Position Is ${this.position}, So Your Tasks Is Developing Websites.`);
        }
    }

    let employee1 = new Employee("Bishoy Romany", "Web Developer");
    console.log("Classes");
    console.table({classData: employee1, fullName: employee1.fullName});
    employee1.greet();
    employee1.positionTasks();

}

export default classes;