import tw from 'twin.macro';
import styled from 'styled-components';

import { TextType } from '../../../application/common/text-type';

type TextProps = {
  type?: TextType;
};

const getType = (type: TextType) => {
  const bold = tw`font-bold`;

  switch (true) {
    case type === 'h1':
      return { ...tw`text-6xl`, ...bold };
    case type === 'h2':
      return { ...tw`text-5xl`, ...bold };
    case type === 'h3':
      return { ...tw`text-4xl`, ...bold };
    case type === 'h4':
      return { ...tw`text-3xl`, ...bold };
    case type === 'h5':
      return { ...tw`text-2xl`, ...bold };
    case type === 'h6':
      return { ...tw`text-xl`, ...bold };
    case type === 'leadText':
      return tw`text-2xl`;
    case type === 'small':
      return tw`text-xs`;
    default:
      return {};
  }
};

export const Text = styled.p`
  ${({ type = 'paragraph' }: TextProps) => ({ ...getType(type) })}
`;
