import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
// import * as actionTypes from '../../actions/actionTypes';
// import { bindActionCreators } from 'redux';
import * as taskActions from "../../redux/actionTypes";
// import { withRouter } from "react-router-dom";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import uuid from "react-uuid"
function GettingStarted(props) {
    //  let history = useHistory();
   

        // if(props.document.id){
        //     //  props.updateDocument(props.document.id, skinCd);        
        // }
        // else{
        //     //  props.setDocument(skinCd); 
        // }
        const onChange = async (skinCd) => {
            //  template set  -> redux 
    
            if (props.id == null) {
                let document = {
                    id: uuid(),
                    skinCd: skinCd
                }
                props.setSkin(document)
            } else {
                // skin
                props.updateSkin(skinCd)
            }
            // use 
            props.history.push('/contact');
        }
      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
  

function mapStatetoProps(store){
    return store.document;//y document root reducer wlala h n ki state wwlaal
    //root reducer m document state wala h y inidirectly usko access kr rh h 
}
function mapDispatchtoProps(dispatch){
    return{
        setSkin:(document)=>{
            dispatch({
                type:taskActions.SET_SKIN,
        payload:document
            })
        },
        updateSkin:(skinCd)=>{
            dispatch({
                type:taskActions.UPDATE_SKIN,
                payload:skinCd
            })
        }
    }
}
export default
      withRouter(connect(mapStatetoProps,mapDispatchtoProps)(GettingStarted))
      //withRouter isliye use kiya taki routing normalllly work krti rhe....

