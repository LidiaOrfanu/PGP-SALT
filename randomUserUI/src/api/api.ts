import { IUser } from "../interfaces/IUser";

export const getUser = async (): Promise<IUser> => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0];
};
