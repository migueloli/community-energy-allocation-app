import { COLORS, ENERGY_SOURCE_COLORS } from "constants/colors";
import { useMemo } from "react";
import { useAppSelector } from "redux/hooks";
import { EnergyType } from "types/dto";

interface ChartDataItem {
  value: number;
  color: string;
  label: string;
  source: EnergyType;
}

export function useEnergyData() {
  const { summary, isLoading } = useAppSelector((state) => state.energy);

  const totalConsumption = summary?.consumption.totalDemand ?? 0;

  const chartData = useMemo<ChartDataItem[]>(() => {
    if (!summary?.consumption?.allocation?.length) return [];

    return summary.consumption.allocation
      .map((source) => ({
        value: (source.amount / totalConsumption) * 100,
        color:
          ENERGY_SOURCE_COLORS[source.source.toLowerCase()] ?? COLORS.primary,
        label: source.source,
        source: source.source,
      }))
      .sort((a, b) => b.value - a.value);
  }, [summary, totalConsumption]);

  return {
    chartData,
    totalConsumption,
    isLoading,
    summary,
  };
}
