class University {
    name: string;
    dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

const mum: University = new University("MUM", "Computer Science");
mum.graduation(2019);