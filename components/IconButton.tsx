// IconButton.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Import other icon sets as needed

type IconType = 'Ionicons' | 'MaterialIcons' | 'FontAwesome'; // Add more as needed

interface IconButtonProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
  onPress: () => void;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({ 
  type,
  name, 
  size = 24, 
  color = 'white', 
  onPress, 
  style 
}) => {
  const getIconComponent = () => {
    switch (type) {
      case 'Ionicons':
        return <Ionicons name={name} size={size} color={color} />;
      case 'MaterialIcons':
        return <MaterialIcons name={name} size={size} color={color} />;
      case 'FontAwesome':
        return <FontAwesome name={name} size={size} color={color} />;
      // Add more cases for other icon types
      default:
        return <Ionicons name={name} size={size} color={color} />;
    }
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {getIconComponent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
