import SettingsButton from './Button-Icons/SettingsButton';
import SignOutButton from './Button-Icons/SignOutButton';
import NotificationsButton from './Button-Icons/NotificationButton';

const Header = () => {
  return (
    <header className='px-4 py-9 bg-gray-800 text-white border-b border-gray-700 flex justify-between'>
      <h1 className='font-bold'>Next + Tauri</h1>
      <div className='flex items-center gap-4'>
        <SettingsButton />
        <NotificationsButton />
        <SignOutButton />
      </div>
    </header>
  );
};

export default Header;
