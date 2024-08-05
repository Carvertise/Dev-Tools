import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// import { getAppConfiguration, getRoutesArray } from '../../routes/generator.jsx';
// import CarvertiseLogo from '../../assets/images/carvertise-logo.png';

export function AppNavigation() {
    return(
        <Container fluid className="bg-dark" style={{position: "relative"}}>
            {/* <div style={{backgroundColor: "#FF0000", position: "absolute", left: "0", height: "10px", width: "100%", display: "inline-block"}}></div>
            <div style={{backgroundColor: "white", position: "absolute", left: "0", top: "10", height: "3px", width: "100%", display: "inline-block"}}></div> */}
            <Navbar expand="lg" variant="dark" className="" >
                <Stack direction="horizontal" gap={1} className='w-100 justify-content-between'>
{/*                    <Navbar.Brand href="/">
                        <img
                            src={CarvertiseLogo}
                            width="160px"
                            height="20px"
                            className=""
                            alt="Carvertise logo"
                        />
                    </Navbar.Brand>*/}
                    <div className='w-100 justify-content-between'>
                        <Navbar.Collapse id="basic-navbar-nav" className='float-start'>
                            <Nav className="ms-auto">
                                <Nav.Link href="/monthly_report">Map</Nav.Link>
                                <Nav.Link href="/wrapshop_scheduler">Wrapshop Scheduler</Nav.Link>
                                <Nav.Link href="/admin/users">Users</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light float-end" />
                    </div>
                </Stack>
            </Navbar>
        </Container>
    )
}