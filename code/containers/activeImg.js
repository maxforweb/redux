import React, { Component } from 'react';
import {connect} from 'react-redux';



class activeImg extends Component {

    render() {
        if(!this.props.img){
            return (<p>NO</p>)
        }
        else {
            return (
                <div> 
                    <img className={"image1"} src={this.props.img.largeImageURL} alt="#" />
                    <div>
                        <p>Views: {this.props.img.views};</p>
                        <p>Favorites: {this.props.img.favorites};</p>
                        <p>Downloads: {this.props.img.downloads};</p>
                        <p>Likes: {this.props.img.likes};</p>
                        <p>Comments: {this.props.img.comments};</p>
                        <p>Tags: {this.props.img.tags};</p>
                        <p>User: {this.props.img.user};</p>
                        <p>User ID: {this.props.img.user_id};</p>
                        <p>Photo ID: {this.props.img.id};</p>
                        <p>Type: {this.props.img.type};</p>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps (state) {
    return{
        img: state.infoImg
    }
}
export default connect(mapStateToProps)(activeImg);