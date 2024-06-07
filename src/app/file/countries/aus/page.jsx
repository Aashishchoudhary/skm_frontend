import Image from "next/image"
import work from '../../../../../public/flags/studyAus.jpg'
function page() {
    return (
      <div>
        <div className="container text-center mt-5 ">
          <div className="row align-items-center">
            <h2 className="text-danger">Study in Austrila</h2>
            <div className="col mt-5">
              <Image className="imgtag"
                src={
                  work
                }
                width={550}
                height={450}
                alt='image'
              ></Image>
              <div className="container ">
                <p className="fs-4  text-start mt-5">
                For many, Australia means kangaroos in the outback, or the Sydney Opera House and Harbour Bridge at New Year. But when you look beyond those, you&#39;ll discover why so many international students choose to study in Australia, and it often ranks in the top 10 best countries to study abroad.  

The setting of international cities in a vast expanse of natural beauty is one attraction. But it boasts world-class universities, a diverse and welcoming population, and one of the world&#39;s most generous sets of grants and bursaries. And it&#39;s all backed by a national culture that welcomes visitors so much, they often decide to stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default page
  