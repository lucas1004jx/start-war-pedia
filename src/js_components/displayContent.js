import React,{Component} from 'react';
import {fetchPeople} from '../actions/fetchPeople';
import {fetchPlanets} from '../actions/fetchPlanets';
import {fetchSpecies} from '../actions/fetchSpecies';
import {fetchVehicles} from '../actions/fetchVehicles';
import {fetchStarships} from '../actions/fetchStarships';
import {fetchFilms} from '../actions/fetchFilms';

import {connect} from 'react-redux';

let category='';
let imgPath='';
let url='';
 class DisplayContent extends Component{
     componentWillMount(){
         console.log(this.props.content);
         category=this.props.content;
         imgPath=`/images/${category}/`;
         switch(category){
            case 'people':
            url='https://swapi.co/api/people/';
            this.props.fetchPeople(url);
            break;
            case 'planets':
            this.props.fetchPlanets();
            break;
            case 'species':
            this.props.fetchSpecies();
            break;
            case 'vehicles':
            this.props.fetchVehicles();
            break;
            case 'starships':
            this.props.fetchStarships();
            break;
            case 'films':
            this.props.fetchFilms();
            break;
            default:
            this.props.fetchPeople();
         }
         
     }
     getId(str){
       return str.slice(-3).replace(/\//g,'').trim();
     }
     renderBasicInfo(item){
         if(category==='people'){
           return(
            <React.Fragment>
              <p>height: <span className='height'>{item.height}</span>cm</p>
              <p>mass: <span className='mass'>{item.mass}</span>kg</p>
              <p>gender: <span className='gender'>{item.gender}</span></p>
              <p>specie: <span className='specie'>{item.species}</span></p>
            </React.Fragment> 
           )
         }
     }
    
     renderPagination(){
         if(this.props.data.next !== null){
         return(
            <React.Fragment>
             <li className='page' onClick={()=>this.props.fetchPeople(this.props.data[category].prev)}>previous</li>
             <li className='page' onClick={()=>this.props.fetchPeople(this.props.data[category].next)}>next</li>
           </React.Fragment>
             )  
         }
     }
     render(){
      
     if(this.props.data[category].data.length <=0){return false}
     console.log(this.props.data[category].prev);
     let items=this.props.data[category].data;
   
     return(
         <div className='carrusel'>
          {items.map((item,index)=>
            <div className='item' key={index}>
            <div className='item-inner'>
            <figure>
            <img src={`${imgPath}${this.getId(item.url)}.jpg`} alt={item.name}/>
            {/* <img src={`/images/people/${index+1}.jpg`}/> */}
            </figure>
            <div className='basic-info'>
            {this.renderBasicInfo(item)}
            </div>
            </div>
            <h2 className='name'>{item.name}</h2>
            </div>
            )}
           { this.renderPagination()}
         </div>
     )
 }
} 

const mapSateToProps=state=>({
    data:state.sw_data
})

export default connect(mapSateToProps,{fetchPeople,fetchPlanets,fetchSpecies,fetchVehicles,fetchStarships,fetchFilms})(DisplayContent)

