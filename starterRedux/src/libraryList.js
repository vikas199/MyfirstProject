import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native'
import ListItem from './listItem';

class LibraryList extends Component {

    componentWillMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.props.list)
        //console.log(this.dataSource)
    }
    renderRow(list){
        return <ListItem item={list} />
    }
    render(){
        return(
          <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow} /> 

        );
    }
}


function mapStateToProps(state){
   return{
       list: state.libraryReducer,
       currentId:state.selectionReducerId 
   }
}


export default connect(mapStateToProps)(LibraryList);