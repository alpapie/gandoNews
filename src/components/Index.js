import { Component } from "react";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.css";
import "../css/style.css";
import "../css/gd.css";
import axios from "axios";
import logo from "./logo.png"
import ReactGA from 'react-ga';
import Content from "./Content"


ReactGA.initialize('UA-158365918-1');
export class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            classNamevalues:"color-theme-blue mont-font",
            navigation:"navigation scroll-bar ",
            bntcl:"nav-menu me-0 ms-2 ",
            requetcategorie:[],
            requetfr:"fr",
            search:"",
            searchhandler:"",
            link:"https://api.newscatcherapi.com/v2/latest_headlines?lang=fr",
            articles:[]
        }
        this.categories=[
            { id:"world",item:"Monde"},
            
            { id:"business",item:"BUSINESS"},
            { id:"tech",item:"TECHNOLOGIE"},
            
            { id:"science",item:"SCIENCE"},
            { id:"sport",item:"SPORTS"},
             ]
       this.lang=[
            {item:"français",id:"fr"},
            {item:"english",id:"en"}, 
            {item:"arabic",id:"ar"},
            {item:"spanish",id:"es"},
            
        ]
        
        this.ntn=document.getElementsByClassName('atbtn')
        this.categorie=[]
      
    }

    componentDidMount(){
      ReactGA.pageview(window.location.pathname + window.location.search);
       const headers = {
           "x-api-key": process.env.REACT_APP_TOKEN,
           }
       
        axios.get(this.state.link,{headers}).then(res=>{
   
                   this.setState({articles:res.data.articles,isloader:false})
                  
        })
       }
     componentWillUnmount(){
         this.state.articles=[]
     }

    querysearch(e){
        e.preventDefault()
      
        const headers = {
            "x-api-key": process.env.REACT_APP_TOKEN,
            }
        
        axios.get("https://api.newscatcherapi.com/v2/search?q="+e.target.value+"&lang="+this.state.requetfr+"&topic="+this.state.requetcategorie,{headers}).then(res=>{
                    this.setState({articles:res.data.articles})
         })
    }
    querysearchlanler(e){
        this.setState({
            searchhandler:e.target.value
        })
    }
    querylang(e){
        if (e.target.checked) {
            
            this.setState({
                requetfr: e.target.value
            })
            const headers = {
                "x-api-key": process.env.REACT_APP_TOKEN,
                }

                if (this.state.searchhandler) {
                        axios.get("https://api.newscatcherapi.com/v2/search?q="+this.state.searchhandler+"&lang="+e.target.value+"&topic="+this.state.requetcategorie,{headers}).then(res=>{
                this.setState({articles:res.data.articles})
                })
                }else{
                    axios.get("https://api.newscatcherapi.com/v2/latest_headlines?lang="+e.target.value+"&topic="+this.state.requetcategorie,{headers}).then(res=>{
                        this.setState({articles:res.data.articles})
                  })
                }
            
        
        }
    }
    querycategorei(e){
        if (e.target.checked) {
            // this.categorie.push(e.target.value)
            this.setState({
                requetcategorie:e.target.value,

            })
            const headers = {
                "x-api-key": process.env.REACT_APP_TOKEN,
                }

                if (this.state.searchhandler) {
                        axios.get("https://api.newscatcherapi.com/v2/search?q="+this.state.searchhandler+"&lang="+this.state.requetfr+"&topic="+e.target.value,{headers}).then(res=>{
                this.setState({articles:res.data.articles})
                })
                }else{
                    axios.get("https://api.newscatcherapi.com/v2/latest_headlines?lang="+this.state.requetfr+"&topic="+e.target.value,{headers}).then(res=>{
                        this.setState({articles:res.data.articles})
                  })
                }
            
        }
    }
    handlchange(e){
        if(e.target.checked){
            this.setState({
                classNamevalues:"theme-dark"
            })
        }else{
            this.setState({
                classNamevalues:"color-theme-blue mont-font"
            })
        }
    }
    oudite(){
        if(this.ntn.length>0){
            this.setState({
                navigation:"navigation scroll-bar",
                bntcl:"nav-menu me-0 ms-2"
            })
        }
        if(this.ntn.length===0){
        this.setState({
            navigation:"navigation scroll-bar nav-active",
            bntcl:"nav-menu me-0 ms-2 active atbtn",
        })
       };
   }
  
    render(){
        console.log("link dans en dors du state "+this.state.link)

        const langitem=this.lang.map((lang)=>
            <div className="form-check mb-1 top-content">
                <li>
                    <label className="item-radio fw-600 font-xssss text-grey-500">
                         
                        {lang.id ==="fr" ? <input type="radio" name="lang" value={lang.id}/>:
                        <input type="radio" name="lang" value={lang.id}/>}
                        <span className="circle-color " >{lang.item}</span>
                    </label>
                </li>
            </div>
        )
        const categorieitem=this.categories.map((categorie)=>
                // <div className="form-check mb-1 top-content">
                //     <div className="d-inline mt-1">
                //         <label className="toggle "><input type="checkbox" name={categorie.item} value={categorie.id} /><span className="toggle-icon ml-5"></span></label>
                //     </div>
                //     <h4 className="d-inline fw-600 font-xssss text-grey-500 mont-font">{categorie.item}</h4>
                // </div>
                 <div className="form-check mb-1 top-content">
                 <li>
                     <label className="item-radio fw-600 font-xssss text-grey-500">
                          
                         <input type="radio" name="cagt" value={categorie.id}/>
                         
                         <span className="circle-color " >{categorie.item}</span>
                     </label>
                 </li>
             </div>
        )
        return(
 <>
             
{/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link> */}
<link rel="icon" type="image/png" sizes="16x16" href={logo}></link>
      <title>Gando News</title>
            <body className={this.state.classNamevalues}>
                <div className="nav-header bg-white shadow-xs border-0">

                    <div className="nav-top">
                        <a href="#">
                            <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Gando News </span>
                        </a>
                        <div className="p-2 text-center ms-3 mobileapp cursor-pointer " >
                            <h4 className="d-inline font-xssss mont-font fw-700">Dark Mode</h4>

                            <label className="toggle toggle-dark">
                                <input type="checkbox" onChange={this.handlchange.bind(this)}/><span className="toggle-icon"></span>
                            </label>

                        </div>
                        <button className={this.state.bntcl} onClick={this.oudite.bind(this)}></button>
                    </div>

                    <form action="#" className="float-left header-search fsearch " onSubmit={this.querysearch.bind(this)}>
                        <div className="form-group mb-0 icon-input d-flex">
                            <input type="text" placeholder="Start typing to search.."  name="search" value={this.state.searchhandler} onChange={this.querysearchlanler.bind(this)} className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"/>
                            <button href="#" className="btn-round-md ms-2   bg-greylight theme-dark-bg">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                    </form>

                    <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon menu-icon cursor-pointer fsearch2 ">
                        <h4 className="d-inline font-xssss mont-font fw-700">Dark Mode</h4>
                        <label className="toggle toggle-dark"><input type="checkbox" onChange={this.handlchange.bind(this)} /><span className="toggle-icon"></span></label>
                    
                    </div>
                
                </div>
                
                <nav className={this.state.navigation}>
                    <div className="container ps-0 pe-0" id="navrigth">
                        <div className="nav-content">
                           
                                <form className="search-form-2 pt-3 d-flex" onSubmit={this.querysearch.bind(this)}> 
                                    <input type="text" name="search" className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" value={this.state.searchhandler}  onChange={this.querysearchlanler.bind(this)} placeholder="Search here."/> 
                                    <button href="#" className="btn-round-md ms-2  bg-greylight theme-dark-bg rounded-3 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </button>
                                
                                </form>
                            <form className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2 " onChange={this.querylang.bind(this)}>
                                <div className="nav-caption fw-600 text-grey-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                                </svg>Langue
                                </div>
                               
                                {langitem}
                                
                            </form>
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                                <div className="nav-caption fw-600  text-grey-500">Categorie</div>
                                
                                <form className="form-check mb-1 top-content" onChange={this.querycategorei.bind(this)}>
                                  {categorieitem}
                                </form>
                            </div>
                            </div>
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                                <div className="nav-caption fw-600  text-grey-500">Pays</div>
                            
                                
                            </div>
                        </div>
                </nav>
                { this.state.articles ?<Content  articles={this.state.articles}/>:
                    <div className="main-content right-chat-active">
                        <div className="middle-sidebar-bottom">
                            <div className="middle-sidebar-left text-center">
            
                            
                                aucune information trouver
                            </div>
                        </div>
                    </div>
                }
                
            </body>    
         </>
        )
    }
}
export default Index