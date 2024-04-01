import React from "react";
import "./UserProfileNotification.css";

const UserProfileNotification = () => {
    return (
        <div className="userProfileNotification">
            <div className="userProfileNotificationContainer">
                <form>
                    <div className="userProfileNotificationTitle">
                        <h3>Notifications</h3>
                    </div>
                    <div className="userProfileNotificationContent">
                        <p>You currently do not have any Notifications.
                            <br />
                            When you do, they would appear here.
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UserProfileNotification;