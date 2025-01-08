import React, { PropsWithChildren } from "react";
import { Pressable, PressableProps, Text } from "react-native";

type ButtonProps = PropsWithChildren<PressableProps>;

export default function ButtonUI({ children, ...props }: ButtonProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#065677e0" : "#065677",
          padding: 10,
          borderRadius: 10,
        },
      ]}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
