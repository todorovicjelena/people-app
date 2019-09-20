import React from 'react';

const UserItem = (props) => {
    const { user } = props;
    const femaleColor = user.isFemale() ? "is-female" : "";

    return (
        <div className={`one-user ${femaleColor} row`}>
            <div className="user-image-holder col-1">
                <img src={user.image} alt="" />
            </div>
            <div className="user-info-holder col-11">
                <p className="user-name">{user.getFullName()}</p>
                <p className="user-email">
                    <i className="fas fa-envelope"></i>
                    {user.hideEmail()}
                </p>
                <p className="user-birthday">
                    <i className="fas fa-birthday-cake"></i>
                    {user.getFormatDate()}
                </p>
            </div>
        </div>
    );
}


export { UserItem }