import axios from "axios";
import { API_ENDPOINTS } from "constants/api-endpoints";
import { LoginRequestDTO, TokenResponseDTO } from "types/dto";

const credentials: LoginRequestDTO = {
  username: "admin",
  password: "adminpass",
};

export const authService = {
  initialize: async (): Promise<TokenResponseDTO> => {
    const response = await axios.post<TokenResponseDTO>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.accessToken}`;

    return response.data;
  },
};
