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
    <div style={{ background: 'black' }}>
      <H1 weight="bold">H1 Headline 48 px | Bold</H1>
      <H2 weight="semiBold">H2 Headline 32 px | Semibold</H2>
      <H3>H3 Headline 24 px </H3>
      <Text>Body S 14 px </Text>
      <Text size="m">Body M 16 px </Text>
      <Text size="l">Body L 18 px </Text>

    </div>
  </>
);
