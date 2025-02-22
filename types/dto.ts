export enum EnergyType {
  SOLAR = "SOLAR",
  WIND = "WIND",
  HYDRO = "HYDRO",
  BIOMASS = "BIOMASS",
  COMMUNITY = "COMMUNITY",
  GRID = "GRID",
}

export interface EnergySource {
  source: EnergyType;
  amount: number;
}

export interface EnergyConsumptionResponseDTO {
  energyConsumed: number;
  sourcesUsed: EnergySource[];
  strategyUsed: string;
  totalCost: number;
}

export interface LoginRequestDTO {
  username: string;
  password: string;
}

export interface TokenResponseDTO {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface UserResponseDTO {
  id: string;
  username: string;
  email: string;
  roles: string[];
}

export interface EnergySummaryResponseDTO {
  consumption: ConsumptionSummaryDTO;
  production: ProductionSummaryDTO;
}

export interface ConsumptionSummaryDTO {
  startTime: string;
  stopTime: string;
  totalDemand: number;
  allocation: EnergySource[];
}

export interface ProductionSummaryDTO {
  production: EnergySource[];
  surplus: number;
}

export interface EnergySummaryRequestDTO {
  startDate: string;
  endDate: string;
}
