import { Outlet, ScrollRestoration } from 'react-router-dom';
import { MaskedMenu } from '../components/MaskedMenu/MaskedMenu';

export const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <MaskedMenu>
        <div className="min-h-screen p-[--main-padding]">
          <main className="flex flex-col gap-36">
            <Outlet />
          </main>
        </div>
      </MaskedMenu>
    </>
  );
};
