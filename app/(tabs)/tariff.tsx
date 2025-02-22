import { GLOBAL_STYLES } from "constants/styles";
import { Text, View } from "react-native";

export default function TariffOutlook() {
  return (
    <View style={GLOBAL_STYLES.container}>
      <View style={GLOBAL_STYLES.header}>
        <Text style={GLOBAL_STYLES.headerTitle}>Tarif Ausblick</Text>
      </View>
    </View>
  );
}
