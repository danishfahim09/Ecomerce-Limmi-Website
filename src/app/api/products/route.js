import { NextResponse } from "next/server";
export async function POST(request) {
    {
        /*
        -id => aouto ()
        -title
        -slug => aouto()
        -description 
        -image/Images[]
        -Sku
        -barcode
        -product price
        -sale price 
        -catedorie
        -farmer
        -tags[]
        */
      }
    try {
        const { title, couponCode,sku,barcode,productprice,saleprice,catedorie,farmer, expiryDate } = await request.json();
        const newCategory = {title, couponCode, expiryDate }
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message:"Failed to create Coupon"
            },{status:500}
        )
    }
}


