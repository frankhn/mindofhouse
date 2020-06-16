import React from 'react';
import jwt from 'jwt-decode';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../redux/store/store';

export interface ProtectedRouteProps extends RouteComponentProps { }


const isAuthenticated = () => {
    try {
        let isAuth = true
        const authKey: any = localStorage.getItem('authentication_key');
        let exp: number = null;
        if (authKey) {
            const decoded: any = jwt(authKey);
            exp = decoded.exp;
        }
        const currentTime = Date.now();
        exp = new Date(exp * 1000).getTime()
        if (currentTime > exp) {
            isAuth = false
        }
        return isAuth
    } catch (error) {
        return false
    }
}

const authenticated: boolean = isAuthenticated()

const ProtectedRoute = (
    { component: Component, ...rest }: any,
) => (<Route
    { ...rest }
    render={ (props: ProtectedRouteProps) => (authenticated === true ? (
        <Component { ...props } />
    ) : (
            <Redirect
                to={ {
                    pathname: '/login',
                    state: { from: props.location },
                } }
            />
        ))
    }
/>
    );
const mapStateToProps = (state: AppState) => ({});

export default connect(mapStateToProps, {})(ProtectedRoute);
