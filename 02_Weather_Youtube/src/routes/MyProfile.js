import React from 'react';
import {Redirect} from 'react-router-dom';

const isLogged = true;

const MyProfile = () => {
    return (
        <div>
            {
                !isLogged && <Redirect to="/login" />
            }

            MyProfile
        </div>
    );
};

export default MyProfile;