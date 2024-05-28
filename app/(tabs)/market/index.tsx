import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

function Market() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>market</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

export default Market;
