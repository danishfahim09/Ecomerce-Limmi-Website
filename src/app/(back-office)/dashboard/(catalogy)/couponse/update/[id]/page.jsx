export const dynamic = 'force-dynamic'
import FormHeading from '@/components/backoffice/FormHeader'
import { getData } from '@/lib/getData'
import CouponeForm from '@/components/backoffice/Form/CouponeForm'

async function UpdateCoupone({ params: { id } }) {
  const coupone = await getData(`couponse/${id}`)
  return (
    <div>
      <FormHeading tittle="Update Catagory" />
      <CouponeForm updateData={coupone} />
    </div>
  )
}

export default UpdateCoupone