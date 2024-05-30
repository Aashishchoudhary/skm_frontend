import Image from "next/image"
import work from '../../../../../public/flags/work.jpg'
function page() {
    return (
      <div>
        <div className="container text-center mt-5 ">
          <div className="row align-items-center">
            <h2 className="text-danger">Work Permit</h2>
            <div className="col mt-5">
              <Image
                src={
                  work
                }
                width={550}
                height={450}
                alt='image'
              ></Image>
              <div className="container ">
                <p className="fs-4  text-start mt-5">
                If you&#39;re seeking employment in a new country, we&#39;ll assist you in  securing the necessary work permits.
  
                Focus on your dreams while we handle the details.  Contact us today and let us make ease in your  journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default page
  