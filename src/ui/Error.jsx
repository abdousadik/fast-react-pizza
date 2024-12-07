import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
      <CartOverview />
    </div>
  );
}

export default Error;
