let employee: {
  readonly id: number;
  name: string;
  retire: (data: Date) => void;
} = {
  id: 1,
  name: "aakash",
  retire: (date: Date) => {
    console.log(date);
  },
};
