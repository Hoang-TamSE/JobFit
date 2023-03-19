import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBInputGroup,
} from "mdb-react-ui-kit";

import 'react-perfect-scrollbar/dist/css/styles.css';

import PerfectScrollbar from 'react-perfect-scrollbar';

export default function App_2() {
  const [file, setFile] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [userMesss, setUserMesss] = useState([]);
  const [botMess, setBotMess] = useState([]);
  const onSubmitMess = (e) => {
    setUrlImage(arr => [...arr, e.value.target])
  }

  const [jd, setjd] = useState("");
  const onJDChange = (e) => {
    setjd(e.target.value)
  }
  var indents = userMesss.map(function (i) {
    return (
      <div className="d-flex flex-row justify-content-end">
        <div>
          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
            {i}
          </p>

        </div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "100%" }}
        />
      </div>
    );
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage !== '') {
      setUserMesss([...userMesss, newMessage]);
      console.log(userMesss);
      setNewMessage('');
      setTimeout(() => setBotMess([...botMess, "bot ramdom test okiiii"]), 1000);

      

    }

  };
  const callBot = () => {
    setUserMesss([...userMesss, "tâmmmmmm"]);
  }
  const onFileChange = (e) => {
    if (e.target.files) {
      // if(e.target.files[0].type === "application/pdf" || e.target.files[0].type === "image/png" )
      //   setFile(e.target.files[0])
      // else
      //   return
      setFile(e.target.files[0])

    }
  }
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  const [viewPdf, setViewPdf] = useState(null);

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    setUrlImage(URL.createObjectURL(file))
    const cvBase64 = await toBase64(file);
    const base64ImageData = cvBase64.substring(cvBase64.indexOf(',') + 1);
    console.log(JSON.stringify({
      "job_requirements": jd,
      "resume_info": base64ImageData
    }))


    // 👇 Uploading the file using the fetch API to the server
    fetch('http://103.160.76.63:5000/chat', {
      method: 'POST',
      body: JSON.stringify({ "job_requirements": jd, "resume_info": base64ImageData }),
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#CDC4F9" }}>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard id="chat3" style={{ borderRadius: "15px" }}>
            <MDBCardBody >
              <MDBRow>
                <MDBCol md="4" lg="4" xl="4" className="mb-4 mb-md-0">
                  <input type="file" onChange={onFileChange} />
                  <div>{file && `${file.name} - ${file.type}`}</div>
                  <div style={{ margin: "10px" }}><p>Job Description</p></div>
                  <textarea style={{ width: "350px", height: "450px" }} placeholder="Input JD..." onChange={onJDChange} />
                  <br></br>
                  <input type="button" value="Submit" className="btn btn-success btn-lg" onClick={handleUploadClick} />
                </MDBCol>
                <MDBCol md="4" lg="4" xl="4" className="mb-4 mb-md-0 pdf-container">
                  <img src={urlImage} style={{ height: "100%", width: "100%" }} />
                </MDBCol>
                <MDBCol md="4" lg="4" xl="4">
                  <PerfectScrollbar
                    suppressScrollX
                    style={{ position: "relative", height: "400px" }}
                    className="pt-3 pe-3"
                  >
                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <div>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>

                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>

                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                    {userMesss.map(function (i, index) {
                        return (
                          <div>
                            <div className="d-flex flex-row justify-content-end">
                              <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                  {i}
                                </p>

                              </div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1"
                                style={{ width: "45px", height: "100%" }}
                              />
                            </div>

                            <div className="d-flex flex-row justify-content-start">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1"
                                style={{ width: "45px", height: "100%" }}
                              />
                              <div>
                                <p
                                  className="small p-2 ms-3 mb-1 rounded-3"
                                  style={{ backgroundColor: "#f5f6f7" }}
                                >
                                  {botMess[index]}
                                </p>

                              </div>
                            </div>
                          </div>


                        );
                    })}
                  </PerfectScrollbar>
                  <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 3"
                      style={{ width: "40px", height: "100%" }}
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput2"
                      placeholder="Type message"
                      value={newMessage}
                      onChange={(event) => setNewMessage(event.target.value)}
                    />
                    <a className="ms-1 text-muted" href="#!">
                      <MDBIcon fas icon="paperclip" />
                    </a>
                    <a className="ms-3 text-muted" href="#!">
                      <MDBIcon fas icon="smile" />
                    </a>
                    <a className="ms-3" href="/" onClick={handleSubmit}>
                      <MDBIcon fas icon="paper-plane" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}