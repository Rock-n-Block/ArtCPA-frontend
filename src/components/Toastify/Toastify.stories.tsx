import React from 'react';
import setNotification from 'utils/setNotification';
import { toastifyPropsMocked } from './Toastify.mock';
import { Toastify } from './Toastify';

export default {
  title: 'components/Toastify',
  component: Toastify,
};

export const Default: React.FC = () => {
  return (
    <>
      <button
        type="button"
        onClick={() => setNotification({
          type: 'warning',
          message: 'Message',
        })}
      >
        CallNotification
      </button>
      {toastifyPropsMocked.map((toastify) => (
        <Toastify {...toastify} />
      ))}
    </>
  );
};
