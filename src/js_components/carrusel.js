import React,{Component} from 'react';
import {fetchData} from '../actions/fetchData';
import {connect} from 'react-redux';

let category='people';
const imgPath=`./images/${category}/`;
 class Carrusel extends Component{
     componentDidMount(){
         this.props.fetchData('people');
     }
 render(){
     if(this.props.data.sw_data.length<=0){return false}
     console.log(this.props.data.sw_data);
     let items=this.props.data.sw_data;
     return(
         <div className='carrusel'>
          {items.map((item,index)=>
            <div className='item' key={index}>
            <img src={`${imgPath}${index}.jpg`}/>
             <h3 className='name'>{item.name}</h3>
            </div>
            )}
         </div>
     )
 }
} 

const mapSateToProps=state=>({
    data:state.sw_data
})

export default connect(mapSateToProps,{fetchData})(Carrusel)

