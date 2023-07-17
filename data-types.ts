export interface work{
    workRefId:string,
    title:string,
    description:string,
    workCategoryTitle:string,
    workCategoryDescription:string,
    workCategoryBanner:string,
    location:string,
    isGeneratorBusiness:string,
    generatorName:string,
    generatorPic:string,
    workStatus:string,
    status:string,
    id:number
}

export interface location{
    location:string,
    radius:string,
    locatioCodes:string,
    locationTitle:string,
    id:number
}

export interface personal {
    id:number,
    photo:string,
    name:string,
    phone: string,
    email:string,
    intro:string
    dob:string,
    gender:string,
    address:string, 
    city:string,
    postal_code:string,
    state:string,
    status:string,
    country:string,
    createdOn:string,
    modifiedOn:string
}

export interface business{
    id:number,
    photo:string,
    name:string,
    phone: string,
    email:string,
    intro:string
    landline:string,
    website:string,
    dob:string,
    gender:string,
    address:string, 
    city:string,
    postal_code:string,
    state:string,
    status:string,
    country:string,
    industry:string,
    size:string,
    createdOn:string,
    modifiedOn:string
}

export interface WorkFlowInterface {
    id: number,
    title: string,
    description: string,
    state: string,
    userType: string,
    flowNature: string,
    approver: string,
    feeType: string,
    feeAmount: number,
    autoApprove: boolean,
    createdOn: string
}

export interface work_app{
    applicantName:string,
    applicanPic:string,
    isApplicantBusiness:string,
    applicationRefId:string,
    adminStatus:string,
    generatorStatus:string,
    final_status:string,
    workCategoryTitle:string,
    workCategoryDescription:string,
    generatorName:string,
    generatorPic:string,
    isGeneratorBusiness:string,
    id:number
}
export interface request{
    id:number,
    name:string,
    picture:string,
    description:string,
    amount:string,
}