import SiteTitle from "../../../helpers/SiteTitle/SiteTitle";

const NotFoundPage = () => {
  return (
    <>
      <SiteTitle title="Page Not Found!" />
      <div className="container text-center">
        <h2>404</h2>
        <div>Page Not Found!</div>
      </div>
    </>
  );
};

export default NotFoundPage;
