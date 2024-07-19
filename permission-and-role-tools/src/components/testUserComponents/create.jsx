import { 
    Edit,
    TabbedShowLayout,
    Tab,
    SimpleForm,
    TextInput,
    required,
    RadioButtonGroupInput,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Create,
    ReferenceInput,
} from "react-admin";

import * as React from 'react';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Template1 } from './createComponents/template1'





export const UserCreateSource = () => {
    const [template, setTemplate] = useState("1");

    const handleChange = (event) => {
        setTemplate(event.target.value);
        console.log(event.target.value)
    };
            return(
                <Create>
                        <Template1 />
                </Create>
        )

}