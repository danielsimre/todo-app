interface Task {
    id: number;
    type: string;
    attributes: {
      title: string,
      description: string;
      status: boolean;
      "tag-list": string[];
      "user-id": number;
    }
}
export default Task;