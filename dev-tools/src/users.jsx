import { useMediaQuery, Chip, Card, CardContent  } from "@mui/material";
import {
 List, 
SimpleList, 
Datagrid, 
TextField, 
EmailField, 
TextInput, 
SearchInput, 
useTranslate, 
SavedQueriesList, 
FilterLiveSearch, 
FilterList, 
FilterListItem,
    BooleanField,
    CreateButton,
    NumberField,
    ReferenceArrayField,
    TopToolbar,
} from "react-admin";
import MyUrlField from './MyUrlField';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer'



const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};

const postFilters1 = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Company Name" source="company.name" defaultValue="Hello, World!" />,
];
const postFilters2 = [
    <SearchInput source="q" alwaysOn />
];

const postFilters3 = [
    <SearchInput source="q" alwaysOn />,
    <QuickFilter source="name" label="Names" defaultValue={""} />,
    <QuickFilter source="email" label="Emails" defaultValue={""} />,
    <QuickFilter source="phone" label="Phone Numbers" defaultValue={""} />,
];

const PostFilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
        <CardContent>
            <SavedQueriesList />
            <FilterLiveSearch />
            <FilterList label="Subscribed to newsletter" icon={<MailIcon />}>
                <FilterListItem label="test" value={{ ["company.name"]: 'Romaguera' }} />
            </FilterList>
            <FilterList label="Category" icon={<CategoryIcon />}>
                <FilterListItem label="Tests" value={{ category: 'tests' }} />
                <FilterListItem label="News" value={{ category: 'news' }} />
                <FilterListItem label="Deals" value={{ category: 'deals' }} />
                <FilterListItem label="Tutorials" value={{ category: 'tutorials' }} />
            </FilterList>
        </CardContent>
    </Card>
);

export const UserList = () => (
    <div>
        <List filters={postFilters1}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
        <List filters = {postFilters2}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
        <List filters = {postFilters3}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
        <List aside={<PostFilterSidebar />}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
        <List filters={postFilters1}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
    </div>
);