import React,{Component} from 'react';
import {PeopleInfo} from './ui_components/info';
import Preloader from './ui_components/preloader';
import RelatedElement from './ui_components/relatedElement';
import {fetchData} from '../actions/fetchData';
import {getFilmName} from '../actions/getFilmName';
import {connect} from 'react-redux';
import axios from 'axios';

let  imgPath='';
let detail={};
let prevDetail={};

 class PeopleDetail extends Component{
      componentDidMount(){  
       let url =`https://swapi.co/api${this.props.match.url}`;
       imgPath=`/images/people/${this.props.match.params.id}.jpg`;
        this.props.fetchData(url);
       axios.get(url).then((res)=>res.data.films).then((films)=>
       films.map((film)=>this.props.getFilmName(film))
       )
     }
    
    
    render(){
        
        detail=this.props.detail.data;
        //console.log(this.props.match.params.id);
        if(Object.keys(detail).length===0 || prevDetail === detail){return <div className='detail-page'><Preloader/></div>}
        prevDetail=detail;
        let films=this.props.detail.films;
        let vehiclesUrl=detail.vehicles;
        let starshipsUrl=detail.starships;
        //this.getName('https://swapi.co/api/films/2/');
        //console.log(filmsUrl); 
        console.log(this.props.detail);
        
       
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
            <RelatedElement elements={vehiclesUrl} name='vehicles'/>
            <RelatedElement elements={starshipsUrl} name='starships'/>
            </div>
             </div>
        )
    }
} 

const mapStatetoProps=state=>({
    detail:state.sw_data.detail
})

export default connect(mapStatetoProps,{fetchData,getFilmName})(PeopleDetail);