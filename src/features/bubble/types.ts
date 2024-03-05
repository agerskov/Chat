export type BubbleParams = {
  theme?: BubbleTheme;
};

export type BubbleTheme = {
  chatWindow?: ChatWindowTheme;
  button?: ButtonTheme;
};

export type TextInputTheme = {
  backgroundColor?: string;
  textColor?: string;
  placeholder?: string;
  newChatText?: string;
  sendButtonColor?: string;
};

export type UserMessageTheme = {
  backgroundColor?: string;
  textColor?: string;
  showAvatar?: boolean;
  avatarSrc?: string;
};

export type BotMessageTheme = {
  backgroundColor?: string;
  textColor?: string;
  showAvatar?: boolean;
  avatarSrc?: string;
};

export type ChatWindowTheme = {
  showTitle?: boolean;
  title?: string;
  titleAvatarSrc?: string;
  welcomeMessage?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  margin?: string;
  fontSize?: number;
  userMessage?: UserMessageTheme;
  botMessage?: BotMessageTheme;
  textInput?: TextInputTheme;
  poweredByTextColor?: string;
  poweredByText?: string;
  poweredByLink?: string;
  isFullPage?: boolean;
};

export type ButtonTheme = {
  size?: 'medium' | 'large';
  backgroundColor?: string;
  iconColor?: string;
  customIconSrc?: string;
  bottom?: number;
  right?: number;
};
