import Image from "next/image"
import work from '../../../../../public/flags/studyChina.jpg'
function page() {
    return (
      <div>
        <div className="container text-center mt-5 ">
          <div className="row align-items-center">
            <h2 className="text-danger">Sttuy in china</h2>
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
                Are you looking for a unique and incomparable experience as an international student? If you are thinking of studying abroad, then  China is the choice you should make. China or officially The People&#39;s Republic of China (PRC), located in Eastern Asia, is the most populous country on earth and also the country with the longest written history of 3,500 years, as it is one of the world&#39;s first civilizations. But what do you already know about this huge Asian country, the homeland of philosopher Confucius? 

China is spread around 9.6 million kilometers, making the country the third largest by area. It also has the most international borders, as it is neighboring 14 countries and officially consists of 56 ethnic groups. If you study in China, you will experience a geographical diversity like no other: You can visit numerous  mountains, big ports and picturesque cities or even deserts! Another great advantage if you choose to study in China will be the unforgettable experience of visiting The Great Wall of China or the highest mountain in the world, Mount Everest with its highest point at 8,849 meters. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default page
  