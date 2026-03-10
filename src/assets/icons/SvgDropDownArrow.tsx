import Svg, { Path } from 'react-native-svg';

const SvgDropDownArrow = (props: any) => (
  <Svg width={29} height={29} fill="none" {...props}>
    <Path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeOpacity={0.5}
      strokeWidth={2}
      d="m20.5 11.5-6 6-6-6"
    />
  </Svg>
);
export default SvgDropDownArrow;
