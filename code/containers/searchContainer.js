import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Images from './images';
import axios from 'axios';


class SearchContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchText: '',
            amount: 15,
            sort: 'likesDown',
            apiUrl: 'https://pixabay.com/api/',
            apiKey: '13939004-23b6c0321790df129cc60cf42',
            images: []
        };

        this.textChange = this.textChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }


    textChange(e){
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
          if (val === '') {
            this.setState({ images: [] });
          } else {
            axios
              .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                  this.state.searchText
                }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
              )
              .then(res => this.setState({ images: res.data.hits }))
              .catch(err => console.log(err));
          }
        });
    };

    onAmountChange(e, index, value){ this.setState({ amount: value });}

    onSortChange(e, index, value){
      this.setState({sort: value});
    }
    
    render () {
        return(
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.textChange}
                    floatingLabelText = 'Search IMG'
                    fullWidth = {true}
                />  
                <br />
                
                <SelectField
                name="amount"
                floatingLabelText="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
                </SelectField>
                <SelectField
                name="amount"
                floatingLabelText="Sort"
                value={this.state.sort}
                onChange={this.onSortChange}
                >
                <MenuItem value={'likesUp'} primaryText="по возрастанию лаков" />
                <MenuItem value={'likesDown'} primaryText="по убыванию лайков" />
                <MenuItem value={'commentUp'} primaryText="по возрастанию комментариев" />
                <MenuItem value={'commentDown'} primaryText="по убыванию комментариев" />
                </SelectField>
                
                <br />

                {this.state.images.length > 0 ? (
                <Images images={this.state.images}
                sort={this.state.sort}
                />
                ) : null}
            </div>
        )
    }
}

export default SearchContainer;