"use client";
import axios from "axios";
import { useState } from "react";
function Contacts() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [contact, setContact] = useState("");
  const [institue, setInstitue] = useState("");
  const [msg, setMsg] = useState("");

  const saveData = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://13.233.143.188/postdata/", {
      name: name,
      mail: mail,
      contact: contact,
      institue: institue,
      message: msg,
    });
    const response = await res.data;
    console.log(response);
  };

  return (
    <div>
      <div className="container text-center ">
        <div className="row  ml-5">
          <div className="col ">
            <div className=" mt-3 text-start ">
              <h6 className="text-uppercase  fs-3 text-danger ">Contact Us</h6>
              <p>
                <i className="bi bi-geo-alt-fill text-danger fs-4"></i>{" "}
                <i className=" fs-4  ms-5"> NH-62 Near Goga gate Bikaner Rajasthan </i>
              </p>
              <p>
                <i className="bi bi-envelope-arrow-up-fill text-danger fs-4  "></i>
                <i className="fas fa-envelope ms-5"></i>{" "}
                <a
                  className="text-dark fs-4"
                  href="mailto:navneetyadav.4444@gmail.com"
                >
                  <strong>navneetyadav.4444@gmail.com</strong>
                </a>
              </p>

              <p>
                <i className="bi bi-telephone-fill fs-4 text-danger"></i>
                <a
                  className="text-danger fs-4 ms-5"
                  href="callto:+919997835388"
                >
                  +91 9997835388
                </a>
              </p>
            </div>
          </div>

          <div
            className="col border  rounded "
            style={{ backgroundColor: "#d5cdcd" }}
          >
            <form onSubmit={saveData} className="container mt-5 mb-4">
              <div className="mb-3 w-75">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  id="namefield"
                />
              </div>
              <div className="mb-3 w-75">
                <input
                  type="email"
                  className="form-control"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 w-75">
                <input
                  type="text"
                  className="form-control"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Contact Number"
                  id="phone"
                />
              </div>

              <div className="mb-3 w-75">
                <input
                  type="text"
                  className="form-control"
                  value={institue}
                  onChange={(e) => setInstitue(e.target.value)}
                  placeholder="institution"
                  id="institution"
                />
              </div>
              <div className="mb-3 w-75">
                <textarea
                  type="text"
                  className="form-control"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Message"
                  id="message"
                />
              </div>

              <input
                type="submit"
                value='submit'
                className="btn btn-primary"
             />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

// git clone https://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@github.com/Aashishchoudhary/skm.git


