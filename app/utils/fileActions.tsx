import { promises as fs } from "fs";

export const readFile = async(url: string) => {
    const data: any = await fs.readFile(url, "utf8");
    return data;
}