import React,{Component} from 'react';
import {FilmsInfo} from './ui_components/info';
import Preloader from './ui_components/preloader';
import RelatedElement from './ui_components/relatedElement';
import {fetchData} from '../actions/fetchData';
import {getFilmName,getVehicleName,getPlanetName,getSpecieName,getStarshipName,getPeopleName} from '../actions/getName';

import {connect} from 'react-redux';
import axios from 'axios';

let  imgPath='';

 class PeopleDetail extends Component{
      componentDidMount(){  
       let url =`https://swapi.co/api${this.props.match.url}`;
       imgPath=`/images/films/${this.props.match.params.id}.jpg`;
        this.props.fetchData(url);
    
        axios.get(url).then((res)=>res.data).then((res)=>{   
      
        res.planets.map((planet)=>this.props.getPlanetName(planet));
        res.species.map((specie)=>this.props.getSpecieName(specie));
        res.characters.map((character)=>this.props.getPeopleName(character));
       }
       )
     }
    
    render(){
        let detail=this.props.detail.data;
        //console.log(this.props.match.params.id);
        if(Object.keys(detail).length===0 ){return <div className='detail-page'><Preloader/></div>}
        let species=this.props.detail.species;
        let planets=this.props.detail.planets;
        let people=this.props.detail.people;
        //this.getName('https://swapi.co/api/films/2/');
        //console.log(filmsUrl); 
        //console.log(this.props.detail);
        
       
        return(
            <div className='detail-page'>
            <div className='info'>
            <figure>
                <img src={imgPath} alt={imgPath}/>
            </figure>
            <div className='detail'>
             <FilmsInfo info={detail} /> 
            </div>
            </div>
            <div className='related'>
            <RelatedElement elements={people} name='characters'/>
            <RelatedElement elements={species} name='species'/>
            <RelatedElement elements={planets} name='planets'/>
            
            </div>
             </div>
        )
    }
} 

const mapStatetoProps=state=>({
    detail:state.sw_data.detail
})

export default connect(mapStatetoProps,{fetchData,getFilmName,getVehicleName,getPlanetName,getSpecieName,getStarshipName,getPeopleName})(PeopleDetail);