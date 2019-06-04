import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {

    render() {
        if(!this.props.user){
            return null;
        };
        return <div className="card-footer"><small>{this.props.user.name}</small></div>;
    };

}

const mapStateToProps = (state,ownProps) => {
    return { user : state.users.find(user => user.id===ownProps.userID) }
};

export default connect(mapStateToProps)(UserHeader);