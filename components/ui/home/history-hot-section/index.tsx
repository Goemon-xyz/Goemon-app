import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { View, Text } from "react-native";
import HistorySection from "./historySection";
import HotSection from "./hot";
import { ThemedText } from "@/components/ThemedText";
import ClockSVG from "@/assets/icons/home/history-hot-section/clock";
import DoubleArrowSVG from "@/assets/icons/home/history-hot-section/doubleArrow";
import FireSVG from "@/assets/icons/home/history-hot-section/fire";

function HistoryAndHotSection() {
  return (
    <ThemedView>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 12,
            }}
          >
            <ClockSVG />
            <ThemedText style={{ margin: 4, fontSize: 16, fontWeight: "bold" }}>
              History
            </ThemedText>
          </View>
          <DoubleArrowSVG />
        </View>
        <HistorySection />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 12,
            }}
          >
            <FireSVG />
            <ThemedText style={{ margin: 4, fontSize: 16, fontWeight: "bold" }}>
              Hot
            </ThemedText>
          </View>
          <DoubleArrowSVG />
        </View>
        <HotSection />
      </View>
    </ThemedView>
  );
}

export default HistoryAndHotSection;
