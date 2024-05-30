import Image from "next/image";
import director from "../../../../public/images/director.jpg";
import Contacts from "@/components/Home/Contacts";

function page() {
  return (
    <>
      <div className="container text-center ">
        <div className="row align-items-center">
          <div className="col fs-1 text-danger">
            <strong>
              Welcome To SKM Abroad Consultancy Services <br />
              Your Most Trusted Consultant Partner
            </strong>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 ">
        <div className="row align-items-center">
          <div className="col fs-1 text-info-emphasis">
            <strong>About Us</strong>
          </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col fs-4 text-info-emphasis">
            <p>
              SKM Abroad Consultancy focus is on the individual from
              appreciating self-expression to encouraging original thought and
              from fostering personal achievement to ensuring Long-term success.
              The road to your future begins here at Weston Overseas . we will
              help you reach beyond all the barriers to discover yourself and
              help you to become the kind of individual, you always
              knew you could be!
            </p>
          </div>
        </div>
      </div>
      <p className="container text-center fs-1 mt-4 text-danger">
        Director&#39;s Message
      </p>
      <div className="container text-center  mt-4">
        <div className="row align-items-center">
          <div className="col">
            <Image src={director} width={550} height={450}   alt='image'></Image>
          </div>
          <div className="col ">
            <p className="fs-4">
              Welcome to SKM Abroad Consultancy, your trusted partner in
              immigration. I&#39;m Navneet yadav, and I have great regard for
              leading a team of committed professionals who are passionate about
              helping you achieve your dreams of living in a new country.
              Immigration is more than just a process; it&#39;s a life-changing
              journey. It&#39;s a journey filled with dreams, aspirations, and the
              hope for a brighter future. At SKM Abroad Consultancy, we
              understand the significance of this journey, and we are here to
              walk it with you every step of the way.
              <br />
              <br />
              Our commitment to you is not just professional; it&#39;s personal. We
              recognize that behind every application and document is a unique
              story, a family&#39;s future, or an individual&#39;s dream. We take that
              responsibility to heart, and we treat your case with the same care
              and attention we would give to our own.
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center ">
        <div className="row align-items-center">
          <div className="col ">
            <p className="fs-1 text-danger">
              {" "}
              <strong>Our Mission </strong>
            </p>
            <p className="fs-5">
              Our motto is to ease the immigration process for the people,
              providing them with personalized guidance, expert knowledge, and
              unfaltering support. We believe that diversity and the free
              exchange of ideas and cultures enrich our world. By facilitating
              immigration, we contribute to the building of a more
              interconnected, diverse, and global community.
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center mb-5 ">
        <div className="row align-items-center">
          <div className="col">
            <p className="fs-1 text-danger">Services We Offer</p>{" "}
            <strong></strong>
            <p className="fs-4">
              <p>
                <strong>1. Immigration Consultation:</strong>
                We offer comprehensive consultation services to assess your
                eligibility and provide guidance on the best immigration
                pathways.
              </p>
              <p>
                <strong>2. Visa Processing:</strong>
                Our experts will assist you in preparing and submitting visa
                applications, whether for work, study, family reunification, or
                other purposes.
              </p>
              <p>
                <strong>3. Citizenship Applications:</strong>
                We help eligible permanent residents become citizens of their
                new home country.
              </p>
              <p>
                <strong>4. Work Permits:</strong>
                If you&#39;re seeking employment in a new country, we&#39;ll assist you
                in securing the necessary work permits.
              </p>
              <p>
                <strong>5.Family Sponsorship:</strong>
                Our team specializes in reuniting families, helping you sponsor
                your loved ones to join you in your new home.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Contacts/>
    </>
  );
}

export default page;
