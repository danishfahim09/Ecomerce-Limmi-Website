export const dynamic = 'force-dynamic'
import FormHeading from '@/components/backoffice/FormHeader'
import BannerForm from '@/components/backoffice/Form/BannerForm'
import { getData } from '@/lib/getData';

async function NewCoupone() {
  const coupone = await getData()
  return (
    <div>
      {/* Heading */}
      <FormHeading tittle="New Banner" />
      <BannerForm updateData={coupone} title />
    </div>
  );
}

export default NewCoupone