import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.css";
import "../css/style.css";
import "../css/gd.css";
import { Component } from "react";

import logo from "./logo.png"
import axios from "axios";

export class Content extends Component{
    constructor(props){
        super(props)
        this.state=
            {
            preload:"preloader-wrap p-3 preloders",
            feed:"row feed-body feed",
            isloader:true,
            error:null,
            linknews:this.props.linknews
            }
         
    }
    // componentDidMount(){
    //     this.timers= setTimeout( ()=>{
    //          this.setState({feed:"row feed-body feed" ,preload:"preloader-wrap p-3 preloders"})
    //     }
    //         ,5000) 
    // }
   
    
    // componentWillUnmount(){
    //     clearTimeout(this.timers)
    // }
    
  
    render(){
        const article=this.props.articles.map((article)=>
            // <div classname="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
            //         <div classname="card-body p-0 d-flex">
            //             <figure classname="avatar me-3"><img alt="image"  classname="shadow-sm rounded-circle w45"/></figure>
            //             <h4 classname="fw-700 text-grey-900 font-xssss mt-1"><span classname="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">2 hour ago</span></h4>
            //             <a href="#" class="ms-auto"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>

            //         </div>
            //         <div classname="card-body p-0 me-lg-5">
            //             <h4 classname="fw-100 text-grey-500 lh-26 font-xssss w-100 mb-2"> <a href="#" classname="fw-600 text-primary ms-2">voir plus</a></h4>
            //         </div>
            //         <div classname="card-body d-block p-0 mb-3">
            //             <div classname="row ps-2 pe-2">
            //                 <div classname="col-sm-12 p-1"><a href="" data-lightbox="roadtr"><img src={article.urlToImage} width={550} classname="rounded-3 w-100" alt="image"/></a></div>                                        
            //             </div>
            //         </div>
            //         <div classname="card-body d-flex p-0">
            //         <a href="#" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i><span className="d-none-xss font-xsss">Auteur:</span> {article.author}</a>
            //             <a href={article.url} target="_blank" classname="ms-auto d-flex align-items-center fw-800 text-grey-600 text-dark lh-26 font-xssss"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classname="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
            //                 <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            //                 <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            //             </svg><span classname="d-none-xs pl-2">Aller sur le site</span></a>
            //         </div>
            // </div>

                <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3" key={article._id} >
                <div className="card-body p-0 d-flex">
                    <figure className="avatar me-3"><img src={logo} alt="image"  className="shadow-sm rounded-xl w45"/></figure>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">{article.title} <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500" style={{color:"blue"}}>{article.topic}</span></h4>
                    {/* <a href="#" className="ms-auto"><i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a> */}
                </div>
                <div className="card-body p-0 me-lg-5">
                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">{article.excerpt} <a href={article.link}  target="_blank" className="fw-600 text-primary ms-2">See more</a></p>
                </div>
                <div className="card-body d-block p-0 mb-3">
                    <div className="row ps-2 pe-2">
                        <div className="col-sm-12 p-1"><a href={article.link} target="_blank" data-lightbox="roadtr"><img src={article.media} className="rounded-3 w-100" alt="image"/></a></div>                                        
                    </div>
                </div>
                <div className="card-body d-flex p-0">
                    <a href="#" className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"><i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i><b>Auteur: </b>{article.author}</a>
                    <div className="emoji-wrap">
                        <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item"><i className="em em---1"></i> </li>
                            <li className="emoji list-inline-item"><i className="em em-angry"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-anguished"></i> </li>
                            <li className="emoji list-inline-item"><i className="em em-astonished"></i> </li>
                            <li className="emoji list-inline-item"><i className="em em-blush"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-clap"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-cry"></i></li>
                            <li className="emoji list-inline-item"><i className="em em-full_moon_with_face"></i></li>
                        </ul>
                    </div>
                    <a href="#" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i><span className="d-none-xss"></span></a>
                    <a href="#" className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span className="d-none-xs"></span></a>
                    <a href={article.link} target="_blank" className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                             <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                             <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg></i><span className="d-none-xs">view</span></a>
                
                </div>
                </div>
            
        )
        
        return(
     <>
        <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">

                    <div className={this.state.preload} >
                        <div className="box shimmer">
                            <div className="lines">
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                            </div>
                        </div>
                        <div className="box shimmer mb-3">
                            <div className="lines">
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                            </div>
                        </div>
                        <div className="box shimmer">
                            <div className="lines">
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                            </div>
                        </div>
                    </div> 
                    <div className={this.state.feed}>
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                            <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                                {article}
                                <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
                                    <div className="snippet mt-2 ms-auto me-auto" data-title=".dot-typing">
                                        <div className="stage">
                                            <div className="dot-typing"></div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>               
                        <div className="col-xl-4 col-xxl-3 col-lg-3 ps-lg-0 datechoice">
                            <div className="card w-100 shadow-xss rounded-xxl border-0  ">
                                <div className="card-body  align-items-center ">
                                    <h4 className="fw-500 mb-0  text-grey-500 text-center mb-3">Choisir une date</h4>
                                    {/* <!-- <a href="default-member.html" className="fw-600 ms-auto font-xssss text-primary">See all</a> --> */}
                                    <div className="form-date mb-1 top-content">
                                        <div  className="md-form md-outline input-with-post-icon fw-500 mb-10  text-grey-500">
                                            <input placeholder="Select date" type="date" id="example" className="form-control"/>
                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>

        )
    }
}export default Content