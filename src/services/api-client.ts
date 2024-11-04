import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a59ec26af6a74faa85ca7ea4b0a9d622",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
