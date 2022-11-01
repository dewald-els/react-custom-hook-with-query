import axios from "axios";
import { Guitar } from "../models/guitar.model";

export const fetchGuitars = async () => {
  return axios
    .get<Guitar[]>("https://noroff-assignment-api.herokuapp.com/guitars")
};
