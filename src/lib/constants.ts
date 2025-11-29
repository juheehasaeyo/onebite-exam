export const API_URL = "http://localhost:3000";

export const QUERY_KEYS = {
  todo: {
    all: ["todos"],
    list: ["todo", "list"],
    detail: (id: string) => ["todo", "detail", id],
  },
};
