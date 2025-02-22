import { ConsumptionBottomSheet } from "components/consumption-bottom-sheet";
import { GLOBAL_STYLES } from "constants/styles";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  fetchConsumptionSummaryByUser,
  fetchUsers,
  selectMember,
  setPeriod,
} from "redux/features/energy-slice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export default function EnergyMix() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { selectedMember, selectedPeriod, users } = useAppSelector(
    (state) => state.energy
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0 && !selectedMember) {
      dispatch(selectMember(users[0].id));
    }
  }, [users, selectedMember, dispatch]);

  useEffect(() => {
    if (selectedMember) {
      dispatch(
        fetchConsumptionSummaryByUser({
          userId: selectedMember,
          period: selectedPeriod,
        })
      );
    }
  }, [selectedMember, selectedPeriod, dispatch]);

  const periods = [
    { label: "Yesterday", value: "yesterday" },
    { label: "Last week", value: "lastWeek" },
    { label: "Last month", value: "lastMonth" },
  ];

  return (
    <View style={[GLOBAL_STYLES.container]}>
      <View style={GLOBAL_STYLES.header}>
        <Text style={GLOBAL_STYLES.headerTitle}>Energy mix</Text>
      </View>

      <View style={GLOBAL_STYLES.contractSelector}>
        <Text style={GLOBAL_STYLES.sectionTitle}>Contract selection</Text>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          items={users.map((user) => ({
            label: user.username,
            value: user.id,
          }))}
          value={selectedMember}
          setValue={(callback) =>
            dispatch(selectMember(callback(selectedMember)))
          }
          multiple={false}
          onChangeValue={(value: string | null) =>
            value && dispatch(selectMember(value))
          }
          style={[GLOBAL_STYLES.dropdown, { elevation: 1 }]}
          textStyle={GLOBAL_STYLES.dropdownText}
          containerStyle={{ elevation: 1 }}
          placeholder="Select a user"
        />
      </View>
      <View style={GLOBAL_STYLES.timeSelector}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.value}
            style={[
              GLOBAL_STYLES.timePeriodButton,
              selectedPeriod === period.value &&
                GLOBAL_STYLES.timePeriodButtonActive,
            ]}
            onPress={() => dispatch(setPeriod(period.value))}
          >
            <Text
              style={[
                GLOBAL_STYLES.timePeriodText,
                selectedPeriod === period.value &&
                  GLOBAL_STYLES.timePeriodTextActive,
              ]}
            >
              {period.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ConsumptionBottomSheet />
    </View>
  );
}
