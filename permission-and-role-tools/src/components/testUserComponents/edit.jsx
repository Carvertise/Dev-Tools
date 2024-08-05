import { 
    Edit,
    TabbedShowLayout,
    Tab,
} from "react-admin";


import { Primary } from './editComponents/primary'
import { CarDetails } from './editComponents/carDetails'
import { Location } from './editComponents/location'
import { Other } from './editComponents/other'
import { Permissions } from './editComponents/Permissions'

//renders diffrent edit components, with the one containing the primary record information at the top, and below it
//is a tab page containing a tab for diffrent groups of properties.
export const UserEditSource = () => (
    <Edit>
        <Primary/>
        <TabbedShowLayout>     
            <TabbedShowLayout.Tab label='Car Details'>
                <CarDetails/>
            </TabbedShowLayout.Tab>     
            <TabbedShowLayout.Tab label='Location'>
                <Location/>
            </TabbedShowLayout.Tab>     
            <TabbedShowLayout.Tab label='Other'>
                <Other/>
            </TabbedShowLayout.Tab>        
            <TabbedShowLayout.Tab label='Permissions'>
                <Permissions/>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Edit>
)
