export interface character {
    id: number;
    name: string;
    description?: string;
    url: string;
    type: string;
    skills:string[]
}

export interface characterResult {
    total: number
    result: character[]
}