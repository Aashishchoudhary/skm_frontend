import Image from "next/image"
import work from '../../../../../public/flags/studyCan.jpg'
function page() {
    return (
      <div>
        <div className="container text-center mt-5 ">
          <div className="row align-items-center">
            <h2 className="text-danger">Study in Canada</h2>
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
                Canada is one of the most preferred destinations for international students. According to the Immigration, Refugees and Citizenship Canada (IRCC) data for the year 2022, Canada saw 551,405 international students from 184 countries. Out of these, 1,83,310 students were Indian students. As of December 31, 2022, India ranked amongst the top 10 countries in terms of source nations for foreign students studying in Canada.

Every year, Canada welcomes hundreds of thousands of international students from around the globe. Some of the reasons to study in Canada include a high standard of living, flexible and quality education options, a diverse and inclusive environment, affordable education, and long-term return on investment. As per the U.S. News & World Report 2022, Canada ranks at 3rd place globally for the best quality of life. Let us look at an overview of studying in Canada for international students.

Many top-ranked universities of Canada have made it to the top 200 in the world according to the Times Higher Education and QS WUR rankings for 2024. With ample state-of-the-art education institutes present and affordable tuition fees, Canada has become a major study destination for international students who want to pursue higher education. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default page
  