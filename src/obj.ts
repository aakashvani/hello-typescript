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

//there is 3 problem in this implementation 
// 1. if we want to create another employee object we have to repeat this stucture
            // readonly id: number;
            // name: string;
            // retire: (data: Date) => void;

// 2. Other employee may have diffrent obj stucture in this case this will cause bug.
// 3. The present stucture is little bit hard to read our code.

// ===> this is why we use type Aliases <===