import * as React from 'react';
import { Container } from 'react-bootstrap';
import { AppBar } from 'react-admin';

const CarvertiseReactAdminLayout = ({ children }) => (
    <Container className="w-100">
        <AppBar />
        <Container>
                {children}
        </Container>
    </Container>
);

export default CarvertiseReactAdminLayout;