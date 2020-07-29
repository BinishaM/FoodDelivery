import React, {Component} from 'react';
import './About.css';
import picture from '../../picture.jpeg';


class About extends Component {
    render() {
        return (
            <section className={'about'}>
            <img src ={picture} alt ="TABLE"/>

                <div className="About">
                <p>
                    Foodies is a norm for restaurants which offer takeout and delivery orders. It allows the customer to choose from various categories.
                    And payment can be done through cash on delivery.
                </p>
                </div>
            </section>
        );
    }
}

export default About;