// import { InputGroup, Label,PropertyInShow,Box,useRecord,BasePropertyComponent } from '@admin-bro/design-system'

// // const MyReactComponent = (props) => {
// //   const { record, property } = props
// //   const value = record.params[property.path] 
// //   return (
// //     <InputGroup>
// //     <Label>{property.name}</Label>
// //     {value}
// //     </InputGroup>
    
// //   )
// // }
// // export default MyReactComponent
import {Box, Button} from '@admin-bro/design-system'
import AdminBro, {BasePropertyComponent, useRecord, useTranslation} from 'admin-bro' 

function MyRecordActionComponent(props) {
  const { record: initialRecord, resource, action } = props

  const { record, handleChange, submit } = useRecord(initialRecord, resource.id)
  const { translateButton } = useTranslation()

  const nameProperty = resource.editProperties.find((property) => property.name === 'education_qualification')
  console.log(nameProperty);
  // const surnameProperty = resource.editProperties.find((property) => property.name === 'surname')
  // console.log(surnameProperty);
  const handleSubmit = (event) => {
    submit().then(() => {
       // do something
    })
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
    >
      <BasePropertyComponent
        where="edit"
        onChange={handleChange}
        property={nameProperty}
        resource={resource}
        record={record}
      />
      <Button variant="primary" size="lg">
        {translateButton('save', resource.id)}
      </Button>
    </Box>
  )
}
export default MyRecordActionComponent