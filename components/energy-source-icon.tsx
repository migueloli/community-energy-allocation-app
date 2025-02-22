import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, ENERGY_SOURCE_COLORS } from "constants/colors";
import { EnergyType } from "types/dto";

interface EnergySourceIconProps {
  source: EnergyType;
  size?: number;
}

export function EnergySourceIcon({ source, size = 24 }: EnergySourceIconProps) {
  const iconName = (() => {
    switch (source) {
      case EnergyType.SOLAR:
        return "solar-power";
      case EnergyType.WIND:
        return "wind-turbine";
      case EnergyType.HYDRO:
        return "water";
      case EnergyType.BIOMASS:
        return "leaf";
      case EnergyType.COMMUNITY:
        return "account-group";
      case EnergyType.GRID:
        return "power-plug";
    }
  })();
  const color = ENERGY_SOURCE_COLORS[source.toLowerCase()] ?? COLORS.primary;

  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
}
