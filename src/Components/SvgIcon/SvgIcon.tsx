import { SvgFiles } from '@/Common/Constants/SvgFiles';
import React from 'react';
import { Pressable } from 'react-native';
import { SvgProps } from '@/Components/SvgIcon/Type';

const DEFAULT_SIZE = 32;

export const SvgIcon: React.FC<SvgProps> = ({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  name,
  fill,
  stroke,
  disable,
  onPress,
  testID,
  containerStyle,
  onLayout,
}: SvgProps) => {
  const fillColor = fill || undefined;
  const strokeColor = stroke || undefined;
  const Svg = SvgFiles[name];
  return (
    <Pressable
      style={containerStyle}
      disabled={disable}
      onPress={onPress}
      onLayout={onLayout}
      testID={testID}
    >
      <Svg
        width={width}
        height={height}
        fill={fillColor}
        stroke={strokeColor}
      />
    </Pressable>
  );
};
