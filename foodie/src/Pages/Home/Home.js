import React, {Component} from 'react';
import banner from '../../assets/images/banner.webp';
import './Home.css';
import burger from '../../assets/images/Pages/burger.jpg'
import pizza from '../../assets/images/Pages/pizza.jpg'
import momo from "../../assets/images/Pages/momo.jpg"
import RecipeBox from "../../component/RecipeBox/RecipeBox";

class Home extends Component {
    state = {
        recipeItems: [
            {img: burger, label: 'Chicken Burger', rating: '4', author: 'John Doe'},
            {img: pizza, label: 'Pizza', rating: '4.5', author: 'Joel Boe'},
            {img: momo, label: 'Momo', rating: '5', author: 'Johnny Boeing'},
        ],
        recipeTypes: ['European', 'Italian', 'Tibetan']
    }

    render() {
        return (
            <section className={'home'}>
                <div className="banner">
                    <img src={banner} alt=""/>
                </div>
                <div className="recipe-area">
                    <div className="recipe-side-bar">
                        <div className="recipe-bar-title">Recipe</div>
                        {this.state.recipeTypes.map(type => (
                            <div className={'recipe-side-bar-item'}>{type}</div>
                        ))}
                    </div>
                    <div className="recipe-list">
                        <div className="search-bar">
                            <div className="search-box">
                                <input type="text" placeholder={'Search'}/>
                                <i className="material-icons">search</i>
                            </div>
                            <div className="sort-by">
                                Sort by : newest
                            </div>
                        </div>
                        <div className="recipe-items">
                            {this.state.recipeItems.map(item => (
                                <RecipeBox img={item.img} author={item.author} title={item.label}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;