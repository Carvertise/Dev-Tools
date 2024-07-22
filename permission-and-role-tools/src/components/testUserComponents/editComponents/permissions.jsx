import React, { useState } from "react";
import { cloneDeep } from "lodash";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { RadioButtonGroupInput } from 'react-admin';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import {TEMPLATES} from './permissionTemplates'

const admin = []
const employee = []
const service = []
const MtService = []
const driver = []


let dataOne = {
    Create:{
        'data_users.${user._id}':{
            location:{
                rough:true,
                address:true,
                city:true,
                state:true,
                zipcode:true,
            },
            'ids_arr':{
                campaigns:true,
            },
        },
    },
    Read:{
        'data_users.${user._id}':{
            location:{
                rough:true,
                address:true,
                city:true,
                state:false,
                zipcode:true,
            },
            'ids_arr':{
                campaigns:true,
            },
        },
    },
    Update:{
        'data_users.${user._id}':{
            location:{
                rough:true,
                address:false,
                city:true,
                state:false,
                zipcode:true,
            },
            'ids_arr':{
                campaigns:true,
            },
        },
    },
    Delete:{
        'data_users.${user._id}':{
            location:{
                rough:true,
                address:false,
                city:true,
                state:false,
                zipcode:true,
            },
            'ids_arr':{
                campaigns:true,
            },
        },
    },

}

// const [permissions,setPermissions] = useState(dataOne)




const transform = (data, parent) =>  {
    return Object.keys(data).map((key) => {
        const value = data[key];
        const node = {
            label: key,
            checked: false,
            childrenNodes: [],
            parent: parent,
        };

        if (typeof value === "boolean") {
            node.checked = value;
        } else {
            const children = transform(value, node);
            node.childrenNodes = children;
            if (children.every((node) => node.checked)) {
                node.checked = true;
            }
        }

        return node;
    });
}


const updateAncestors = (node) => {
    if (!node.parent) {
        return;
    }

    const parent = node.parent;
    if (parent.checked && !node.checked) {
        parent.checked = false;
        updateAncestors(parent);
        return;
    }

    if (!parent.checked && node.checked) {
        if (parent.childrenNodes.every((node) => node.checked)) {
            parent.checked = true;
            updateAncestors(parent);
            return;
        }
    }

    return;
}

const toggleDescendants = (node) => {
    const checked = node.checked;

    node.childrenNodes.forEach((node) => {
        node.checked = checked;
        toggleDescendants(node);
    })
}

const findNode = (nodes, label, ancestors) => {
    let node = undefined;
    if (ancestors.length === 0) {
        return nodes.filter((node) => node.label === label)[0];
    }

    for (let ancestor of ancestors) {
        const candidates = node ? node.childrenNodes : nodes;
        node = candidates.filter((node) => node.label === ancestor)[0];
    }
    return node?.childrenNodes.filter((node) => node.label === label)[0];
}

const NestedCheckbox = ({ data }) => {
    const [value, setValue] = React.useState('admin');
    const [template,setTemplate] = useState(dataOne)
    //console.log(TEMPLATES[value])


    const handleChange = (event) => {
    if(value=="admin"){
        console.log(template)
        setTemplate(TEMPLATES[value])
    }
        console.log(template)
        setValue(event.target.value);

    };
    const initialNodes = transform(data);
    const [ nodes, setNodes ] = useState(initialNodes);
    //console.log(nodes)

    const handleBoxChecked = (e, ancestors) => {
        const checked = e.currentTarget.checked;
        const node = findNode(nodes, e.currentTarget.value, ancestors);

        node.checked = checked;
        toggleDescendants(node);
        updateAncestors(node);

        setNodes(cloneDeep(nodes));
    }

    return (
        <div>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Template</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                <FormControlLabel value="employee" control={<Radio />} label="Employee" />
                <FormControlLabel value="service" control={<Radio />} label="Service" />
                <FormControlLabel value="mtService" control={<Radio />} label="MT-Service" />
                <FormControlLabel value="driver" control={<Radio />} label="Driver" />
                <FormControlLabel value="custom" control={<Radio />} label="Custom" />
              </RadioGroup>
            </FormControl>
            <NestedCheckboxHelper nodes={nodes}  ancestors={[]} onBoxChecked={handleBoxChecked}/>
        </div>
    );
}

const NestedCheckboxHelper = ({ nodes, ancestors, onBoxChecked }) => {
    const prefix = ancestors.join(".");
    return (
        <SimpleTreeView>
        <TreeItem itemId="1">
            {
                nodes.map(({ label, checked, childrenNodes }) => {
                    const id = `${prefix}.${label}`;
                    let children = null;
                    if (childrenNodes.length > 0) {
                        children = <NestedCheckboxHelper nodes={childrenNodes} ancestors={[...ancestors, label]} onBoxChecked={onBoxChecked} />
                    }

                    return (
                        <li key={id}>
                            <input type="checkbox" name={id} value={label} checked={checked} onChange={(e) => onBoxChecked(e, ancestors)}/>
                            <label htmlFor={id}>{label}</label>
                            {children}
                        </li>
                    )
                })
            }
        </TreeItem>
        </SimpleTreeView>
    )
}



export function Permissions(props) {
  return (
    <div>
        <NestedCheckbox data={dataOne} ancestors={[]}/>
    </div>
  );
}