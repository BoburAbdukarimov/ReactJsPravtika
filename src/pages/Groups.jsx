import React, { useState } from 'react';
import photo from  "../components/style/IMG_3471.jpg"
import Fade from 'react-reveal/Fade';
import "./main.scss";
import ModalVideo from 'react-modal-video'

const Groups = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='News w-100 '>
            <div className="container">
                <div className="row d-flex  justify-content-between w-100">
                    <div className="col-md-6 d-flex justify-content-center justify-content-center text-center">  
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RJR2BpNXNUU" onClose={() => setOpen(false)} />
                        <div className="img">
                        <Fade left>
                            <img onClick={()=> setOpen(true)} src={photo} alt="photo" />
                            <p>bunyodkor news 2020 <br /> <span>12.02.2020</span></p> 
                        </Fade>
                        </div>
                    </div>
                    <div className=" col-md-6 d-flex justify-content-center"> 
                        <div className="img">
                            <Fade right>
                            <img onClick={()=> setOpen(true)} src={photo} alt="photo" />
                            <p>bunyodkor news 2020 <br /> <span>12.02.2020</span></p>
                            </Fade>

                        </div>
                        </div>
                </div>
                <div className="row m-auto ">
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="imgs">
                        <Fade left>
                            <img onClick={()=> setOpen(true)} src={photo} alt="photo" />
                            <p>bunyodkor news 2020 <br /> <span>12.02.2020</span></p> 

                        </Fade>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="imgs">
                        <Fade bottom>
                            <img onClick={()=> setOpen(true)} src={photo} alt="photo" />
                            <p>bunyodkor news 2020 <br /> <span>12.02.2020</span></p> 

                        </Fade>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="imgs">
                        <Fade right>
                            <img onClick={()=> setOpen(true)} src={photo} alt="photo" />
                            <p>bunyodkor news 2020 <br /> <span>12.02.2020</span></p> 
                            
                        </Fade>
                        </div>
                    </div>
                    </div>
                    <div className="button text-center mb-3">
                            <Fade bottom>
                            <button className='btn btn-primary d-print-inline-block mt-3 text-capitalize'><i class="bi bi-arrow-down-circle"></i>     all news</button>

                            </Fade>
                    </div>
                </div>
            </div>
        
    );
};

export default Groups;