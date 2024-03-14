export interface ICategory {
  name: string;
  links: ILink[];
  href: string;
  img: string;
}

export interface ILink {
  name: string;
  href: string;
}
