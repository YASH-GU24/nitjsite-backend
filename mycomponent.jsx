import { Box, Button } from '@admin-bro/design-system'
import React from 'react'
import { useState } from 'react'
import AdminBro, { BasePropertyComponent, useRecord, useTranslation } from 'admin-bro'
import { useCurrentAdmin } from 'admin-bro';
function MyRecordActionComponent(props) {
  const { record: initialRecord, resource, action } = props
  const { record, handleChange, submit } = useRecord(initialRecord, resource.id)
  const { translateButton } = useTranslation()

  const [state, setState] = useState("name");
  const [currentAdmin, setCurrentAdmin] = useCurrentAdmin();
  const data = ['name', 'email', 'img', 'department', 'education_qualification', 'address', 'gender', 'dob', 'designation', 'nationality', 'book_publications', 'conference_publications', 'admin_responsibility', 'patent', 'phd_supervised', 'phd_dissertion', 'awards', 'research_profile', 'research_project', 'personal_link', 'journal', 'event',  'affiliations'];
  if (currentAdmin.role && currentAdmin.role == 'admin') {
    data.push('department', 'position', 'password', 'createdAt', 'updatedAt','sourceOfInfo', 'show',);
  }
  console.log(props);
  const handleSubmit = (event) => {
    submit().then(() => {
    })
  }

  return (
    <>

      <select id="states" onChange={(e) => {
        setState(e.target.value);

      }}>

        {
          data?.map((ele) => {
            return <option value={ele}>{ele}</option>
          })
        }
      </select>
      <Box
        as="form"
        onSubmit={handleSubmit}
      >
        <BasePropertyComponent
          where="edit"
          onChange={handleChange}
          property={resource.editProperties.find((property) => property.name === state)}
          resource={resource}
          record={record}
        />
        <Button variant="primary" size="lg">
          {translateButton('save', resource.id)}
        </Button>
      </Box>
    </>

    // </div>

  )
}
export default MyRecordActionComponent