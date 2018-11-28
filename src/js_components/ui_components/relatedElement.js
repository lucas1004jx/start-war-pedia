import React ,{Component}from 'react';

export default class RelatedElement extends Component{
    
    render(){
        return(
      <div className='related-element'>
            <h3>related {this.props.name}</h3>
            <ul>
            {this.props.elements.length!==0?this.props.elements.map((element,index)=><li key={index}>{element}</li>):<li>There is no related {this.props.name}</li>}
            </ul>
       </div>
        )
    }
}
