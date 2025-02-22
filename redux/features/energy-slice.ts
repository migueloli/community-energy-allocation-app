import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { energyService } from "services/energy-service";
import { userService } from "services/user-service";
import { EnergySummaryResponseDTO, UserResponseDTO } from "types/dto";

interface EnergyState {
  selectedMember: string;
  selectedPeriod: "yesterday" | "lastWeek" | "lastMonth";
  isLoading: boolean;
  summary: EnergySummaryResponseDTO | undefined;
  users: UserResponseDTO[];
}

const initialState: EnergyState = {
  selectedMember: "",
  selectedPeriod: "yesterday",
  isLoading: false,
  summary: undefined,
  users: [],
};

export const fetchConsumptionSummary = createAsyncThunk(
  "energy/fetchConsumptionSummary",
  async (period: "yesterday" | "lastWeek" | "lastMonth") => {
    const { startDate, endDate } = getDateRange(period);
    return await energyService.getEnergyConsumptionSummary({
      startDate,
      endDate,
    });
  }
);

export const fetchConsumptionSummaryByUser = createAsyncThunk(
  "energy/fetchConsumptionSummaryByUser",
  async ({
    userId,
    period,
  }: {
    userId: string;
    period: "yesterday" | "lastWeek" | "lastMonth";
  }) => {
    const { startDate, endDate } = getDateRange(period);
    return await energyService.getEnergyConsumptionSummaryByUser(userId, {
      startDate,
      endDate,
    });
  }
);

export const fetchUsers = createAsyncThunk("energy/fetchUsers", async () => {
  return await userService.getUsers();
});

const energySlice = createSlice({
  name: "energy",
  initialState,
  reducers: {
    selectMember: (state, action) => {
      state.selectedMember = action.payload;
    },
    setPeriod: (state, action) => {
      state.selectedPeriod = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        if (action.payload.length > 0 && !state.selectedMember) {
          state.selectedMember = action.payload[0].id;
        }
      })
      .addCase(fetchConsumptionSummary.fulfilled, (state, action) => {
        state.summary = action.payload;
      })
      .addCase(fetchConsumptionSummaryByUser.fulfilled, (state, action) => {
        state.summary = action.payload;
      });
  },
});
export const { selectMember, setPeriod } = energySlice.actions;
export default energySlice.reducer;

function getDateRange(period: "yesterday" | "lastWeek" | "lastMonth") {
  const now = new Date();
  const endDate = new Date(now.setHours(23, 59, 59, 999));
  let startDate: Date;

  switch (period) {
    case "yesterday":
      startDate = new Date(now);
      startDate.setDate(startDate.getDate() - 1);
      startDate.setHours(0, 0, 0, 0);
      break;
    case "lastWeek":
      startDate = new Date(now);
      startDate.setDate(startDate.getDate() - 7);
      startDate.setHours(0, 0, 0, 0);
      break;
    case "lastMonth":
      startDate = new Date(now);
      startDate.setMonth(startDate.getMonth() - 1);
      startDate.setHours(0, 0, 0, 0);
      break;
  }

  return { startDate: startDate.toISOString(), endDate: endDate.toISOString() };
}
