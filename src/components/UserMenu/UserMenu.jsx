import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth()
  return (
    <div>
      <p>Hi, </p>
      <button>Logout</button>
    </div>
  );
};
