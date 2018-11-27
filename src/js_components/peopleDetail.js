import React,{Component} from 'react';
import {PeopleInfo} from './info';
import Preloader from './preloader';
import {fetchData} from '../actions/fetchData';
import {connect} from 'react-redux';

let  imgPath='';
 class PeopleDetail extends Component{
     componentDidMount(){  
       let url =`https://swapi.co/api${this.props.match.url}`;
       imgPath=`/images/people/${this.props.match.params.id}.jpg`;
       this.props.fetchData(url);
     }
    render(){
        let detail=this.props.detail;
        console.log(this.props.match.params.id);
        
        if(Object.values(detail)[0]===undefined){return <div className='detail-page'><Preloader/></div>}
        console.log(detail); 
        return(
            <div className='detail-page'>
            <div className='info'>
            <figure>
                <img src={imgPath} alt={imgPath}/>
            </figure>
            <div className='detail'>
             <PeopleInfo info={detail}/> 
            </div>
            </div>
            <div className='related'>
            <div className='related-element'>
             <h3>related films</h3>
            </div>
            <div className='related-element'>
            <h3>related vehicles</h3>
            </div>
            <div className='related-element'>
            <h3>related starships</h3>
            </div>
            </div>
             </div>
        )
    }
} 

const mapStatetoProps=state=>({
    detail:state.sw_data.detail
})

export default connect(mapStatetoProps,{fetchData})(PeopleDetail);