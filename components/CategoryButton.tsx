import React from 'react';
import { Button, useTheme } from '@rneui/themed';

type CategoryButtonProps = {
  title: string;
  onPress: () => void;
  isActive: boolean;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({ title, onPress, isActive }) => {
  const { theme } = useTheme();

  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={{
        backgroundColor: isActive ? '#5D6DBE' : theme.colors.white,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
      containerStyle={{
        flexBasis: '22%',
        marginHorizontal: 6,
      }}
      titleStyle={{
        color: isActive ? theme.colors.white : '#5E5F6599',
        fontFamily: 'Pretendard_600',
      }}
    />
  );
};