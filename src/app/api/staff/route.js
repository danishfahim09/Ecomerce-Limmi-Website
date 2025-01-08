import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        {
            /*
            Staff Full Name
            Password
            Staffs_Email_Eddress
            Staffs_Phone_Num
            Phusical_Edress
            Notes
            Staff_member_status
            */
        }
        const {
            name,
            password,
            email,
            phone,
            physical_eddress,
            notes,
            nin,
            dob,
            isactive,
            code
        } = await request.json();
        
        const newStaff = {
            name,
            password,
            email,
            phone,
            physical_eddress,
            notes,
            nin,
            dob,
            isactive,
            code
        }
        console.log(newStaff)
        return NextResponse.json(newStaff)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to create Training"
            }, { status: 500 }
        )
    }
}


