import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { PageB } from "./pages/pageB";
import { LoginContainer } from "./pages/login.container";
import { SessionProvider } from "./common";

export const App = () => {

    return (
        <>
            <SessionProvider>
                <HashRouter>
                    <Switch>
                        <Route exact={true} path="/" component={LoginContainer} />
                        <Route path="/pageB" component={PageB} />
                    </Switch>
                </HashRouter>
            </SessionProvider>
        </>
    );
};
