import styled from 'styled-components';
import tw from 'twin.macro';
import colors from 'tailwindcss/colors';

import { BorderType } from '../../../application/common/border-type';
import { Color } from '../../../application/common/color';
import { InputVariant } from '../../../application/common/input-variant';
import { Size } from '../../../application/common/size';

type InputProps = {
  inputSize?: Size;
  borderType?: BorderType;
  variant?: InputVariant;
  color?: Color;
};

const getSize = (size: Size) => {
  switch (true) {
    case size === 'small':
      return tw`text-sm px-2 py-1`;
    case size === 'large':
      return tw`text-lg px-4 py-2`;
    default:
      return tw`px-3 py-1.5`;
  }
};

const borderTypeStyle = (borderType: BorderType) => {
  switch (true) {
    case borderType === 'square':
      return tw``;
    case borderType === 'rounded':
      return tw`rounded-full`;
    default:
      return tw`rounded`;
  }
};

const variantStyle = (variant: InputVariant, color: Color) => {
  const selectedColor = colors[color][500];
  switch (true) {
    default:
      return {
        ...tw`border `,
        ':focus': {
          borderColor: selectedColor,
          borderWidth: 2,
        },
      };
  }
};

export const Input = styled.input`
  ${({
    inputSize = 'normal',
    borderType = 'default',
    variant = 'outlined',
    color = 'blue',
  }: InputProps) => ({
    ...getSize(inputSize),
    ...borderTypeStyle(borderType),
    ...variantStyle(variant, color),
  })}
`;
