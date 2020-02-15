import React, { Component } from 'react';
import './index.css'



class Form extends Component {
    constructor(){
        super()
        this.state ={
            username : '',
            comments : '',
            choose : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.handleChoose = this.handleChoose.bind(this)
    }
    
    handleChange(event){
        this.setState ({
            username : event.target.value             
        })
    }
    handleComment(event){
        this.setState({
            comments : event.target.value
        })
    }
    handleChoose(event){
        this.setState({
            choose : event.target.value
        })
    }
    render() { 
        return (
            <div>
               <form className='form'>
                   <div className='div'>
                        <label className='label'>Username</label>
                        <input className='input' type='text' value ={this.state.username} onChange ={this.handleChange} />
                   </div>
                   <div className='div'>
                        <label className='label'>Comments</label>
                        <input className='input2' type='text' value ={this.state.comments} onChange ={this.handleComment} />
                   </div>
                   <div className='div'>
                        <label className='label'>Choose</label>
                        <select className='select'  value = {this.state.choose} onChange = {this.handleChoose}>
                            <option className='option' value='python'>Python</option>
                            <option className='option' value='javascript'>JavaScript</option>
                            <option className='option' value='react'>React</option>
                        </select>
                   </div>
               </form>
            </div>
          );
    }
}
 
export default Form ;