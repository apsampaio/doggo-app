import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "../../global/colors";

interface InputProps {
  name: string;
  placeholder: string;
  isSecret?: boolean;
  icon: keyof typeof Feather.glyphMap;
  style?: StyleProp<ViewStyle>;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
  placeholder,
  isSecret = false,
  style,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(isSecret);
  const [isFocused, setIsFocused] = useState(false);
  const handleTogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isFocused ? colors.purple : colors.greyTab,
        },
        style,
      ]}
    >
      <View style={styles.icon}>
        <Feather
          name={icon}
          size={24}
          color={isFocused ? colors.purple : colors.darkGrey}
        />
      </View>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        secureTextEntry={passwordVisible}
        placeholderTextColor={colors.darkGrey}
      />
      {isSecret && (
        <TouchableOpacity
          onPress={handleTogglePasswordVisible}
          style={styles.secret}
        >
          {passwordVisible ? (
            <Feather name="eye" size={24} color={colors.darkGrey} />
          ) : (
            <Feather name="eye-off" size={24} color={colors.purple} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export { Input };
