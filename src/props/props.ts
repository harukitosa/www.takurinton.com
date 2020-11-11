export interface InternProps {
    id: number, 
    company_name: string, 
    overview: string, 
    period: string 
}

export interface MadeProps {
    id: number, 
    name: string,
    url: string, 
    explanation: string
}

export interface SkillProps {
    id: number, 
    name: string
}

export interface MineProps {
    content: string
}

export interface PortfolioProps {
    intern: InternProps[]
    skill: SkillProps[], 
    made: MadeProps[], 
    mine: MineProps
}

export interface Dairyreport {
    id: number, 
    pub_date: string
}

export interface DairyreportProps {
    next: number | null, 
    prev: number | null, 
    results: Dairyreport[]
}

export interface DeiryreportPost {
    pub_date: string, 
    contents: string
}
export interface DairyreportContent {
    comment: [], 
    post: DeiryreportPost
}

export interface HeadProps {
    title: string;
    description: string;
    image: string;
    url: string;
}