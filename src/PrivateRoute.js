import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/auth';
import AppDrawer from './components/drawer';

function PrivateRoute({ component: Component, ...rest }) {
	// const { authTokens } = useAuth();
	const isAuthenticated = useAuth();
	return (
		<React.Fragment>
			<Route
				{...rest}
				render={(props) =>
					// authTokens ?

						isAuthenticated ? <div>
							<AppDrawer>
								<Component {...props} />
							</AppDrawer>
						</div> :
						<Redirect to="/" />}
			/>
		</React.Fragment>
	);
}

export default PrivateRoute;
