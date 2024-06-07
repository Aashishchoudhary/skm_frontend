import Image from "next/image"
import uk from '../../../../../public/flags/studyUk.jpg'
function page() {
    return (
      <div>
        <div className="container text-center mt-5 ">
          <div className="row align-items-center">
            <h1 className="text-danger">Study in UK</h1>
            <div className="col mt-5">
              <Image className="imgtag"
                src={
                  uk
                }
                width={750}
                height={450}
                alt='image'
              ></Image>
              <div className="container ">
                <p className="fs-4  text-start mt-5">
                The UK is a world leader in many areas of education including engineering, science, art and design, business and management, law and finance. The UK is reputation and legacy as a world centre for scientific research makes it a magnet for some of the very best thinkers in the world. With only one per cent of the world&#39;s population, the UK is responsible for eight per cent of global scientific publications.

The UK offers a world-renowned education system with qualifications that can make a real difference to your future. It attracts over 600,000 international students each year to a variety of programmes, ranging from English language courses to PhDs.

The UK education system gives students the freedom to combine courses and subjects from different areas of studies, so you can tailor your degree to your own needs and interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default page
  