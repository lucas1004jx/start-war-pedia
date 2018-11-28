import React,{Component} from 'react';
import {fetchPeople} from '../actions/fetchPeople';
import {fetchPlanets} from '../actions/fetchPlanets';
import {fetchSpecies} from '../actions/fetchSpecies';
import {fetchVehicles} from '../actions/fetchVehicles';
import {fetchStarships} from '../actions/fetchStarships';
import {fetchFilms} from '../actions/fetchFilms';
import {PeopleInfo,PlanetsInfo,SpeciesInfo,StarshipsInfo,FilmsInfo,VehiclesInfo} from './ui_components/info';
import Preloader from './ui_components/preloader';
import {NavLink} from 'react-router-dom';
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
            url='https://swapi.co/api/planets/';
            this.props.fetchPlanets(url);
            break;
            case 'species':
            url='https://swapi.co/api/species/';
            this.props.fetchSpecies(url);
            break;
            case 'vehicles':
            url='https://swapi.co/api/vehicles/';
            this.props.fetchVehicles(url);
            break;
            case 'starships':
            url='https://swapi.co/api/starships/';
            this.props.fetchStarships(url);
            break;
            case 'films':
            url='https://swapi.co/api/films/';
            this.props.fetchFilms(url);
            break;
            default:
            url='https://swapi.co/api/people/';
            this.props.fetchPeople(url);
         }
         
     }
     getId(str){
       return str.slice(-3).replace(/\//g,'').trim();
     }
     renderBasicInfo(item){
         if(category==='people'){
           return(
            <PeopleInfo info={item}/>
           )
         }else if(category==='planets'){
            return(
              <PlanetsInfo info={item}/>
            )
          }else if(category==='films'){
            return(
              <FilmsInfo info={item}/>
            )
          }else if(category==='species'){
            return(
              <SpeciesInfo info={item}/>
            )
          }else if(category==='vehicles'){
            return(
              <VehiclesInfo info={item}/>
            )
          }else if(category==='starships'){
            return(
              <StarshipsInfo info={item}/>
            )
          }
     }
    
     renderPagination(){
         if(category==='people'){ 
         return(
            <div className='pagination'>
              {this.props.data[category].prev !==null ? <li className='page' onClick={()=>this.props.fetchPeople(this.props.data[category].prev)}>previous</li>:null}
             {this.props.data[category].next !==null ? <li className='page' onClick={()=>this.props.fetchPeople(this.props.data[category].next)}>next</li>:null}
           </div>
             )  
         }else if(category==='planets'){
            return(
               <div className='pagination'>
                {this.props.data[category].prev !==null ? <li className='page' onClick={()=>this.props.fetchPlanets(this.props.data[category].prev)}>previous</li>:null}
             {this.props.data[category].next !==null ? <li className='page' onClick={()=>this.props.fetchPlanets(this.props.data[category].next)}>next</li>:null}
              </div >
                )  
            }else if(category==='species'){
                return(
                   <div className='pagination'>
                    {this.props.data[category].prev !==null ? <li className='page' onClick={()=>this.props.fetchSpecies(this.props.data[category].prev)}>previous</li>:null}
                 {this.props.data[category].next !==null ? <li className='page' onClick={()=>this.props.fetchSpecies(this.props.data[category].next)}>next</li>:null}
                  </div>
                    )  
                }else if(category==='vehicles'){
                    return(
                       <div className='pagination'>
                        {this.props.data[category].prev !==null ? <li className='page' onClick={()=>this.props.fetchVehicles(this.props.data[category].prev)}>previous</li>:null}
                     {this.props.data[category].next !==null ? <li className='page' onClick={()=>this.props.fetchVehicles(this.props.data[category].next)}>next</li>:null}
                      </div>
                        )  
                    }else if(category==='starships'){
                        return(
                           <div className='pagination'>
                            {this.props.data[category].prev !==null ? <li className='page' onClick={()=>this.props.fetchStarships(this.props.data[category].prev)}>previous</li>:null}
                         {this.props.data[category].next !==null ? <li className='page' onClick={()=>this.props.fetchStarships(this.props.data[category].next)}>next</li>:null}
                          </div >
                            )  
                        }else if(category==='films'){
                            return(
                               <div className='pagination'>
                                {this.props.data[category].prev !==null ? <li className='page' onClick={()=>this.props.fetchFilms(this.props.data[category].prev)}>previous</li>:null}
                             {this.props.data[category].next !==null ? <li className='page' onClick={()=>this.props.fetchFilms(this.props.data[category].next)}>next</li>:null}
                              </div >
                                )  
                            }
     }

     render(){
      
     if(this.props.data[category].data.length <=0){return <div className='carrusel'><Preloader/></div>}
     //console.log(this.props.data[category]);
     let items=this.props.data[category].data;
   //console.log(items);
   
     return(
         <div className='carrusel'>
          {items.map((item,index)=>
            <div className='item' key={index}>
            <NavLink className='item-inner' to={`/${category}/${this.getId(item.url)}`}>
            <figure>
            <img src={`${imgPath}${this.getId(item.url)}.jpg`} alt={item.name}/>
            {/* <img src={`/images/people/${index+1}.jpg`}/> */}
            </figure>
            <div className='basic-info'>
            {this.renderBasicInfo(item)}
            </div>
            </NavLink>
            <h2 className='name'>{item.name?item.name:item.title}</h2>
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

