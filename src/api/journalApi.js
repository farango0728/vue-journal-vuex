import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-journal-e746f-default-rtdb.firebaseio.com",
});

export default journalApi;
