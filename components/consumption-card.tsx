// ConsumptionCard.tsx
import { COLORS } from "constants/colors";
import { GLOBAL_STYLES } from "constants/styles";
import { ActivityIndicator, LayoutChangeEvent, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EnergyType } from "types/dto";
import { EnergyChart } from "./energy-chart";
import { EnergySourceIcon } from "./energy-source-icon";

interface ConsumptionCardProps {
  consumption: number;
  chartData: Array<{
    value: number;
    color: string;
    label: string;
    source: EnergyType;
  }>;
  isLoading?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export function ConsumptionCard({
  consumption,
  chartData,
  isLoading,
  onLayout,
}: ConsumptionCardProps) {
  // Handle loading state
  if (isLoading) {
    return (
      <View
        style={[
          GLOBAL_STYLES.consumptionCard,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  // Handle empty data state
  if (!chartData || chartData.length === 0) {
    return (
      <View
        style={[
          GLOBAL_STYLES.consumptionCard,
          { justifyContent: "center", alignItems: "center" },
        ]}
        onLayout={onLayout}
      >
        <Text style={GLOBAL_STYLES.consumptionTitle}>
          Your consumption: {consumption.toFixed(2)} kWh
        </Text>
        <Text style={GLOBAL_STYLES.consumptionTitle}>
          No energy data available
        </Text>
      </View>
    );
  }

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        GLOBAL_STYLES.consumptionCard,
        { marginBottom: insets.bottom + 60 },
      ]}
      onLayout={onLayout}
    >
      <Text style={GLOBAL_STYLES.consumptionTitle}>
        Your consumption: {consumption.toFixed(2)} kWh
      </Text>

      <EnergyChart data={chartData} />

      {chartData.map(({ value, color, label, source }) => (
        <View style={GLOBAL_STYLES.gridSourceContainer} key={`label-${label}`}>
          <EnergySourceIcon source={source} size={24} />
          <Text style={[GLOBAL_STYLES.sourceLabel, { color }]}>{label}</Text>
          <Text style={[GLOBAL_STYLES.sourceValue, { color }]}>
            {value.toFixed(2)} %
          </Text>
        </View>
      ))}
    </View>
  );
}
