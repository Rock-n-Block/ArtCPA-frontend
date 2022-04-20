import { toast, ToastOptions } from 'react-toastify';
import { Toastify, ToastifyProps } from 'components/Toastify';
import 'assets/styles/index.scss';

export default function setNotification(props: ToastifyProps, options?: ToastOptions) {
  toast[props.type](<Toastify {...props} />, { ...options, type: 'default' });
}
