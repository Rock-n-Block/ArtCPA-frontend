import React from 'react';
import { H1, H2, H3 } from './Headings';
import Text from './Text';

export default {
  title: 'basic-components/Typography',
  component: Text,
  subcomponents: { H1, H2, H3 },
};

export const Default: React.FC = () => (
  <>
    <H1 weight="bold">H1 Headline 48 px | inter | Bold</H1>
    <H2 weight="semiBold">H2 Headline 32 px | inter | Semibold</H2>
    <H3>H3 Headline 24 px | inter </H3>
    <Text>Body S 14 px | inter </Text>
    <Text size="m">Body M 16 px | inter </Text>
    <Text size="l">Body L 18 px | inter </Text>
  </>
);
