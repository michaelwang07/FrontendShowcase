var profile = React.createClass({
   render: function() {
     return (
       <div>
         <title>Prifle Card</title>
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
 });