import FormHeading from '@/components/backoffice/FormHeader'
import BannerForm from '@/components/backoffice/Form/BannerForm'
import { getData } from '@/lib/getData'

async function UpdateBanner({params:{id}}) {
  const banner  =await getData(`banner/${id}`)
  //console.log(banner)
  return (
    <div>
      <FormHeading tittle="Update Banner" />
      <BannerForm updateData={banner} />
    </div>
  )
}

export default UpdateBanner