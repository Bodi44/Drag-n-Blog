import React, {Component} from 'react'

import '../../css-grid/grid.scss'
import './Post.scss'

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",
            title: 'Fantastic Co-Founders and Where to Find Them',
            content:'Finding your co-founder is a lot like dating. You’re looking for someone like-minded, with similar goals and approaches, who you can get along with in difficult times to build a long lasting business. So it’s only natural that searching for that perfect candidate can be a long and exhausting process. But what traits make a co-founder worth having, more exactly? And where should you look for such a co-founder?',
            date:'',
            author:''
        }
    }
    render(){
        const {title, content} = this.state;
        return(
            <div className={'Post grid_10'}>
                <img className={'Post-image'} src="https://res.cloudinary.com/maxvoloskiy/image/upload/v1550543000/Drag%27n%27Blog/cover.jpg"
                     alt="image"/>

                <h1 className={'Post-header'}>{title}</h1>

                <p className={'Post-content'}>{content}</p>

                <ul className={'Post__tags'}>
                    <li className={'Post__tags-tag'}>#enterpreneurship</li>
                    <li className={'Post__tags-tag'}>#business</li>
                    <li className={'Post__tags-tag'}>#partnership</li>
                </ul>
            </div>
        )
    }
}

export default Post