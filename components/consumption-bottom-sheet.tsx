import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GLOBAL_STYLES } from "constants/styles";
import { useEnergyData } from "hooks/useEnergyData";
import { useCallback, useMemo, useRef, useState } from "react";
import { Dimensions, LayoutChangeEvent } from "react-native";
import { ConsumptionCard } from "./consumption-card";

export function ConsumptionBottomSheet() {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  const { chartData, totalConsumption, isLoading } = useEnergyData();

  const minHeight = SCREEN_HEIGHT * 0.6;
  const [contentHeight, setContentHeight] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => {
    return minHeight >= contentHeight
      ? [minHeight]
      : [minHeight, contentHeight];
  }, [minHeight, contentHeight]);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setContentHeight(event.nativeEvent.layout.height);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <BottomSheetView style={GLOBAL_STYLES.bottomSheet}>
        <ConsumptionCard
          consumption={totalConsumption}
          chartData={chartData}
          onLayout={onLayout}
          isLoading={isLoading}
        />
      </BottomSheetView>
    </BottomSheet>
  );
}
