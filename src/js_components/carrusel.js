import React,{Component} from 'react';
import {fetchPeople} from '../actions/fetchPeople';
import {fetchPlanets} from '../actions/fetchPlanets';

import {connect} from 'react-redux';

let category='';
let imgPath='';

 class Carrusel extends Component{
     componentWillMount(){
         console.log(this.props.name);
         category=this.props.name;
         imgPath=`/images/${category}/`;
         switch(category){
            case 'people':
            this.props.fetchPeople();
            case 'planets':
            this.props.fetchPlanets();
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
             <li>1</li>
           </React.Fragment>
             )  
         }
     }
     render(){
      
     if(this.props.data[category].data.length<=0){return false}
     console.log(this.props.data[category].data);
     let items=this.props.data[category].data;
    //  let items=[1,2,3,4,5,6,7,8,9,10];
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
         </div>
     )
 }
} 

const mapSateToProps=state=>({
    data:state.sw_data
})

export default connect(mapSateToProps,{fetchPeople,fetchPlanets})(Carrusel)

