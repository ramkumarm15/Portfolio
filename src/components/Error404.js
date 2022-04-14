import React from "react";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <>
      <main className="d-flex align-items-center min-vh-100 py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="text-center">
                <img
                  src="https://ik.imagekit.io/6r9yfcrxjjr/404-error_WAdqDxSPe4.png"
                  height="160"
                  alt="404Error"
                />
                <h4 className="text-uppercase text-danger fw-bolder">
                  Page not found
                </h4>
                <p className="fs-4 text-dark">
                  Sorry, the page you are searching not found.
                </p>
                <Link to='/' className="btn btn-primary">Go back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error404;