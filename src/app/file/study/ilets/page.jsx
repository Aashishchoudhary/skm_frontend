import ilets from '../../../../../public/flags/ilets.jpg'
import Image from 'next/image'
function page() {
  return (
    <>
      <div className="container text-center ">
        <div className="row align-items-center">
          <div className="col">
            <Image className='image' src={ilets} width={550} height={450}   alt='image'></Image>
          </div>
          <div className="col ">
            <h3 className="text-danger">
              Unlock Your Global Education Journey with SKM ABROAD
            </h3>
            <p className="fs-5">
              SKM ABROAD empowers ambitious students to pursue their educational
              dreams abroad. We bridge the gap between prestigious universities
              and colleges worldwide and aspiring individuals who yearn for an
              enriching international academic experience. Our dedicated team of
              experts provides personalized guidance and support throughout your
              entire application process.
            </p>
          </div>
        </div>
      </div> 
    </>
  )
}

export default page
