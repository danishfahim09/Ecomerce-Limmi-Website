export const dynamic = 'force-dynamic'
import FormHeading from '@/components/backoffice/FormHeader'
import NewCatagoryForm from '@/components/backoffice/Form/NewCategoryForm'
import { getData } from '@/lib/getData'

async function UpdateCatagory({params:{id}}) {
  const category  =await getData(`categories/${id}`)
 
  return (
    <div>
      <FormHeading tittle="Update Catagory" />
      <NewCatagoryForm  updateData={category} />
    </div>
  )
}

export default UpdateCatagory