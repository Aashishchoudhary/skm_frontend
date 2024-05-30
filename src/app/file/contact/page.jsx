import Contacts from "@/components/Home/Contacts"

function page() {
  return (
    <div>
      <Contacts/>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <h2 className="text-danger"> birla auditorium </h2>
          <div className="col mt-5">
          <a href="https://maps.app.goo.gl/DPqCLJYC2964kASg7"><img 
              src={
                "https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg"
              }
              width={750}
              height={450}
            ></img></a> 
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
