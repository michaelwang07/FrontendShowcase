import React from 'react';

function home() {
    return (
      <div>
        <title>Frontend</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="stylesheet" href="style.css" />
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container">
            <a href className="navbar-brand">CSC 648 - 06</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navmenu">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="template1" className="nav-link">Team Page</a>
                </li>
                <li className="nav-item">
                  <a href="template2" className="nav-link">template2</a>
                </li>
                <li className="nav-item">
                  <a href="template3" className="nav-link">template3</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Showcase */}
        <section className="bg-dark text-light p-1 text-center">
          <div className="containter">
          </div>
        </section>
        {/* Team Members */}
        <section id="members" className="p-5 bg-secondary">
          <div className="container">
            <h3 className="text-center text-white mb-5">
              Software Engineering class SFSU
              <br />Fall, 2022
              <br />Section 03
              <br />Team 6
            </h3>
            {/*<p class="lead text-center text-white mb-5">
            We have a well rounded team with members from a varitey of diverse backgrounds </p>*/}
            <div className="row g-4">
              <div className="col-md-6 col-lg-2">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    {/* member 1*/}
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle mb-3" alt="" />
                    <a href>
                      <h5 className="card-title mb-3">Bobby Roots</h5>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, architecto natus enim quod reiciendis.
                    </p>
                    <a href="#"><i className="bi bi-github" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    {/* member 2 */}
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle mb-3" alt="" />
                    <a href>
                      <h5 className="card-title mb-3">Michael Davichick</h5>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, architecto natus enim quod reiciendis.
                    </p>
                    <a href="#"><i className="bi bi-github" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    {/* member 3 */}
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle mb-3" alt="" />
                    <a href>
                      <h5 className="card-title mb-3">William Rattan</h5>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, architecto natus enim quod reiciendis.
                    </p>
                    <a href="#"><i className="bi bi-github" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    {/* member 4 */}
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle mb-3" alt="" />
                    <a href>
                      <h5 className="card-title mb-3">Michael Wang</h5>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, architecto natus enim quod reiciendis.
                    </p>
                    <a href="#"><i className="bi bi-github" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    {/* member 5 */}
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle mb-3" alt="" />
                    <a href>
                      <h5 className="card-title mb-3">Michael Almeda</h5>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, architecto natus enim quod reiciendis.
                    </p>
                    <a href="#"><i className="bi bi-github" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    {/* member 5 */}
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle mb-3" alt="" />
                    <a href>
                      <h5 className="card-title mb-3">Almeda</h5>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, architecto natus enim quod reiciendis.
                    </p>
                    <a href="#"><i className="bi bi-github" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container">
            <a href className="navbar-brand">CSC 648 - 06</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navmenu">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="template1" className="nav-link">Team Page</a>
                </li>
                <li className="nav-item">
                  <a href="template2" className="nav-link">template2</a>
                </li>
                <li className="nav-item">
                  <a href="template3" className="nav-link">template3</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Showcase */}
        <section className="bg-dark text-light p-1 text-center">
          <div className="containter">
          </div>
        </section>
        {/* Profile */}
        <div className="containers">
          <div className="row b-flex justify-content-center">
            <div className="col-md-10 mt-5 pt-5">
              <div className="row z-depth-3">
                <div className="col-sm-4 bg-info round-left">
                  <div className="card-block text-center text-white">
                    <i className="fas fa-user-tie fa-7x mt-5" />
                    <h2 className="font-weight-bold mt-4" />
                    <p>Role</p>
                  </div>
                </div>
                <div className="col-sm-8 bg-white rounded-right">
                  <h3 className="mt-3 text-center">Information</h3>
                  <hr style={{width: '50%'}} />
                  <div className="row">
                    <div className="row ml-2 mr-2 mb-4">
                      <div className="col-sm-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci corrupti temporibus ducimus recusandae excepturi dolorem at atque quae vitae illum ipsum earum tempora nisi veritatis, inventore beatae ut aperiam.</p>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-weight-bold">Email:</p>
                        <h6 className="text-muted">JoeShmo@mail.com</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-weight-bold">Discord:</p>
                        <h6 className="text-muted">JoeShmo@mail.com</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default home;