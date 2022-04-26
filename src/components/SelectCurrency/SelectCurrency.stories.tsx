import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectCurrency } from './SelectCurrency';
import { selectCurrencyPropsMocked } from './SelectCurrency.mock';

export default {
  title: 'components/SelectCurrency',
  component: SelectCurrency,
} as ComponentMeta<typeof SelectCurrency>;

const Template: ComponentStory<typeof SelectCurrency> = () => (
  <div style={{ background: 'black', width: '100vw', height: '100vh' }}>
    <SelectCurrency {...selectCurrencyPropsMocked} />
  </div>
);
export const Default = Template.bind({});

Default.args = selectCurrencyPropsMocked;
