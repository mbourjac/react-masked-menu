import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="min-h-screen p-[--main-padding]">
      <main className="flex flex-col gap-36">
        <Outlet />
      </main>
    </div>
  );
};
