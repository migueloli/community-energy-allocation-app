import { API_ENDPOINTS } from "constants/api-endpoints";
import axios from "services/axiosConfig";
import { UserResponseDTO } from "types/dto";

export const userService = {
  getUsers: async () => {
    const response = await axios.get<UserResponseDTO[]>(
      API_ENDPOINTS.USER.GET_ALL
    );
    return response.data;
  },
};
