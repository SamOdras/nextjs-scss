import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} /> )
}

// MyApp.getInitialProps = async (appContext) => {
//   const { ctx, router } = appContext;

//   // if (router.route.includes("/admin/") && !amsi) {
//   //   // Redirect to login page if not authenticated
//   //   ctx.res.writeHead(302, { Location: "/" });
//   //   ctx.res.end();
//   // }
//   return {};
// };

export default MyApp;
