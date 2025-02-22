'use client';
import FormHeading from '@/components/backoffice/FormHeader'
import CouponeForm from '@/components/backoffice/Form/CouponeForm'
function NewCoupone() {
   

  return (
    <div>
      {/* Heading */}
      <FormHeading tittle="New Coupone" />
      <CouponeForm />
    </div>
  )
}

export default NewCoupone