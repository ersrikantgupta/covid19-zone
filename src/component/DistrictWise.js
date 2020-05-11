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

    //axios.get('https://api.covid19india.org/state_district_wise.json')
    axios.get('https://api.covid19india.org/zones.json')
    .then(response => {
        //const parsedResponse = JSON.parse(response);
        //console.log(parsedResponse.districtData)
        console.log(response.data.zones[0].lastupdated)
        // console.log(response.data.Global.length)
        // console.log(response.data.Countries.length)
        // this.setState({arryLength : response.data.Countries.length})
         this.setState({posts: response.data.zones})
        //  console.log(response.data.statewise[1].lastupdatedtime)
        //  this.setState({LastUpdatedTime: response.data.statewise[11].lastupdatedtime})
        // console.log("Country" );
        // this.setState({CountryList :response.data.Countries[0].Country})
        
         this.setState({globals: response.data.zones[0]})
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
          <div>
                <h1><span>Full list of Red, Orange, Green Zone districts for Lockdown 3.0</span></h1>
                {globals ? <div>
                
               
                           
                <p className="state">Updated By Srikant(kasba,purnia) :- {globals.lastupdated}</p>
             
                <ul className="listitem mng">
                        <li>S. NO.</li>
                            <li> state</li>
                            <li> district</li>
                            <li> zone</li>
                            
                            {/* <li > {post.lastupdated}</li> */}
                           

                        </ul>
           
                    </div> : null}


                
                {
                   
                     posts.length ?
                    posts.map((post, index) => 
                    <div key={post.districtcode}>
                 
                        <ul className={post.zone} id="listitem">
                        <li className="state">{index}.</li>
                            <li className="state" > {post.state}</li>
                            <li className="state" > {post.district}</li>
                            <li className={post.zone} > {post.zone}</li>
                            
                            {/* <li > {post.lastupdated}</li> */}
                           

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