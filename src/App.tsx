import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../apollo'
// import ErrorModal from '../components/ErrorModal'
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './containers/Routes';

export const App = () => {

    return(
        <ApolloProvider client={client}>
            <Provider store={store}>
                {/* <ErrorModal/> */}
                <Routes/>
            </Provider>
        </ApolloProvider>
    )
}
