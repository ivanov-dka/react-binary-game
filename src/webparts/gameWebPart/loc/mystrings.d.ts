declare interface IGameWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'gameWebPartStrings' {
  const strings: IGameWebPartStrings;
  export = strings;
}
