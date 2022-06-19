type Student = {
  readonly id: number;
  name: string;
  admission: (data: Date) => void;
};

let student: Student = {
  id: 1,
  name: "aakash",
  admission: (date: Date) => {
    console.log(date);
  },
};
