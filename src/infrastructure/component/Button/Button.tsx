import tw from 'twin.macro';
import styled from 'styled-components';
import colors from 'tailwindcss/colors';

import { Size } from '../../../application/common/size';
import { Variant } from '../../../application/common/variant';
import { Color } from '../../../application/common/color';
import { BorderType } from '../../../application/common/border-type';

type ButtonProps = {
  size?: Size;
  variant?: Variant;
  color?: Color;
  borderType?: BorderType;
  iconOnly?: boolean;
  disabled?: boolean;
};

const sizeStyle = (size: Size, iconOnly: boolean) => {
  switch (true) {
    case size === 'small':
      return iconOnly
        ? tw`w-8 h-8 p-0 flex items-center justify-center rounded-full`
        : tw`px-2 py-0.5 text-xs`;
    case size === 'large':
      return iconOnly
        ? tw`w-12 h-12 p-0 flex items-center justify-center rounded-full`
        : tw`px-8 py-3 text-base`;
    // normal
    default:
      return iconOnly
        ? tw`w-10 h-10 p-0 flex items-center justify-center rounded-full`
        : tw`px-4 py-1.5 text-sm`;
  }
};

const variantStyle = (variant: Variant, color: Color, disabled: boolean) => {
  const selectedColor = `${colors[color][500]}`;
  const disabledColor = `${colors.gray[300]}`;
  const hoveredColor = `${colors[color][50]}`;

  switch (true) {
    case variant === 'link':
      return {
        color: disabled ? disabledColor : selectedColor,
        ...(disabled
          ? {}
          : {
              ':hover': {
                backgroundColor: hoveredColor,
              },
            }),
      };
    case variant === 'outline':
      return {
        color: disabled ? disabledColor : selectedColor,
        borderWidth: '1px',
        borderColor: disabled ? disabledColor : selectedColor,
        ...(disabled
          ? {}
          : {
              ':hover': {
                backgroundColor: hoveredColor,
              },
            }),
      };
    default:
      return {
        ...tw`text-white shadow-md`,
        backgroundColor: disabled ? disabledColor : selectedColor,
        ...(disabled
          ? {}
          : {
              ':hover': {
                ...tw`hover:shadow-xl`,
                backgroundColor: `${colors[color][600]}`,
              },
            }),
      };
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

const Button = styled.button`
  ${({
    size = 'normal',
    color = 'blue',
    variant = 'solid',
    borderType = 'default',
    iconOnly = false,
    disabled = false,
  }: ButtonProps) => ({
    ...sizeStyle(size, iconOnly),
    ...variantStyle(variant, color, disabled),
    ...borderTypeStyle(borderType),
    ...(disabled ? tw`cursor-default` : {}),
  })}
`;

export default Button;
