import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native'

import { AppRoutes } from '../../src/routes/app.routes';

export function Routes() {
    return (
    
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
     


    );
}
