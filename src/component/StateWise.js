import React, { Component } from 'react'
import axios from 'axios';

 class StateWise extends Component {
     constructor(props){
        super(props)
        
        this.state = {
            posts: [],
            errorMsg : '',
            arryLength :0,
            globals: '',
            LastUpdatedTime: '',
            CountryList: []
        }
       

        
     }
     
componentDidMount(){

    //this.timer = setInterval(() => {

    axios.get('https://api.covid19india.org/data.json')
   // axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data.statewise)
        // console.log(response.data.Global.length)
        // console.log(response.data.Countries.length)
        // this.setState({arryLength : response.data.Countries.length})
         this.setState({posts: response.data.statewise})
         console.log(response.data.statewise[1].lastupdatedtime)
         this.setState({LastUpdatedTime: response.data.statewise[11].lastupdatedtime})
        // console.log("Country" );
        // this.setState({CountryList :response.data.Countries[0].Country})
        
         this.setState({globals: response.data.statewise[0]})
    })
    .catch(error => {
        
        console.log(error)
        this.setState({errorMsg: 'Error retriving data'})
    })

//}, 5000);  
    
}
    render(props) {
        console.log(this.props.name)
        const { posts } = this.state
        const { errorMsg } = this.state
        
        const { globals } = this.state

        
        // console.log(CountryList);
        return (
            <div className="chk">
                <h1><span>india coronavirus/COVID19 cases map state wise</span></h1>

                {globals ? <div>
                
               
                           
                            <p className="state"> Last Updated Time By Srikant :- {globals.lastupdatedtime}</p>
                         
                           
                       
                </div> : null}

                {globals ? <div className="global_case">
                <ul className="listitem mng">
                            <li className="state"> INDIA</li>
                            {/* <li> Active</li> */}
                            <li className="confirmed"> Confirmed</li>
                            <li className="death"> Deaths</li>
                            {/* <li> deltaconfirmed</li> */}
                            {/* <li> Last Updated Time</li> */}
                            <li className="recover"> Recovered</li>
                            </ul>
                        <ul className="listitem">
                            
                            <li className="state"> {globals.state}</li>
                            {/* <li> {globals.active}</li> */}
                            <li className="confirmed"> {globals.confirmed}</li>
                            <li className="death"> {globals.deaths}</li>
                            {/* <li> {post.deltaconfirmed}</li>
                            <li> {post.lastupdatedtime}</li> */}
                            <li className="recover"> {globals.recovered}</li>
                        </ul>
                
                </div> : null}

                {
                    <div >
                   
                        <ul className="listitem mng">
                           
                        <li className="state"> S. No.</li>
                            <li className="state"> State</li>
                            {/* <li> Active</li> */}
                            <li className="confirmed"> Confirmed</li>
                            <li className="death"> Deaths</li>
                            {/* <li> deltaconfirmed</li> */}
                            {/* <li> Last Updated Time</li> */}
                            <li className="recover"> Recovered</li>

                        </ul>
                   
                    
                    </div>
                }
                
                {
                   
                     posts.length ?
                    posts.map((post, index) => 
                    <div key={post.statecode} className="statewise">
                 
                        <ul className="listitem state">
                        <li className="state">{index}.</li>
                            <li className="state"> {post.state}</li>
                            {/* <li> {post.active}</li> */}
                            <li className="confirmed"> {post.confirmed}</li>
                            <li className="death"> {post.deaths}</li>
                            {/* <li> {post.deltaconfirmed}</li>
                            <li> {post.lastupdatedtime}</li> */}
                            <li className="recover"> {post.recovered}</li>
                        </ul>
                   
                    
                    </div>)
                    :null
                    
                }
               
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}
export default StateWise;