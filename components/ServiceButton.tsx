import React from 'react';
import { Button, Icon } from '@rneui/themed';

// CustomButton 컴포넌트
export default function ServiceButton({ title, icon, onPress, isActive }) {
  return (
    <Button
      title={title}
      icon={<Icon name={icon} type="font-awesome" size={32} color={isActive ? '#FFFFFF' : '#5D6DBE'} />}
      buttonStyle={{
        backgroundColor: isActive ? '#5D6DBE' : '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        height: 100,
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      titleStyle={{
        fontSize: 14,
        color: isActive ? '#FFFFFF' : '#000000',
      }}
      containerStyle={{ alignItems: 'center', width: 120, marginBottom: 20 }}
      onPress={onPress}
    />
  );
}