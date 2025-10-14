import type { PropsWithChildren } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default Provider;
