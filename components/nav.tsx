const Nav = () => {
  return (
    <nav className='min-h-screen bg-gray-800 py-9 border-r border-gray-700'>
      <div className='grid justify-center items-center mb-14'>
        <img className='w-10' src='./assets/logos/tauri.png' alt='' />
      </div>
      <div className='text-gray-400 font-bold text-center'>
        <div>
          <h2 className='uppercase text-xs tracking-[2.4px] mb-4'>Dashboard</h2>
          <ul className='flex flex-col text-sm'>
            <li className='mx-2 py-2 cursor-pointer hover:text-indigo-600 transition-colors rounded-full hover:bg-white active:bg-indigo-600 active:text-white'>
              Menu Item
            </li>
            <li className='mx-2 py-2 cursor-pointer hover:text-indigo-600 transition-colors rounded-full hover:bg-white active:bg-indigo-600 active:text-white'>
              Menu Item
            </li>
            <li className='mx-2 py-2 cursor-pointer hover:text-indigo-600 transition-colors rounded-full hover:bg-white active:bg-indigo-600 active:text-white'>
              Menu Item
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
