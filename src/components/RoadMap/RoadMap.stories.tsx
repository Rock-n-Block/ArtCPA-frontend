import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RoadMap } from './RoadMap';
import { roadMapPropsMocked } from './RoadMap.mock';

export default {
  title: 'components/RoadMap',
  component: RoadMap,
} as ComponentMeta<typeof RoadMap>;

const Template: ComponentStory<typeof RoadMap> = () => (
  <div style={{ background: 'black' }}>
    <RoadMap {...roadMapPropsMocked} />
  </div>
);
export const Default = Template.bind({});

Default.args = roadMapPropsMocked;
