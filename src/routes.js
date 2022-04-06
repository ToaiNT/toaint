import BodyContainer from 'containers/BodyContainer/BodyContainer';
import CartFeature from 'features/Cart/CartFeature';
import ConfirmNumberPhonePage from 'page/ConfirmNumberPhonePage/ConfirmNumberPhonePage';
import KhuyenMaiPage from 'page/KhuyenMaiPage/KhuyenMaiPage';
import NotFoundPage from 'page/NotFoundPage/NotFoundPage';
import PreOrderPage from 'page/PreOrderPage/PreOrderPage';
import ProductInfoPage from 'page/ProductInfoPage/ProductInfoPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <BodyContainer />,
  },
  {
    path: '/pre-order',
    exact: true,
    main: () => <PreOrderPage />,
  },
  {
    path: '/pre-order/confirm',
    exact: false,
    main: () => <ConfirmNumberPhonePage />,
  },
  {
    path: '/khuyen-mai',
    exact: false,
    main: () => <KhuyenMaiPage />,
  },
  {
    path: '/cart',
    exact: false,
    main: () => <CartFeature />,
  },
  {
    path: '/product/id',
    exact: false,
    main: () => <ProductInfoPage />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
