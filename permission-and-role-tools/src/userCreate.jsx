import { Create, SimpleForm, ReferenceInput, TextInput } from 'react-admin';

export const UserCreate = () => {
    
    return(
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
        </SimpleForm>
    </Create>
    );

};