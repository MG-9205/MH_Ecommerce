type infoType={
    key:string,
    value:string
}

export interface Product{
    id: number;
    product_name: string;
    title:string;
    Description: string;
    Price: number;
    Img_url: string;
    Cat_id:number;
    Url_slug?:string;
    Info?:Array<infoType>;
}

