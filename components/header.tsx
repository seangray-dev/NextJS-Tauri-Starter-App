import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  return (
    <header className='px-4 py-9 bg-gray-800 text-white border-b border-gray-700 flex justify-between'>
      <h1 className='font-bold'>Next + Tauri</h1>
      <button
        className='text-sm text-gray-400 hover:text-white transition-colors'
        onClick={() => signOut()}>
        Sign Out
      </button>
    </header>
  );
};

export default Header;
