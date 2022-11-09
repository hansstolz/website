export type BlogItem = {
    id:number;
    type:string;
    style:string;
    content:string;
    items?:string[];
}

export type BlogData = {
    id: number;
    date: string;
    title: string;
    desc: string;
    img: string;
    url:string;
    contents:BlogItem[];
  };


  export const emptyBlog:BlogData={id:-1,
    date:"",
    title:"",
    desc:"",
    img:"",
    url:"",
    contents:[],
};

const contents:BlogItem[]=[
    {
        id:0,
        type:"Para",
        style:"p",
        content:"Im 1. Teilen wird das Grundgerüst für das Swift Lambda angelegt."
    },
    {
        id:1,
        type:"headline",
        style:"h4",
        content:"Voraussetzungen"
    },
    
{
    id:2,
    type:"list",
    style:"ul",
    content:"Xcode 14",
    items:["Xcode 14","Swift 5.7","Docker","AWS Account","Terminal","Postman, Rested oder Curl"]
},

{
    id:3,
    type:"headline",
    style:"h4",
    content:"Xcode Projekt anlegen"
},

{
    id:4,
    type:"Para",
    style:"p",
    content:"Das Xcode-Projekt für das Swift Lambda wird mit Hilfe des Terminals angelegt.\nTerminal öffnen und folgenden Befehl eingeben:",
},


]

  
export const blogs:BlogData[] =[
    {id:0,
        date:"01.12.2022",
        title:"AWS Lambda mit Swift (1. Teil)",
        desc: "Lambdas lassen sich mit den gängigsten Programmiersprachen wie zum \
        Beispiel Python, JavaScript, Java. Rust und so weiter erstellen.\
        Seit einiger Zeit (Mai 2020) wird auch Swift unterstützt.",
        img:"https://artexxis.s3.eu-central-1.amazonaws.com/Blog/Images/ses.jpg",
        url:"/blogdetail/0",
        contents:contents,
    },

    {id:1,
        date:"01.12.2022",
        title:"AWS Lambda mit Swift (2. Teil)",
        desc:"Im 2. Teil richten wir....",
        img:"https://artexxis.s3.eu-central-1.amazonaws.com/Blog/Images/ses.jpg",
        url:"/blogdetail/1",
        contents:[],
    },

    {id:2,
        date:"01.12.2022",
        title:"AWS Lambda mit Swift (3. Teil)",
        desc:"Im 3. Teil ....",
        img:"https://artexxis.s3.eu-central-1.amazonaws.com/Blog/Images/ses.jpg",
        url:"/blogdetail/2",
        contents:[]
    },
 










]