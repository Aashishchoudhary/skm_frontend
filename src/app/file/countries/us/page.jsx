import Image from "next/image"
import work from '../../../../../public/flags/studyUs.jpg'
function page() {
    return (
      <div>
        <div className="container text-center mt-5 ">
          <div className="row align-items-center">
            <h1 className="text-danger">Study in USA</h1>
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
                The USA has always remained the top choice for higher studies among international students. According to the US Citizenship and Immigration Services (USCIS), 4,65,700+ Indian students went to the USA for higher studies in 2022. The number of Indian students in the US increased by more than 19% in 2022. The US is home to the maximum number of top universities in the world. There is always an eagerness among international students for going to the US and experience the higher education system there. 

Studying in the USA
US universities have carved a niche for themselves in STEM courses. International students looking to pursue higher studies in STEM courses prefer to go to the USA over other options. Also, it is not just the STEM courses, students looking to study business, management or arts courses can also find top universities in the US.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default page
  