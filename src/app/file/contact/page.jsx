import Contacts from "@/components/Home/Contacts"
import Image from "next/image"
import map from '../../../../public/flags/map.jpg'
function page() {
  return (
    <div>
      <Contacts/>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <h2 className="text-danger"> birla auditorium </h2>
          <div className="col mt-5">
          <a href="https://maps.app.goo.gl/DPqCLJYC2964kASg7"><Image className="imgtag"
              src={
                map
              }
              width={750}
              height={450}
              alt='image'
            ></Image></a> 
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
