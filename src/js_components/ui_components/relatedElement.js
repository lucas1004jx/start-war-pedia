import React ,{Component}from 'react';
import axios from 'axios';

let title='';
export default class RelatedElement extends Component{
    getName(url){ 
      axios.get(url).then((res)=>(res.data.title)).then((res)=>({title:res}));
      
    }
    render(){
        return(
      <div className='related-element'>
            <h3>related {this.props.name}</h3>
            {this.props.elements.length!==0?this.props.elements.map((element)=><li key={element}>{element}</li>):<li>there is no related {this.props.name}</li>}
       </div>
        )
    }
}
