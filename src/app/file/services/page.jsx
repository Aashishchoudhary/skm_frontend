import Image from "next/image";
import work from '../../../../public/flags/work.jpg'
import visa from '../../../../public/flags/visa.jpg'
import family from '../../../../public/flags/visa.jpg'
import immigration from '../../../../public/flags/immigration.jpg'
import citizen from '../../../../public/flags/citizen.jpg'
function page() {
  return (
    <>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <h2 className="text-danger">Immigration Consultation</h2>
          <div className="col mt-5">
            <Image className="imgtag"
              src={
                immigration
              }
              width={550}
              height={450}
              alt='image'
            ></Image>
            <div className="container ">
              <p className="fs-4  text-start mt-5">
                Feeling overwhelmed by immigration options? We&#39;re here to guide
                you. Our experienced immigration consultants offer comprehensive
                consultations to assess your eligibility and create a
                personalized plan. We&#39;ll analyze your situation, break down
                complex processes, and recommend the most suitable pathway for
                your goals. Whether it&#39;s studying, working, or reuniting with
                family abroad, we equip you with the knowledge and resources to
                navigate the immigration landscape with confidence. Take the
                first step towards your new life – contact us today!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <h2 className="text-danger">Visa Processing</h2>
          <div className="col mt-5">
            <Image className="imgtag"
              src={
                visa
              }
              width={550}
              height={450}
              alt='image'
            ></Image>
            <div className="container ">
              <p className="fs-4  text-start mt-5">
              Does the world of visa applications leave you feeling overwhelmed? Let us be your guide! We offer comprehensive visa processing services to streamline your journey abroad. Our experienced team will:
              <ul>
                <li><strong>Assess your eligibility: 
                    </strong>We ensure you meet the specific visa requirements for your chosen destination.
</li>
                <li><strong>Gather and organize documents:  </strong>We handle the paperwork, ensuring all necessary documents are accurate and complete.</li>
                <li><strong>Navigate the application process: </strong>From filling out forms to communicating with officials, we provide expert support every step of the way.</li>
                <li><strong>Represent you effectively: </strong>We ensure your application is presented in the best possible light, maximizing your chances of success.</li>
              </ul>
              Focus on your dreams while we handle the details.  Contact us today and let us simplify your visa processing journey!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <h2 className="text-danger">Citizenship Applications
</h2>
          <div className="col mt-5">
            <Image className="imgtag"
              src={
                citizen
              }
              width={550}
              height={450}
              alt='image'
            ></Image>
            <div className="container ">
              <p className="fs-4  text-start mt-5">
              Dreaming of becoming a citizen? We&#39;re here to simplify the process. Our team of experienced professionals provides comprehensive assistance with citizenship applications. We offer:
              <ul>
                <li><strong>Eligibility Assessments:


 
                    </strong>Unsure if you qualify? We&#39;ll evaluate your situation based on current regulations.
</li>
             
                <li><strong>Application Guidance: </strong> We&#39;ll guide you through the entire application process, ensuring you submit all necessary documents correctly.</li>
                <li><strong>Expert Support: </strong>Our team is here to answer your questions, address concerns, and ensure a smooth application journey.</li>
              </ul>
              Don&#39;t navigate the complexities alone. Contact us today and let our expertise help you achieve your citizenship goals!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <h2 className="text-danger">Family Sponsorship
</h2>
          <div className="col mt-5">
            <Image className="imgtag"
              src={
                family
              }
              width={550}
              height={450}
              alt='image'
            ></Image>
            <div className="container ">
              <p className="fs-4  text-start mt-5">
              Our team specializes in reuniting families, helping you sponsor your loved ones to join you in your new home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <h2 className="text-danger">Work Permit</h2>
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
              If you&#39;re seeking employment in a new country, we&#39;ll assist you in  securing the necessary work permits.

              Focus on your dreams while we handle the details.  Contact us today and let us make ease in your  journey!
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default page;
