import { useSession, signIn } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className='min-h-screen bg-gray-800 grid grid-cols-1 items-center justify-center'>
        <div className='mx-auto text-center text-white'>
          <img
            className='w-[50px] mx-auto mb-10'
            src='./assets/logos/tauri.png'
            alt=''
          />
          <button
            className='tracking-wider bg-gray-700 py-4 px-4 rounded-full border border-gray-400 hover:bg-white hover:text-gray-700 transition-colors'
            onClick={() => signIn()}>
            Log In / Register
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Login;
