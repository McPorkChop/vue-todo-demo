export default interface Todo {
    id: string;
    state: number;
    content: string;
}

export function create(content: string): Todo {
    return {
        id: new Date().valueOf().toString(),
        state: 0,
        content
    };
}
