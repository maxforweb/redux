import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import {imgInfo} from '../actions/imgInfo';


class Results extends Component {
    render() {
        let imageListContent;
        const { images } = this.props.img;


        if (this.props.img.sort === 'likesDown'){
          function sortBy (arr){
            arr.sort((a,b) => a.likes < b.likes ? 1 : -1 );
          }
          
          sortBy(images);
        }
        else if (this.props.img.sort === 'likesUp'){
          function sortBy (arr){
            arr.sort((a,b) => a.likes > b.likes ? 1 : -1 );
          }
          
          sortBy(images);
        }
        else if (this.props.img.sort === 'commentUp'){
          function sortBy (arr){
            arr.sort((a,b) => a.comments > b.comments ? 1 : -1 );
          }
          
          sortBy(images);
        }
        else {
          function sortBy (arr){
            arr.sort((a,b) => a.comments < b.comments ? 1 : -1 );
          }
          
          sortBy(images);
        }
        
        if (images) {
        
          imageListContent = (
            <GridList cols={4}>
              {images.map(img => (
                <GridTile
                  title={img.tags}
                  key={img.id}
                  subtitle={
                    <span>
                      {img.likes} likes
                      <br/>
                      {img.comments} comments
                    </span>
                  }
                >
                  <img onClick ={() => this.props.imgInfo(img)}
                   src={img.largeImageURL} alt="" />
                </GridTile>
              ))}
            </GridList>
          );
        } else {
          imageListContent = null;
        }
          return (
            <div>
              {imageListContent}    
            </div>
          );
    }

}

Results.PropTypes = {
    images: PropTypes.array.isRequired,
    sort: PropTypes.array.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({imgInfo: imgInfo}, dispatch)
} 


export default connect(null, mapDispatchToProps)(Results);