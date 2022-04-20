import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Modal } from './Modal';
import { modalPropsMocked } from './Modal.mock';

export default {
  title: 'components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button type="button" onClick={onButtonClickHandler}> Open modal </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={onButtonClickHandler}
        isBackground
        size="md"
      />
    </>
  );
};
export const Default = Template.bind({});

Default.args = modalPropsMocked;
