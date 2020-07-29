import React, {Component} from 'react';
import background from "../../assets/images/Pages/background.jpeg";
class Contacts extends Component{
    render(){
        return (
            <div>
                    <div className="Contacts">
                        <h1 className="heading">  We would love to hear form you! </h1>
                    </div>
                    <div>
                        <form>
                        <label>First Name</label>

                        <input type="text" id="fname" name="firstname" placeholder="Your name.." /><br/>

                        <label>Last Name</label>

                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." /><br/>

                        <label>Email</label>

                        <input type="email" id="email" name="email" placeholder="Your email" /><br/>

                        <label>Message</label>

                        <textarea id="message" name="subject" placeholder="Write something.."></textarea><br/>

                        <input type="submit" value="Submit" />
                        </form>
                    </div>
                <div>
                    <h3 id="phone">For further details:<br/></h3>
                    <h4>Contact no.:9813442278</h4>

                </div>
                </div>



        );
    }
}

export default Contacts;