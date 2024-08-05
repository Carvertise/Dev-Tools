import { BooleanField, DateField, NumberField, ReferenceField, Show, 
    SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="_schemaVersion" />
            <TextField source="role" />
            <TextField source="_air_employee" />
            <TextField source="value" />
            <TextField source="_value" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="_deleted" />
            <DateField source="created" />
            <DateField source="modified" />
            <TextField source="_docVersion" />
            <TextField source="_air" />
            <TextField source="_air_lastModified" />
            <TextField source="_checks.instantiation" />
            <TextField source="_db_lastSync" />
            <TextField source="_error" />
            <TextField source="_saving_linked_fields" />
            <TextField source="_special" />
            <TextField source="_tipalti" />
            <TextField source="campaignState._stateChanges" />
            <TextField source="car.color" />
            <TextField source="driverTags" />
            <TextField source="ids.campaign._air" />
            <TextField source="ids_arr.campaigns" />
            <TextField source="location.city" />
            <TextField source="opsTags" />
            <TextField source="phone" />
            <TextField source="selfTags" />
            <TextField source="stable_ids_arr.campaigns" />
            <TextField source="status" />
            <TextField source="tags" />
            <TextField source="_campaignCount" />
            <TextField source="_campaignCountCheck.lastCheck" />
            <TextField source="statistics.gps_tracking_carvertise.last72h" />
            <TextField source="active" />
            <TextField source="_dateSubmitted" />
            <TextField source="preferredLanguage" />
            <TextField source="notes" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);