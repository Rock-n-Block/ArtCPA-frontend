import { useState, useCallback } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from 'components';
import { Slider } from './Slider';
import { sliderPropsMocked } from './Slider.mock';

export default {
  title: 'components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const [sliderValue, setSliderValue] = useState(sliderPropsMocked.min);

  const handleSliderChange = useCallback((value: number) => {
    setSliderValue(value);
  }, []);

  const [rangeValue, setRangeValue] = useState([sliderPropsMocked.min, sliderPropsMocked.max]);

  const handleRangeChange = useCallback((value) => {
    setRangeValue(value);
  }, []);
  return (
    <div style={{ padding: '50px' }}>
      <Text>{`Slider value is: ${sliderValue}`}</Text>
      <Slider
        {...args}
        onAfterChange={handleSliderChange}
      />
      <Text>{`Range value is: ${rangeValue}`}</Text>
      <Slider
        value={rangeValue}
        onAfterChange={handleRangeChange}
      />
    </div>
  );
};
export const Default = Template.bind({});

Default.args = sliderPropsMocked;
