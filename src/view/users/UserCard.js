import React from 'react';

const UserCard = (props) => {
    const { user } = props;
    const femaleColor = user.isFemale() ? "is-female" : "";
    return (
        <div className="one-user-card col s12 m4">
            <div className={`card-holder ${femaleColor}`}>
                <div className="card-image-holder">
                    <img src={user.largeImage} alt="" />
                    <h4 className="user-name">{user.name}</h4>
                </div>
                <div className="card-info-holder">
                    <p className="user-email">
                        {user.hideEmail()}
                    </p>   
                   <p className="user-birthday">
                    <i className="fas fa-birthday-cake"></i>
                    {user.getFormatDate()}
                    </p>
                </div>
            </div>
        </div>

        
    );
}






export { UserCard }