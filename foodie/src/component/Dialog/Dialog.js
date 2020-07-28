import React, {Component} from 'react';
import './Dialog.css'
// import { Link } from 'react-router-dom';
//
// import {Route, Switch} from 'react-router-dom';
// import Login from "../../views/Login/Login";

class Dialog extends Component {

    submitForm=()=>{
        console.log('form has been submitted');
        this.props.modalToggle();
    };
    render() {
        return (
            <div className={'modal'}>
                <div className="modal-box">
                    <div className="form-area">
                        <h1>Do you want to place your order</h1>
                        <form>
                            <label  >Address:</label>
                            <input type="text-area" id="address" name="adress" placeholder="Your address..."/><br/>
                           <label>Phone no. :</label>
                            <input type="tel"  maxLength={10} id="phone" name="Phone" placeholder="Enter your number"/><br/>
                            {/*<button></button><Link to="/login/"/>*/}
                            ***delivery time will be mentioned via call
                        </form>

                    </div>
                    <div className="button-area">
                    <button onClick={this.submitForm} className={'btn primary-btn'}>Submit</button>
                    <button onClick={this.props.modalToggle}  className={'btn primary-btn-outline'}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;