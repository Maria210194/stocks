import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GraphPoint, LineGraph, SelectionDot } from "react-native-graph";
import timeSeries from "@/assets/data/timeseries.json";
import { MonoText } from "./StyledText";

const Graph = () => {
  const points: GraphPoint[] = timeSeries.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  }));

  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(
    points[points.length - 1]
  );

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point);
  };

  return (
    <View>
      <LineGraph
        points={points}
        animated={true}
        style={{ width: "100%", height: 300, marginTop: 40 }}
        color="#3A1772"
        enablePanGesture
        gradientFillColors={["#000080", "black"]}
        onPointSelected={onPointSelected}
        lineThickness={7}
        enableIndicator
        indicatorPulsating
        enableFadeInMask
        //SelectionDot={SelectionDot}
      />
      <View
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MonoText
          style={{
            fontSize: 20,
            color: "white",
            paddingTop: 70,
            paddingLeft: 5,
          }}
        >
          $ {selectedPoint?.value.toFixed(1)}
        </MonoText>
        <MonoText
          style={{
            fontSize: 14,
            color: "#f5f5f5",
            paddingTop: 5,
            paddingLeft: 5,
          }}
        >
          {selectedPoint?.date.toDateString(1)}
        </MonoText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Graph;
