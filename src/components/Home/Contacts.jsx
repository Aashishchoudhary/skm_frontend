

function Contacts() {
  return (
    <div>
       <div className="container text-center ">
        <div className="row  ml-5">
          <div className="col ">
            <div className=" mt-3 text-start ">
              <h6 className="text-uppercase  fs-3 text-danger ">Contact Us</h6>
              <p>
                <i class="bi bi-geo-alt-fill text-danger fs-4"></i>{" "}
                <i className=" fs-4  ms-5"> New York, NY 10012, US
              </i></p>
              <p>
                <i class="bi bi-envelope-arrow-up-fill text-danger fs-4  "></i>
                <i className="fas fa-envelope ms-5"></i>{" "}
                <a
                  className="text-dark fs-4"
                  href="mailto:navneetyadav.4444@gmail.com"
                >
                  <strong>navneetyadav.4444@gmail.com</strong>
                </a>
              </p>

              <p>
              <i class="bi bi-telephone-fill fs-4 text-danger"></i>{" "}
                <a className="text-danger fs-4 ms-5" href="callto:+91 9997835388">
                  +91 9997835388
                </a>
              </p>
            </div>
          </div>

          <div className="col border  rounded " style={{"backgroundColor":"#d5cdcd"}}>
          <form className="container mt-5 mb-4">
          <div class="mb-3 w-75">
    
    <input type="text" class="form-control" placeholder="name" id="namefield" />
  </div>
  <div class="mb-3 w-75">
   
    <input type="email" class="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3 w-75">
    
    <input type="text" class="form-control" placeholder="Contact Number" id="phone" />
  </div>
  
  <div class="mb-3 w-75">
    
    <input type="text" class="form-control" placeholder="institution" id="institution" />
  </div>
  <div class="mb-3 w-75">
    
    <textarea type="text" class="form-control" placeholder="Message" id="message" />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
