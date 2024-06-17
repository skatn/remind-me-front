import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toast as ToastType } from '../../types/toast';
import { useContext } from 'react';
import { ToastContext } from '../../contexts/ToastContext';

interface ToastProps {
  toast: ToastType;
}

const Toast = ({ toast }: ToastProps) => {
  const { removeToast } = useContext(ToastContext);

  return (
    <div
      className={`flex items-center gap-[16px] rounded-[16px] p-[16px] shadow-md ${getBackgroundColor(toast.type)}`}
    >
      {toast.type === 'info' && (
        <FontAwesomeIcon
          icon={faCircleInfo}
          className="size-[24px] text-highlight-1"
        />
      )}
      {toast.type === 'success' && (
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="size-[24px] text-support-success-2"
        />
      )}
      {toast.type === 'warning' && (
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="size-[24px] text-support-warning-2"
        />
      )}
      {toast.type === 'error' && (
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="size-[24px] text-support-error-2"
        />
      )}

      <div className="flex-1">
        <span className="text-heading-sm">{toast.title}</span>
        <p className="text-body-sm">{toast.description}</p>
      </div>

      <button onClick={() => removeToast(toast.id!)}>
        <FontAwesomeIcon
          icon={faXmark}
          className="size-[14px] text-neutral-dark-4"
        />
      </button>
    </div>
  );
};

const getBackgroundColor = (type: 'info' | 'success' | 'warning' | 'error') => {
  switch (type) {
    case 'info':
      return 'bg-highlight-5';
    case 'success':
      return 'bg-support-success-3';
    case 'warning':
      return 'bg-support-warning-3';
    case 'error':
      return 'bg-support-error-3';
  }
};

export default Toast;
