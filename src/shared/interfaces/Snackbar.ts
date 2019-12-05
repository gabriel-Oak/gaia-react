export default interface Snackbar {
  open: boolean;
  message?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number
}