import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { GalleryPage } from "./pages/gallery";
import { ServicesPage } from "./pages/services";
import AuthPage from "./pages/authPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/about" >
                    <AboutPage/>
                </Route>
                <Route path="/auth" >
                    <AuthPage/>
                </Route>
                <Route path="/gallery">
                    <GalleryPage/>
                </Route>
                <Route path="/services">
                    <ServicesPage/>
                </Route>
                <Redirect to="/" exact/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/about" exact>
                <AboutPage/>
            </Route>
            <Route path="/gallery">
                <GalleryPage/>
            </Route>
            <Route path="/services">
                <ServicesPage/>
            </Route>
            <Redirect to="/" exact/>
        </Switch>
    )
};
