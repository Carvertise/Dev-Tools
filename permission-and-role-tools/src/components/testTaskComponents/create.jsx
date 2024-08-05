import { 
    Create,
} from "react-admin";

import * as React from 'react';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import { Template1 } from './createComponents/template1'
import { Template2 } from './createComponents/template2'




export const TaskCreateSource = () => {
    const [template, setTemplate] = useState("1");

    const handleChange = (event) => {
        setTemplate(event.target.value);
        console.log(event.target.value)
    };
            return(
            <div>
                <br/>
                    <FormLabel id="templates">Template</FormLabel>
                    <RadioGroup value={template} onChange={handleChange} row>
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                    </RadioGroup>

                <Create>
                    {template==1 &&
                        <Template1 />
                    }
                    {template==2 &&
                        <Template2/>
                    }
                </Create>

            </div>
        )

}