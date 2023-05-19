export interface IUser {
    name: {
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
    };
    dob: {
      age: number;
    };
  }