import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import LoginStore from '../stores/LoginStore';

export default function useLoginForm() {
  const store = container.resolve(LoginStore);
  return useStore(store);
}
