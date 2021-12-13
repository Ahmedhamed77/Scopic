export type Task = {
  data: TaskData;
  id: string;
  title: string;
};

export interface TaskData {
  createdAt: {
    _nanoseconds: number;
    _seconds: number;
  };
  title: string;
  desc: string;
}
