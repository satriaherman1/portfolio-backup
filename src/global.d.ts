declare interface IFloatButton {
  buttonList: IButtonFloatList[];
  active: string;
}

declare interface ISimpleCard {
  image: any;
  title: string;
  bottomAction: React.ReactElement;
}

interface IButtonFloatList {
  name: string;
  action?: () => any;
  children: any;
}
