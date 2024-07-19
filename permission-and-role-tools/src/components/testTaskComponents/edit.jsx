import { 
    Edit,
    TabbedShowLayout,
    Tab,
    SimpleForm,
    TextInput,
    required,
    RadioButtonGroupInput,
} from "react-admin";

import * as React from 'react';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Primary } from './editComponents/primary'
import { Other } from './editComponents/other'




export const TaskEditSource = () => {
    const [template, setTemplate] = useState("1");

 const handleChange = (event) => {
    setTemplate(event.target.value);
    console.log(event.target.value)
  };

  if(template=="1"){
        return(
        <div>

            <Edit>
                <TabbedShowLayout>

                    <TabbedShowLayout.Tab label='Primary'>
                        <Primary template = {template}/>
                    </TabbedShowLayout.Tab>   

                    <TabbedShowLayout.Tab label='Other'>
                        <Other/>
                    </TabbedShowLayout.Tab>  

                </TabbedShowLayout>
            </Edit>

        </div>
    )
  }


}
