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
    id:number
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