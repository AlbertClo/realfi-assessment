type Person = {
  id: number;
  name: string;
  surname: string;
  number: number;
  gender: string;
  country: string;
  dependants: number;
  birthDate: string;
};

export const people: Person[] = [
  {
    id: 1,
    name: "Jack",
    surname: "Front",
    number: 123,
    gender: "Male",
    country: "Latvia",
    dependants: 5,
    birthDate: "10/3/1981"
  },
  {
    id: 2,
    name: "Jill",
    surname: "Human",
    number: 654,
    gender: "Female",
    country: "Spain",
    dependants: 0,
    birthDate: "6/2/1983"
  },
  {
    id: 3,
    name: "Robert",
    surname: "Pullman",
    number: 456,
    gender: "Male",
    country: "Germany",
    dependants: 2,
    birthDate: "5/4/1999"
  },
  {
    id: 4,
    name: "Chun Li",
    surname: "Suzuki",
    number: 987,
    gender: "Female",
    country: "China",
    dependants: 1,
    birthDate: "11/9/2001"
  },
  {
    id: 5,
    name: "Sarah",
    surname: "Van Que",
    number: 587,
    gender: "Female",
    country: "Latvia",
    dependants: 4,
    birthDate: "6/22/1989"
  }
]
