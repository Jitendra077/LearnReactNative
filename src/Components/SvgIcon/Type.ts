import Colors from '@/Common/Colors';
import { SvgFiles } from '@/Common/Constants/SvgFiles';
import { LayoutChangeEvent, ViewStyle } from 'react-native';
export type Svg = keyof typeof SvgFiles;

export interface SvgProps {
  width?: number;
  height?: number;
  name: Svg;
  fill?: keyof typeof Colors | string;
  stroke?: keyof typeof Colors | string;
  disable?: boolean;
  onPress?: () => void;
  testID?: string;
  containerStyle?: ViewStyle;
  onLayout?: (event: LayoutChangeEvent) => void;
}
