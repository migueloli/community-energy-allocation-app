import { API_ENDPOINTS } from "constants/api-endpoints";
import axios from "services/axiosConfig";
import { EnergySummaryRequestDTO, EnergySummaryResponseDTO } from "types/dto";

export const energyService = {
  getEnergyConsumptionSummary: async (request: EnergySummaryRequestDTO) => {
    const response = await axios.get<EnergySummaryResponseDTO>(
      API_ENDPOINTS.ENERGY.GET_CONSUMPTION_SUMMARY,
      { params: request }
    );
    return response.data;
  },

  getEnergyConsumptionSummaryByUser: async (
    userId: string,
    request: EnergySummaryRequestDTO
  ) => {
    const response = await axios.get<EnergySummaryResponseDTO>(
      API_ENDPOINTS.ENERGY.GET_CONSUMPTION_SUMMARY_BY_USER.replace(
        "{userId}",
        userId
      ),
      { params: request }
    );
    return response.data;
  },
};
