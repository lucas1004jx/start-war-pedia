import React,{Component} from 'react';
import {PeopleInfo} from './ui_components/info';
import Preloader from './ui_components/preloader';
import RelatedElement from './ui_components/relatedElement';
import {fetchData} from '../actions/fetchData';
import {connect} from 'react-redux';


let  imgPath='';
let prevDetail={};
 class PeopleDetail extends Component{
     componentDidMount(){  
       let url =`https://swapi.co/api${this.props.match.url}`;
       imgPath=`/images/people/${this.props.match.params.id}.jpg`;
       this.props.fetchData(url);
     }
    
    render(){
        let detail=this.props.detail;
        console.log(this.props.match.params.id);
        console.log(detail);
        if(Object.keys(detail).length===0 || prevDetail === detail){return <div className='detail-page'><Preloader/></div>}
        prevDetail=detail;
        let films=detail.films;
        let vehicles=detail.vehicles;
        let starships=detail.starships;
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
            <RelatedElement elements={films} name='films'/>
            <RelatedElement elements={vehicles} name='vehicles'/>
            <RelatedElement elements={starships} name='starships'/>
            </div>
             </div>
        )
    }
} 

const mapStatetoProps=state=>({
    detail:state.sw_data.detail
})

export default connect(mapStatetoProps,{fetchData})(PeopleDetail);