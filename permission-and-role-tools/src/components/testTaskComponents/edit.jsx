import { 
    Edit,
    TabbedShowLayout,
    Tab,
} from "react-admin";

import * as React from 'react';
import { useState } from 'react';


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
