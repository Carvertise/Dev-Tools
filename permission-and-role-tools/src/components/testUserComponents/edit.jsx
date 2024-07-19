import { 
    Edit,
    TabbedShowLayout,
    Tab,
    SimpleForm,
    TextInput,
    required
} from "react-admin";


import { Primary } from './editComponents/primary'
import { CarDetails } from './editComponents/carDetails'
import { Location } from './editComponents/location'
import { Other } from './editComponents/other'
import { Permissions } from './editComponents/Permissions'


export const UserEditSource = () => (
    <Edit>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label='Primary'>
                <Primary/>
            </TabbedShowLayout.Tab>     
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
