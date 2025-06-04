enum Subject {
  maths = "maths",
  language = "language",
  science = "science",
  history = "history",
  coding = "coding",
  geography = "geography",
  economics = "economics",
  finance = 'finance',
  business = 'business'
}

type Companion = Models.Document & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
};


interface CreateComanion {
  name: string;
  subject: string;
  topic : string,
  voice: string;
  style: string;
  duration: number;
}

interface GetAllCompanions {
  limit?:number;
  page?:number;
  subject?: string | string[];
  topic?: string | string[]
}

interface BuildClient {
  key? : string;
  sessionToken?:string;
}