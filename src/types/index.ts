export interface ITodo {
  title: string;
  body: string;
  userId: number;
};
export type todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface RootState {
  counter: {
    todos: todos[];
    loading: boolean;
    error: Error | null;
  };
}
