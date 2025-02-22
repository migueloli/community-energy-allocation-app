import { View } from "react-native";
import { DonutChart } from "react-native-circular-chart";
import { GLOBAL_STYLES } from "../constants/styles";

interface EnergyChartProps {
  data: {
    value: number;
    color: string;
    label: string;
  }[];
}

export function EnergyChart({ data }: EnergyChartProps) {
  // Add safety check for empty data
  if (!data || data.length === 0) {
    return <View style={GLOBAL_STYLES.chartContainer} />;
  }

  const chartData = data.map((item) => ({
    value: item.value || 0, // Ensure value is never undefined
    color: item.color,
    name: item.label,
  }));

  // Ensure there's at least one non-zero value
  const hasValidData = chartData.some((item) => item.value > 0);
  if (!hasValidData) {
    return <View style={GLOBAL_STYLES.chartContainer} />;
  }

  return (
    <View style={GLOBAL_STYLES.chartContainer}>
      <DonutChart
        data={chartData}
        radius={100}
        containerWidth={250}
        containerHeight={220}
        strokeWidth={20}
      />
    </View>
  );
}
