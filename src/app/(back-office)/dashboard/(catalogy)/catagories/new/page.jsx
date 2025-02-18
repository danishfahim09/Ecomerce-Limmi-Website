'use client'
import FormHeading from '@/components/backoffice/FormHeader'
import NewCatagoryForm from '@/components/backoffice/Form/NewCategoryForm'

function NewCatagory() {
  return (
    <div>
      <FormHeading tittle="New Catagory" />
      <NewCatagoryForm />
    </div>
  )
}

export default NewCatagory