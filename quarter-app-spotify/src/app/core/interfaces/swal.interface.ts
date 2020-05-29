export interface SwalParams {
  title: string;
  icon: 'warning' | 'error' | 'success' | 'info' | 'question';
  text?: string;
  position?: 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonColor?: string;
  confirmButtonText?: string;
  cancelButtonColor?: string,
  cancelButtonText?: string;
  showCloseButton?: boolean;
  focusConfirm?: boolean;
  html?: string;
  timer?: number;
}
